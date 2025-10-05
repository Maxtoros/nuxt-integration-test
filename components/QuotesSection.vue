<template>
  <div class="grid">
    <div class="row-6">
      <section class="quote-section">
        <p class="quote-text">
          <NuxtImg
            src="/images/quote_icon.svg"
            alt="opening quote icon"
            class="icon quote-icon opening-quote"
          />
          Publicising and disseminating information about arbitration has been one of ICC’s
          commitments since its creation and an instrumental factor in facilitating the development
          of trade worldwide.
          <NuxtImg
            src="/images/quote_icon.svg"
            alt="closing quote icon"
            class="icon quote-icon closing-quote"
          />
        </p>
        <p class="quote-source">
          Note to the Parties and the Arbitral Tribunals<br >
          on the Conduct of Arbitration under the ICC Rules of Arbitration
        </p>
        <a href="#" class="quote-link">READ THE WHOLE DOCUMENT</a>
      </section>
    </div>
  </div>
</template>

<style lang="css" scoped>
.quote-section {
  text-align: center;
  padding: 60px 20px;
}

.quote-text {
  max-width: 800px;
  margin: 0 auto 1rem;

  font-family: Larken;
  font-style: italic;
  font-weight: 400;
  font-size: 1rem;
  line-height: 2rem;
  letter-spacing: 0px;
  text-align: justify;

  display: flex;
  gap: 32px;
}

.quote-mark {
  color: #0070f3;
  font-size: 2rem;
  font-style: normal;
}

.quote-source {
  color: #2c2b2e;
  margin-bottom: 1.5rem;
  font-family: IBM Plex Sans;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: 0px;
  text-align: center;
}

.quote-link {
  font-family: Lato;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1rem;
  letter-spacing: 2px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 0%;
  color: #2c2b2e;
}

@media (max-width: 768px) {
  .quote-text {
    font-size: 1rem;
  }
}

.icon {
  display: block;
}
.quote-icon {
  width: 28px;
  height: 20px;
}
.opening-quote {
  transform: rotate(180deg);
  align-self: start;
}
.closing-quote {
  align-self: end;
}
</style>
