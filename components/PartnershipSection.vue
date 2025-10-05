<template>
  <div class="grid">
    <div class="row-6">
      <section class="why-section">
        <h2 class="why-title">Why this partnership?</h2>
        <p class="why-text">
          Throughout its 100-year history, ICC has brought global business together to support an
          international rules-based order, including the promotion of global trade and commerce
          through the work of the ICC International Court of Arbitration.
        </p>
        <p class="why-text">
          ICC has partnered with Jus Mundi to provide full public access to all publishable ICC
          International Court of Arbitration awards and related documents made as of 1 January 2019
        </p>
      </section>
    </div>
  </div>
</template>

<style lang="css" scoped>
.why-section {
  text-align: center;
  gap: 32px;
  padding-bottom: 4rem;
}

.why-title {
  font-family: Larken;
  font-weight: 800;
  font-size: 3.5rem;
  line-height: 4rem;
  letter-spacing: -1px;
  text-align: center;
  position: relative;
}

/* draw green lines */
.why-title:after {
  content: '';
  width: 1.5rem;
  border-bottom: solid 2px #6ad300;
  position: absolute;
  left: 0;
  top: 50%;
  z-index: 1;
}

.why-title:before {
  content: '';
  width: 1.5rem;
  border-bottom: solid 2px #6ad300;
  position: absolute;
  right: 0;
  top: 50%;
  z-index: 1;
}

.why-text {
  max-width: 800px;
  margin: 0 auto;
  margin-top: 2rem;
  font-family: IBM Plex Sans;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 2rem;
  letter-spacing: 0px;
  text-align: center;
}

@media (max-width: 768px) {
  .why-title {
    font-size: 1.5rem;
  }
}
</style>
