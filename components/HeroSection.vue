<template>
  <section class="hero">
    <div class="hero-left">
      <NuxtImg src="/images/logo_icc.svg" alt="ICC Logo" class="logo logo_icc" />
      <div style="position: relative">
        <NuxtImg
          src="/images/logo_jm.svg"
          alt="Jus Mundi Logo"
          class="logo jm-logo"
          style="position: absolute; left: 25%; top: 25%"
        />
        <NuxtImg src="/images/case_bg.gif" alt="Jus Mundi Logo" class="logo jm-logo" />
      </div>
      <!-- <img src="/images/logo_icc.svg" alt="ICC Logo" class="logo logo_icc" >
        <img src="/images/logo_jm.svg" alt="Jus Mundi Logo" class="logo jm-logo" > -->
    </div>
    <div class="hero-right">
      <h1 class="hero-title">
        A Unique Partnership<br >
        for the Publication of<br >
        ICC Arbitration Awards
      </h1>
      <p class="hero-description">
        The International Chamber of Commerce (ICC) & Jus Mundi have joined forces to make ICC
        Arbitration Awards and related materials freely available to the global legal community.
      </p>
      <button class="cta-button">ACCESS ICC AWARDS</button>
    </div>
  </section>
</template>

<style lang="css" scoped>
/* Hero Section */
.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
  gap: 40px;
  flex-wrap: wrap;
}

.hero-left {
  flex: 1;
  text-align: center;
}

.logo {
  max-width: 180px;
  margin: 10px auto;
  display: block;
}

.hero-right {
  flex: 1;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  line-height: 1.3;
}

.hero-description {
  font-size: 1.1rem;
  margin-bottom: 20px;
}

.cta-button {
  background-color: #0070f3;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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

@media (max-width: 768px) {
  .hero-title {
    font-size: 1.5rem;
  }
}
</style>
