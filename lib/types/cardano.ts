export interface PoolStats {
  poolId: string;
  lifetimeBlocks: number;
  currentEpochBlocks: number;
  lifetimeRewards: string;
  activePledge: string;
  interest: number;
  liveStake: string;
  saturationLevel: string;
}
