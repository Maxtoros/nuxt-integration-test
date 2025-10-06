<template>
  <section class="hero">
    <HeroComponentsLeftPanel />
    <HeroComponentsRightPanel />
    <HeroComponentsBottomPanel />
  </section>
</template>

<style lang="css" scoped>
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 40px;
  flex-wrap: wrap;
  position: relative;
}

@media (max-width: 1024px) {
  .hero {
    flex-direction: column;
    text-align: center;
  }

  .hero-left,
  .hero-right {
    flex: 1 1 100%;
  }

  .cta-button {
    width: 100%;
    max-width: 300px;
  }
}
</style>
