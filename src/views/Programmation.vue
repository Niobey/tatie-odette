<template>
  <div class="programmation">
    <h1>Programmation</h1>
    <div class="container">
      <div class="card">
        <div class="card_title">
          <h3>Petit Biscuit</h3>
          <span>/ Scène B / Vendredi / 21h /</span>
        </div>
        <img
          src="https://media.virginradio.fr/article-4260166-head-f8/petit-biscuit.jpg"
          alt="Petit Biscuit"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.container {
  margin-top: 10em;
}

.card {
  margin: auto;
  width: 80%;
  height: 140px;
  margin-bottom: 10px;
  font-family: Helvetica;
}

.card_title {
  width: auto;
  background: #fcf5be;
  display: flex;
  border-bottom: 2px solid #ff8e4e;
  padding-top: 0.4em;
}

.card_title h3 {
  width: 92px;
  margin: 0;
  font-family: Raleway;
  font-style: normal;
  font-weight: 800;
  font-size: 12px;
  color: #000000;
}

.card_title span {
  width: 188px;
  height: 18px;
  left: 161px;
  top: 181px;
  font-family: Raleway;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  text-align: right;
  margin-left: auto;
  color: #000000;
}

img {
  margin-top: 0.5em;
  width: 100%;
  height: auto;
  border: 2px solid #a9def9;
}
</style>

