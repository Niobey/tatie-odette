<template>
  <div class="backoffice">
    <div class="header-bo">
      <Logo id="home-logo" title="Festival Nation Sounds" />
    </div>
    <div class="container-bo">
      <h2 class="title">BackOffice</h2>
      <p>Cliquez sur un bouton pour modifier une page</p>
      <router-link to="/programmation-administer">
        <button>Programmation</button>
      </router-link>
      <router-link to="/ticket-administer">
        <button>Billetterie</button>
      </router-link>
      <router-link to="/faq-actuality-administer">
        <button>Informations Pratiques & FAQ</button>
      </router-link>
      <router-link to="/plan-administer">
        <button>Plan du festival</button>
      </router-link>
      <router-link to="/general-informations-administer">
        <button>Informations Générales</button>
      </router-link>
      <router-link to="/meet-artists-administer">
        <button>Rencontrer les artistes</button>
      </router-link>
      <router-link to="/contact-administer">
        <button>Contact</button>
      </router-link>
      <router-link to="/legal-notice-administer">
        <button>Mentions Légales</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import Logo from "../assets/logo.svg";
export default {
  components: {
    Logo,
  },
};
</script>

<<style lang="scss">
.backoffice {
  .header-bo {
    background: var(--orange);
    height: 7rem;
  }

  #home-logo {
    margin: 1rem 1rem 4rem 8rem;
    width: 8rem;
    z-index: 1;
  }

  .container-bo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .title {
    margin-top: 4vh;
    font-weight: bold;
    font-size: 2em;
  }

  p {
    margin-bottom: 4vh;
  }

  button {
    background: white;
    border-radius: 50px;
    border: 1px solid black;
    box-shadow: -2px 5px 0 var(--blue);
    cursor: pointer;
    font-weight: 700;
    margin-top: 0.7em;
    margin-bottom: 0.3rem;
    min-width: 25rem;
    padding: 1em 4em;
  }
}
</style>
