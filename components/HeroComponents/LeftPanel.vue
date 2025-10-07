<template>
  <div class="hero-left col-6">
    <div class="container-logo-icc animate-grow">
      <NuxtImg
        src="/images/logo_icc.svg"
        alt="ICC Logo"
        class="logo logo-icc animate-fade-in delay-initial"
      />
    </div>

    <div class="jm-group">
      <div class="logo jm-container animate-slide-up-diagonal delay-mid">
        <NuxtImg src="/images/logo_jm.svg" alt="Jus Mundi Logo" class="logo-jm" />
      </div>

      <video autoplay muted loop playsinline class="logo-animated animate-fade-in delay-mid">
        <source src="/animations/case_bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</template>

<style lang="css" scoped>
.hero-left {
  flex: 1;
  text-align: center;
  max-width: 580px;
}

.container-logo-icc {
  width: 30.1875rem;
  height: 30.1875rem;
  z-index: 99;
  position: relative;
  margin: 10px auto;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  top: -135px;
}

.logo-icc {
  width: 20.246rem;
  height: 10.3246rem;
}

.logo {
  margin: 10px auto;
  display: block;
}

.logo-animated {
  width: 29.9312rem;
  height: 31.0195rem;
  position: relative;
  top: -40rem;
  left: 3rem;
}

.jm-group {
  height: 3.125rem;
  opacity: 0;
  animation: fade-in var(--duration-fast) ease-in-out var(--delay-mid) forwards;
}

.jm-container {
  height: 11.6953rem;
  width: 11.6953rem;
  position: relative;

  z-index: 999;
  box-shadow: 0 0 8rem rgba(0, 0, 0, 0.1);
  border-radius: 99px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.jm-container > img {
  width: 6.73rem;
}

@media (max-width: 1024px) {
  .hero-left {
    max-width: 480px;
  }

  .container-logo-icc {
    width: 18rem;
    height: 18rem;
    top: -90px;
  }

  .logo-icc {
    width: 12rem;
    height: 12rem;
  }

  .logo-animated {
    width: 20rem;
    height: 20rem;
    position: relative;
    top: -27rem;
    left: 1rem;
  }

  .jm-group {
    height: 3.125rem;
  }

  .jm-container {
    height: 8rem;
    width: 8rem;
  }

  .jm-container > img {
    width: 5.73rem;
  }
}

@media (max-width: 768px) {
  .hero-left {
    max-width: 380px;
  }

  .container-logo-icc {
    width: 10rem;
    height: 10rem;
    top: 0;
  }

  .logo-icc {
    width: 6rem;
    height: 6rem;
  }

  .logo-animated {
    width: 10rem;
    height: 10rem;
    position: relative;
    top: -12rem;
    left: 1.5rem;
  }

  .jm-group {
    height: 3.125rem;
  }

  .jm-container {
    height: 6rem;
    width: 6rem;
    position: relative;
  }

  .jm-container > img {
    width: 4.73rem;
  }
}
</style>
