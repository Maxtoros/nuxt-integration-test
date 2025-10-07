<template>
  <div class="hero-right col-6">
    <h1 class="hero-title animate-fade-in-up delay-initial">
      A Unique Partnership<br>
      for the Publication of<br>
      ICC Arbitration Awards
    </h1>
    <p class="hero-description animate-fade-in delay-initial">
      The International Chamber of Commerce (ICC) & Jus Mundi have joined forces to make ICC
      Arbitration Awards and related materials freely available to the global legal community.
    </p>
    <button class="cta-button">
      <span class="icon-font icon-chevron-right" />
      <span>ACCESS ICC AWARDS</span>
    </button>
  </div>
</template>
<style lang="css" scoped>
.hero-right {
  flex: 1;
  max-width: 580px;
  margin-top: 65px;
}

.hero-title {
  font-size: var(--text-3xl);
  font-weight: var(--font-extrabold);
  margin-top: 0;
  margin-bottom: 2rem;
  line-height: 4rem;
  letter-spacing: -1px;
}

.hero-description {
  font-family: var(--font-ibm);
  font-size: var(--text-lg);
  font-weight: var(--font-normal);
  margin-bottom: 5.8125rem;
  line-height: 2rem;
  letter-spacing: 0px;
}

.cta-button {
  background-color: var(--color-secondary);
  color: white;
  border: none;
  font-size: var(--text-base);
  cursor: pointer;
  border-radius: 0.25rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  opacity: 0;
  animation: fade-in var(--duration-fast) ease-in-out var(--delay-late) forwards;

  border-radius: 0.25rem;
  padding: 24px 32px;
  margin-bottom: 24px;

  font-family: var(--font-lato);
  font-weight: var(--font-bold);
  font-size: var(--text-sm);
  line-height: 100%;
  letter-spacing: 2px;
  text-transform: uppercase;
  display: inline-flex;
  align-items: baseline;
  gap: 0.5rem;
  position: relative;
  z-index: 9;
}

.cta-button:hover {
  background-color: #007ccf;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 158, 254, 0.3);
}

.cta-button:hover .icon-chevron-right {
  transform: translateX(4px);
}

.icon-font {
  font-family: var(--font-icons);
}

.icon-chevron-right:before {
  content: '\004E';
  width: 1.5rem;
  height: 1.5rem;
  display: inline-block;
  transform: rotate(-90deg);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: var(--text-xl);
    line-height: 2rem;
  }
}
</style>