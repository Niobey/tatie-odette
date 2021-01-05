<template>
  <div class="menu">
    <button class="btn-menu">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        viewBox="0 0 20 20"
        xml:space="preserve"
      >
        <path id="XMLID_6_" class="burger0" d="M0 8.5h20v3H0z" />
        <path id="XMLID_7_" class="burger0" d="M0 0h20v3H0z" />
        <path id="XMLID_8_" class="burger0" d="M0 17h20v3H0z" />
      </svg>
    </button>
  </div>
</template>

<style lang="scss">
@function remCalc($target-px, $context: 16) {
  @return ($target-px / $context) * 1rem;
}

.btn-menu {
  align-items: center;
  background: var(--dark);
  border: none;
  box-shadow: 3px 4px 0px var(--green);
  display: flex;
  float: right;
  height: 50px;
  justify-content: center;
  margin-top: remCalc(12);
  cursor: pointer;
  width: 50px;

  @media (min-width: 576px) {
    margin-top: remCalc(50);
    margin-right: remCalc(50);
  }

  svg {
      width: 20px;
  }

  .burger0 {
    fill: #fff;
  }
}
</style>
