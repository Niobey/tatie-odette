<template>
  <div class="payment">
    <h1>Total à payer</h1>
    <div class="total">{{ total }} €</div>
    <router-link to="/SummaryOrder">
      <p>Veuillez suivre les indications de la borne de paiement</p>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      total: null,
    };
  },
  mounted() {
    this.total = localStorage.Total;
  },
};
</script>

<style lang="scss">
.payment {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  align-items: center;

  .total {
    border: 8px solid var(--gold);
    border-radius: 12em;
    height: 16rem;
    width: 16rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3.5em;
  }

  p {
    font-size: 2.5em;
    font-weight: 700;
    max-width: 16em;
    text-align: center;
  }
}
</style>
