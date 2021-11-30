<style scoped>

footer {
  position: relative;
  width: 100vw;
  padding-top: 40px;
  padding-bottom: 120px;
  color: white;
  @apply bg-gradient-to-tr from-blue-light via-blue to-blue-dark;
}

footer .footer-content {
  position: relative;
  display: grid;
  grid-gap: 4em;
  grid-template-columns: repeat(4, max-content);
  justify-content: space-evenly;
  max-width: 1300px;
  padding-left: 60px;
  padding-right: 60px;
  margin: 0 auto;
}

footer a {
  color: unset;
  text-decoration: unset;
  margin: 2px 0;
  padding-left: 0;
}

footer h3 {
  text-transform: uppercase;
  text-decoration: none;
  color: var(--fluorescent-blue);
  font-size: 12pt;
}

.footer-section {
  display: flex;
  flex-direction: column;
  font-size: smaller;
}

#socials a {
  @apply flex items-center gap-2;
}

#copyright {
  width: 100vw;
  color: white;
  line-height: 40pt;
  position: absolute;
  bottom: 0;
  text-align: center;
  font-size: smaller;
  @apply bg-gray-900;
}

@media screen and (max-width: 1366px) {
  footer .footer-content {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}
</style>

<template>
  <footer>
    <div class="footer-content">
      <div class="footer-section">
        <h3>
          <a href="/#">
            <img src="~/assets/images/sandstone-logo.svg" alt="Sandstone Logo" width="220px" class="filter-white" />
          </a>
        </h3>
          Sandstone Ventures Pty Ltd<br>
          A.C.N 655 223 591
      </div>
      <div id="resources" class="footer-section">
        <h3>Resources</h3>
        <a target="_blank" href="https://cardanoscan.io/pool/40183423c226189d508db4b21bf94b790cf4d096134a9afbc2bd5318">Cardanoscan</a>
        <a target="_blank" href="https://yoroi-wallet.com/#/">Yoroi Wallet</a>
        <a target="_blank" href="https://adapools.org/pool/40183423c226189d508db4b21bf94b790cf4d096134a9afbc2bd5318">ADAPools</a>
        <a target="_blank" href="https://pooltool.io/pool/40183423c226189d508db4b21bf94b790cf4d096134a9afbc2bd5318/awards">PoolTool</a>
      </div>
      <div id="information" class="footer-section">
        <h3>Information</h3>
        <a href="mailto:info@sandstone.io?subject=General Enquiry">Contact Us</a>
        <router-link to="privacy">Privacy Policy</router-link>
      </div>
      <div id="socials" class="footer-section">
        <h3>Social Links</h3>
        <a target="_blank" href="https://twitter.com/sandstonepool" role="button">
          <img src="~/assets/images/twitter_white.svg" alt="twitter" width="30px" />
          Twitter
        </a>
        <a target="_blank" href="https://t.me/sandstonepool" role="button">
          <img src="~/assets/images/telegram_white.svg" alt="telegram" width="30px" />
          Telegram
        </a>
        <a target="_blank" href="https://github.com/sandstonepool" role="button">
          <img src="~/assets/images/github_white.svg" alt="github" width="30px" />
          GitHub
        </a>
      </div>
    </div>
    <div id="copyright">
      Sandstone Ventures Pty Ltd {{ new Date().getFullYear() }}
    </div>
  </footer>
</template>