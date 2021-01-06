<template>
  <div class="home">
    <h1>Home page</h1>
    <div class="circle-white illu"></div>
    <div class="circle-orange illu"></div>
    <SunBlue class="sun-blue illu" />
    <CloudWhite class="cloud-white illu" />
    <CloudYellow class="cloud-yellow illu" />
    <CloudGreen class="cloud-green illu" />
    <CloudPink class="cloud-pink illu" />
    <CloudBlue class="cloud-blue illu" />
    <CloudOrange class="cloud-orange illu" />
    <LeavesRight class="leaves-right illu" />
    <LeavesLeft class="leaves-left illu" />
    <Dots class="dots illu" />
    <Logo id="home-logo" />
    <router-link class="begin" to="/programmation">
      <button class="btn">Voir la programmation</button>
    </router-link>
  </div>
</template>

<script>
import SunBlue from "../assets/sun-blue.svg";
import Logo from "../assets/logo.svg";
import CloudYellow from "../assets/cloud-yellow.svg";
import CloudGreen from "../assets/cloud-green.svg";
import CloudPink from "../assets/cloud-pink.svg";
import CloudOrange from "../assets/cloud-orange.svg";
import CloudBlue from "../assets/cloud-blue.svg";
import LeavesRight from "../assets/leaves-right.svg";
import LeavesLeft from "../assets/leaves-left.svg";
import CloudWhite from "../assets/cloud-white.svg";
import Dots from "../assets/dots.svg";

export default {
  components: {
    Logo,
    CloudOrange,
    CloudBlue,
    SunBlue,
    CloudYellow,
    CloudWhite,
    CloudGreen,
    CloudPink,
    LeavesRight,
    LeavesLeft,
    Dots,
  },
};
</script>

<style lang="scss">
.home {
  background: var(--yellow);
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  margin: 0;
  overflow: hidden;
  position: absolute;
  width: 100%;
  z-index: -1;

  h1 {
    display: none;
  }

  img {
    border: none;
  }

  .illu {
    position: absolute;
    stroke-width: 1px;
  }

  .circle-white {
    background: white;
    border-radius: 100%;
    height: clamp(20rem, 20vw, 50rem);
    transform: translate(-10%, 150%);
    width: clamp(20rem, 20vw, 50rem);
  }

  .circle-orange {
    background: var(--orange);
    border-radius: 100%;
    height: clamp(40rem, 40vw, 50rem);
    top: -24rem;
    right: -16rem;
    width: clamp(40rem, 40vw, 50rem);
  }

  .sun-blue {
    transform: translate(0%, -50%);
    width: clamp(35rem, 45vw, 60rem);
  }

  .cloud-yellow {
    transform: translate(0%, -20%);
    width: clamp(48rem, 55vw, 60rem);
  }

  .cloud-green {
    transform: translate(-85%, 25%);
    width: clamp(24rem, 32vw, 40rem);
  }

  .cloud-pink {
    transform: translate(45%, 85%);
    width: clamp(38rem, 40vw, 45rem);
  }

  .cloud-blue {
    transform: translate(130%, -30%);
    width: clamp(25rem, 40vw, 35rem);
  }

  .cloud-orange {
    top: 20%;
    transform: translate(-70%, 0);
    width: clamp(28rem, 30vw, 30rem);
  }

  .cloud-white {
    top: -15rem;
    right: 60vw;
    width: 30rem;
  }

  .leaves-left {
    left: calc(2vw - 10%);
    bottom: 14vw;
    width: clamp(12rem, 33vw, 22rem);
  }

  .leaves-right {
    right: -3rem;
    top: calc(10vw + 30rem);
    width: 13rem;
  }

  .dots {
    right: -5vw;
    top: 20vh;
    width: clamp(15rem, 30vw, 20rem);
  }
}

.begin {
  transform: translate(0%, 3em);
  z-index: 10;
}

.btn {
  padding: 1em 4em;
  border: 1px solid black;
  background: white;
  border-radius: 50px;
  box-shadow: -2px 5px 0 var(--blue);
  font-weight: 700;
}

#home-logo {
  width: 20rem;
  z-index: 1;
}
</style>
