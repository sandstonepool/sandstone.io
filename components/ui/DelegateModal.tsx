"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { POOL_ID_BECH, POOL_TICKER } from "@/lib/utils/constants";
import { XMarkIcon, CheckCircleIcon, ExclamationTriangleIcon } from "@heroicons/react/24/solid";

type WalletInfo = {
  key: string;
  name: string;
  icon: string;
};

type DelegateStep = "select-wallet" | "connecting" | "delegating" | "success" | "error";

export function DelegateModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [wallets, setWallets] = useState<WalletInfo[]>([]);
  const [step, setStep] = useState<DelegateStep>("select-wallet");
  const [selectedWallet, setSelectedWallet] = useState<string>("");
  const [txHash, setTxHash] = useState<string>("");
  const [error, setError] = useState<string>("");

  // Detect available CIP-30 wallets
  useEffect(() => {
    if (!open) return;

    const detectWallets = () => {
      const cardano = (window as unknown as Record<string, unknown>).cardano as Record<string, unknown> | undefined;
      if (!cardano) {
        setWallets([]);
        return;
      }

      const detected: WalletInfo[] = [];
      // Known wallet keys to check
      const walletKeys = [
        "nami", "eternl", "flint", "lace", "typhon",
        "gerowallet", "nufi", "begin", "yoroi", "vespr",
      ];

      for (const key of walletKeys) {
        const wallet = cardano[key] as { name?: string; icon?: string; apiVersion?: string } | undefined;
        if (wallet && typeof wallet === "object" && wallet.name) {
          detected.push({
            key,
            name: wallet.name,
            icon: wallet.icon || "",
          });
        }
      }

      // Also check for any other CIP-30 wallets we might have missed
      for (const key of Object.keys(cardano)) {
        if (
          walletKeys.includes(key) ||
          typeof cardano[key] !== "object" ||
          !cardano[key]
        ) continue;
        const wallet = cardano[key] as { name?: string; icon?: string; apiVersion?: string };
        if (wallet.name && wallet.apiVersion) {
          detected.push({
            key,
            name: wallet.name,
            icon: wallet.icon || "",
          });
        }
      }

      setWallets(detected);
    };

    // Small delay to let wallet extensions inject
    const timer = setTimeout(detectWallets, 200);
    return () => clearTimeout(timer);
  }, [open]);

  // Reset state when modal opens
  useEffect(() => {
    if (open) {
      setStep("select-wallet");
      setSelectedWallet("");
      setTxHash("");
      setError("");
    }
  }, [open]);

  const handleDelegate = useCallback(async (walletKey: string) => {
    setSelectedWallet(walletKey);
    setStep("connecting");

    try {
      const { BrowserWallet, Transaction } = await import("@meshsdk/core");
      const wallet = await BrowserWallet.enable(walletKey);

      setStep("delegating");

      const rewardAddresses = await wallet.getRewardAddresses();
      const tx = new Transaction({ initiator: wallet });
      tx.delegateStake(rewardAddresses[0], POOL_ID_BECH);

      const unsignedTx = await tx.build();
      const signedTx = await wallet.signTx(unsignedTx);
      const hash = await wallet.submitTx(signedTx);

      setTxHash(hash);
      setStep("success");
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      if (message.toLowerCase().includes("user declined") || message.toLowerCase().includes("user cancel")) {
        setError("Transaction was cancelled.");
      } else if (message.toLowerCase().includes("refused")) {
        setError("Wallet connection was refused.");
      } else {
        setError(message || "An unexpected error occurred.");
      }
      setStep("error");
    }
  }, []);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 pt-5 pb-3">
              <h2 className="text-lg font-semibold text-gray-900">
                {step === "select-wallet" && `Delegate to [${POOL_TICKER}]`}
                {step === "connecting" && "Connecting..."}
                {step === "delegating" && "Delegating..."}
                {step === "success" && "Delegation Submitted!"}
                {step === "error" && "Delegation Failed"}
              </h2>
              <button
                onClick={onClose}
                className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Close"
              >
                <XMarkIcon className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Content */}
            <div className="px-6 pb-6">
              {/* Wallet Selection */}
              {step === "select-wallet" && (
                <>
                  {wallets.length > 0 ? (
                    <>
                      <p className="text-sm text-gray-500 mb-4">
                        Select your Cardano wallet to delegate:
                      </p>
                      <div className="space-y-2">
                        {wallets.map((w) => (
                          <button
                            key={w.key}
                            onClick={() => handleDelegate(w.key)}
                            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all text-left group"
                          >
                            {w.icon && (
                              <img
                                src={w.icon}
                                alt={w.name}
                                className="w-8 h-8 rounded-lg"
                              />
                            )}
                            <span className="font-medium text-gray-900 group-hover:text-blue-700 transition-colors">
                              {w.name}
                            </span>
                          </button>
                        ))}
                      </div>
                    </>
                  ) : (
                    <div className="text-center py-6">
                      <ExclamationTriangleIcon className="w-10 h-10 text-amber-500 mx-auto mb-3" />
                      <p className="text-sm text-gray-600 mb-4">
                        No Cardano wallet detected. Install a browser wallet extension to delegate.
                      </p>
                      <div className="flex flex-wrap gap-2 justify-center text-xs">
                        {[
                          { name: "Lace", url: "https://www.lace.io/" },
                          { name: "Eternl", url: "https://eternl.io/" },
                          { name: "Nami", url: "https://namiwallet.io/" },
                          { name: "Vespr", url: "https://vespr.xyz/" },
                        ].map((w) => (
                          <a
                            key={w.name}
                            href={w.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 rounded-full border border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-600 hover:text-blue-700 transition-all"
                          >
                            {w.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}

              {/* Connecting / Delegating */}
              {(step === "connecting" || step === "delegating") && (
                <div className="flex flex-col items-center py-8">
                  <div className="w-10 h-10 border-3 border-blue-600 border-t-transparent rounded-full animate-spin mb-4" />
                  <p className="text-sm text-gray-600">
                    {step === "connecting"
                      ? "Approve the connection in your wallet..."
                      : "Please sign the transaction in your wallet..."}
                  </p>
                </div>
              )}

              {/* Success */}
              {step === "success" && (
                <div className="flex flex-col items-center py-6">
                  <CheckCircleIcon className="w-12 h-12 text-green-500 mb-3" />
                  <p className="text-sm text-gray-600 text-center mb-3">
                    Your delegation to [{POOL_TICKER}] has been submitted! It will take effect at the start of the next epoch.
                  </p>
                  {txHash && (
                    <a
                      href={`https://cardanoscan.io/transaction/${txHash}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-blue-600 hover:text-blue-800 underline underline-offset-2"
                    >
                      View transaction on Cardanoscan
                    </a>
                  )}
                </div>
              )}

              {/* Error */}
              {step === "error" && (
                <div className="flex flex-col items-center py-6">
                  <ExclamationTriangleIcon className="w-12 h-12 text-red-500 mb-3" />
                  <p className="text-sm text-gray-600 text-center mb-4">
                    {error}
                  </p>
                  <button
                    onClick={() => setStep("select-wallet")}
                    className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Try again
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
