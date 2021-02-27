<template>
  <div class="home__block--demo">
    <h3>Храни все шаблоны и договоры онлайн, безопасно и удобно в личной библиотеке</h3>
    <button class="btn btn__orange">Попробовать</button>
  </div>
</template>

<script>
export default {
  name: 'HomeBlockDemo',
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.home__block { 
  &--demo {
    margin: 0 auto;
    width: 100%;
    max-width: 1088px;
    // height: 399px;
    text-align: center;
    position: relative;
    padding: 20px 30px 10px;
    margin-bottom: 20px;
    z-index: 10;

    @media(min-width: 992px) {
      padding: 213px 112px 80px;
      height: 399px;
      margin-bottom: 160px;
    }

    &:before {
      position: absolute;
      display: block;
      top: 0;
      left: 0;
      content: '';
      width: 100%;
      height: 100%;
      background-color: #616163;
      opacity: 0.12;
      z-index: -1;

    }
    &:after {
      position: absolute;
      display: block;
      // content: '';
      top: 0;
      left: 50%;
      width: 416px;
      height: 273px;
      background-image: url('../../../public/images/b1.svg');
      background-repeat: no-repeat;
      transform: translate(-50%, -45%);

      @media (min-width: 992px) {
        content: '';
      }
    }

    h3 {
      padding: 0;
      margin: 0;
      width: 100%;
      max-width: 824px;
      width: 100%;
      max-width: 864px;
      color: #242424;
      font-family: 'Circe';
      font-size: 24px;
      font-weight: 700;
      font-style: normal;
      letter-spacing: normal;
      line-height: 1.3;
      text-align: center;
      margin-bottom: 60px;

      @media (min-width: 400px) {
        font-size: 34px;
        
        line-height: 1.3;
      }

      @media (min-width: 768px) {
        font-size: 44px;
        height: 106px;
        line-height: 52.8px;
      }
    }
    button {
      color: #ffffff;
      font-family: 'Circe';
      font-size: 18px;
      font-weight: 700;
      font-style: normal;
      letter-spacing: normal;
      line-height: normal;
      height: 60px;
      width: 172px;
      margin: 0;
      margin: 0 auto;
      z-index: 10;
      text-transform: capitalize;
      transition: .3s ease-in-out;

      &:hover {
        // color: #f99042;
        background-color: rgba(249, 144, 66, .8);
      }
    }
  }
}
</style>
