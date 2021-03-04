<template>
  <div class="endOrder">
    <h1>Votre commande</h1>
    <div class="addition">
      <img :src="willPrintUrl" :alt="willPrint" />
      <div class="signs">+</div>
      <img :src="patternUrl" :alt="pattern" />
      <div class="signs">=</div>
      <div class="total">{{ total }} €</div>
      <p>{{ format }}</p>
      <div></div>
      <p>{{ pattern }}</p>
    </div>

    <div class="paymentChoice">
      <h2>Règlement</h2>
      <button type="button" class="btn" @click="pay">En espèces</button>
      <button type="button" class="btn" @click="pay">Par carte bancaire</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      format: null,
      willPrint: null,
      willPrintUrl: null,
      pattern: null,
      patternUrl: null,
      giftPrice: null,
      price: null,
      total: null,
    };
  },
  mounted() {
    this.format = localStorage.format;

    this.willPrint = localStorage.willPrint;
    this.willPrintUrl = localStorage.willPrintUrl;

    this.pattern = localStorage.pattern;
    this.patternUrl = localStorage.patternUrl;

    this.giftPrice = parseFloat(localStorage.gift);
    this.price = parseFloat(localStorage.price);

    this.total = (this.price + this.giftPrice).toFixed(2);
  },
  methods: {
    pay() {
      localStorage.setItem("Total", this.total);
      return this.$router.push("/Payment");
    },
  },
};
</script>

<style lang="scss">
.endOrder {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.addition {
  display: grid;
  grid-template-columns: 12rem 20px 12rem 20px 12rem;
  grid-template-rows: 10rem 2rem;
  align-items: center;
  justify-items: center;
  font-size: 2rem;
  margin: 2em auto;

  img {
    background-color: white;
    width: 10rem;
    height: 10rem;
    border-radius: 20px;
  }

  .signs,
  p {
    font-family: "Heebo", sans-serif;
  }

  p {
    font-size: 0.5em;
    margin: 1em 0;
  }

  .total {
    border: 5px solid var(--gold);
    border-radius: 100px;
    height: 10rem;
    width: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.paymentChoice {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  h2 {
    text-align: center;
    width: 100%;
  }

  button {
    margin: 1em;
  }
}
</style>
