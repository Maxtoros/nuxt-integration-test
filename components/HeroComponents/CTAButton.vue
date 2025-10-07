<template>
  <header class="top-right">
    <button class="nav-button">
      <embed class="nav-button_icon" src="/images/ico-arrow_up.svg" />
      try jus mundi
    </button>
  </header>
</template>

<style scoped>
.top-right {
  text-align: right;
  padding: 20px 65px;
  position: relative;
  z-index: 999;
}

/* draw green line */
.top-right:before {
  content: '';
  width: 1.5rem;
  border-bottom: solid 2px var(--color-green-separator);
  position: absolute;
  left: 0;
  top: 50%;
  z-index: 1;
  margin: 0 65px;
}

.nav-button {
  background: white;
  color: var(--color-main);
  border: none;
  cursor: pointer;
  box-shadow: 0px 8px 32px 0px #254f6d3d;
  font-family: var(--font-lato);
  font-weight: var(--font-bold);
  font-size: var(--text-sm);
  line-height: 100%;
  letter-spacing: 0.125rem;
  text-transform: uppercase;
  opacity: 1;
  gap: 1rem;
  border-radius: 0.25rem;
  padding: 1rem;
}

.nav-button_icon {
  margin-right: 1rem;
}

@media (max-width: 768px) {
  .nav-button {
    font-size: var(--text-xxs);
  }

  .top-right {
    padding: 20px 30px;
  }

  /* draw green line */
  .top-right:before {
    margin: 0 30px;
  }
}
</style>
