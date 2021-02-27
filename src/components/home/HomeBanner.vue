<template>
  <div class="home__banner">
    <div class="container">
      <div class="home__banner--wrapper">
        <div class="left-block">
          <h3>Электронная подпись без флешек?</h3>
          <p>За пару кликов? Теперь это реальность!</p>
        </div>
        <div class="right-block">
          <button >Узнать больше</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeBanner',
  methods: {
  },
};
</script>

<style lang="scss">
.home__banner {
  background: #FFDA7B;
  height: 280px;
  padding: 20px 0;

  @media (min-width: 400px) {
    height: 220px;
  }

  @media (min-width: 768px) {
    height: auto;
    padding: 0;
  }

  &--wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    // height: 140px;
    flex-direction: column;

    @media (min-width: 768px) {
      height: 140px;
      flex-direction: row;
    }

    .left-block {
      display: block;
      position: relative;

      @media (min-width: 768px) {
        padding-left: 96px;
      }
      &:before {
        margin: 0 auto;
        display: block;
        content: '';
        width: 50px;
        top: 0;
        left: 0;
        height: 65px;;
        background-image: url('../../../public/images/icons/phone.svg');
        background-size: contain;
        background-repeat: no-repeat;

        @media (min-width: 768px) {
          position: absolute;
        }
      }

      h3 {
        font-family: 'Circe';
        font-size: 24px;
        font-style: normal;
        font-weight: 800;
        line-height: 30px;
        letter-spacing: 0em;
        text-align: left;
        color: #242424;
        padding: 0;
        margin: 0;
        text-align: center;

        @media (min-width: 768px) {
          text-align: right;
        }
      }

      p {
        font-family: 'Circe';
        font-size: 20px;
        font-style: normal;
        font-weight: 350;
        line-height: 30px;
        letter-spacing: 0em;
        text-align: left;
        padding: 0;
        margin: 0;
        color: #242424;
        text-align: center;

        @media (min-width: 768px) {
          text-align: right;
        }
      }
    }
  }
}
button {
  background: #242424;
  color: #fff;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 32px;
  font-family: 'Circe';
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  transition: .3s ease-in-out;

  &:hover {
    background-color: rgb(36, 36, 36, .8);
    border-radius: 6px;
  }
}
</style>
