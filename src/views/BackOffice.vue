<template>
  <div class="backoffice">
    <div class="header-bo">
      <Logo id="home-logo" title="Festival Nation Sounds" />
    </div>
    <container class="container-bo">
        <h2 class="title">Cliquer sur un boutton pour modifier une page</h2>
      <router-link class="begin" to="/programmation-administer">
        <button>Programmation</button>
      </router-link>
      <router-link class="begin" to="/ticket-administer">
        <button>Billeterie</button>
      </router-link>
      <router-link class="begin" to="/faq-actuality-administer">
        <button>Informations Pratiques & FAQ</button>
      </router-link>
      <router-link class="begin" to="/plan-administer">
        <button>Plan du festival</button>
      </router-link>
      <router-link class="begin" to="/general-informations-administer">
        <button>Informations Générales</button>
      </router-link>
      <router-link class="begin" to="/meet-artists-administer">
        <button>Rencontre les artistes</button>
      </router-link>
      <router-link class="begin" to="/contact-administer">
        <button>Contact</button>
      </router-link>
      <router-link class="begin" to="/legal-notice-administer">
        <button>Mentions Légales</button>
      </router-link>
    </container>
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

    .header-bo{
        background: var(--orange);
        height: 7rem;
    }

        #home-logo {
  margin: 1rem 1rem 4rem 8rem;
  width: 8rem;
  z-index: 1;
}

    .container-bo{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .title{
        margin-top: 1rem;
        font-weight: 400;
    }

    .begin button {

        margin-top: .7em;
        margin-bottom : .3rem;
    }
    </style>

