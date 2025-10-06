<template>
  <section class="hero">
    <div class="hero-left">
      <div class="container-logo animate-grow">
        <NuxtImg
          src="/images/logo_icc.svg"
          alt="ICC Logo"
          class="logo logo_icc animate-fade-in delay-initial"
        />
      </div>

      <div class="jm-group">
        <div class="logo jm-logo jm-container animate-slide-up-diagonal delay-mid">
          <NuxtImg src="/images/logo_jm.svg" alt="Jus Mundi Logo" style="width: 3rem" />
        </div>

        <video
          autoplay
          muted
          loop
          playsinline
          class="logo jm-logo animate-fade-in delay-mid"
          style="position: relative; top: -12rem; left: 3rem"
        >
          <source src="/animations/case_bg.mp4" type="video/mp4" >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
    <div class="hero-right">
      <h1 class="hero-title animate-fade-in-up delay-initial">
        A Unique Partnership<br >
        for the Publication of<br >
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
    <div class="hero-bottom" />
  </section>
</template>

<style lang="css" scoped>
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  gap: 0 40px;
  flex-wrap: wrap;
}

.hero-left {
  flex: 1;
  text-align: center;
  max-width: 580px;
}

.container-logo {
  width: 16rem;
  height: 16rem;
  z-index: 99;
  position: relative;
  margin: 10px auto;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);
}

.logo {
  max-width: 180px;
  margin: 10px auto;
  display: block;
}

.jm-group {
  height: 3.125rem;
  opacity: 0;
  animation: fade-in var(--duration-fast) ease-in-out var(--delay-mid) forwards;
}

.jm-container {
  height: 5rem;
  width: 5rem;
  position: relative;

  z-index: 99;
  box-shadow: 0 0 8rem rgba(0, 0, 0, 0.1);
  border-radius: 99px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-right {
  flex: 1;
  max-width: 580px;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  margin-top: 0;
  margin-bottom: 2rem;
  line-height: 4rem;
  letter-spacing: -1px;
}

.hero-description {
  font-family: IBM Plex Sans;
  font-size: 1.125rem;
  font-weight: 400;
  margin-bottom: 5.8125rem;
  line-height: 2rem;
  letter-spacing: 0px;
}

.cta-button {
  background-color: #009efe;
  color: white;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 0.25rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  opacity: 0;
  animation: fade-in var(--duration-fast) ease-in-out var(--delay-late) forwards;

  border-radius: 0.25rem;
  padding: 24px 32px;
  margin-bottom: 24px;

  font-family: Lato;
  font-weight: 700;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 2px;
  text-transform: uppercase;
  display: inline-flex;
  align-items: baseline;
  gap: 0.5rem;
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
  font-family: 'JUS MUNDI FONT';
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

.hero-bottom {
  position: relative;
  width: 100%;
  height: 7.5rem;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #f5f5f5 69.79%);
}

/* draw green line */
.hero-bottom:before {
  content: '';
  height: 1.5rem;
  border-left: solid 2px #6ad300;
  position: absolute;
  left: 0;
  top: 50%;
  z-index: 1;
  margin: 0 65px;
}

.hero-bottom:after {
  content: '';
  height: 1.5rem;
  display: inline-block;
  position: absolute;
  top: calc(100% - 38px);
  right: 0;
  width: 40px;
  height: 2px;
  z-index: 1;
  background-color: #6ad300;
  transform: rotate(45deg);
  transform-origin: bottom right;
  margin: 0 65px;
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
    line-height: 2rem;
  }
}
</style>
