<template>
  <div class="home__subscribe">
    <div class="home__subscribe--wrapper">
      <div class="block__faq">
        <div class="container">
          <h3 class="title">Остались вопросы?</h3>
          <p class="contact_us">Напишите нам: <a href="mailto:bestsaasservice@getlaw.com">bestsaasservice@getlaw.com</a></p>
          <p class="callback">Или мы вам перезвоним:</p>
          <form>
            <input type="text" placeholder="Введите номер вашего телефона..">
            <button type="submit">Перезвонить мне</button>
          </form>
        </div>
      </div>
      <div class="block__subscribe">
        <div class="container">
          <h3 class="title">Подписывайтесь на обновления!</h3>
          <p>Мир не стоит на месте и мы стараемся от него не отставать. Обещаем делиться только самыми важными новостями</p>
          <form>
            <input type="email" name="email" id="email" placeholder="Введите вашу эл. почту">
            <button type="submit">Подписаться</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeSubscribe',
  data() {
    return {

    }
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.home__subscribe {
  &--wrapper {
    display: flex;
    flex-wrap: wrap;
  }
}
.block {
  &__faq {
    display: flex;
    align-items: center;
    height: 679px;

    @media (min-width: 992px) {
      width: 50%;
      padding-left: 10px;
      padding-right: 10px;
    }

    @media (min-width: 1440px) {
      padding-left: 146px;
      padding-right: 95px;
    }

    h3 {
      color: #242424;
      font-family: 'Circe';
      font-size: 60px;
      font-weight: 700;
      font-style: normal;
      letter-spacing: normal;
      line-height: 66px;
      text-align: left;
      margin-bottom: 60px;
    }
    p {
      color: #f99042;
      font-family: 'Circe';
      font-size: 22px;
      font-weight: 300;
      font-style: normal;
      letter-spacing: normal;
      line-height: 36px;
      text-align: left;
      padding: 0;
      margin: 0;
      // margin-bottom: 40px;
      &.contact_us {
        margin-bottom: 40px;
      }
      a {
        display: block;
        color: #242424;
        font-family: 'Circe';
        font-size: 24px;
        font-weight: 700;
        font-style: normal;
        letter-spacing: normal;
        line-height: 30px;
        text-align: left;
        text-decoration: none;
      }
    }
    input {
      width: 100%;
      max-width: 527px;
      padding: 7px 5px!important;
      border: none!important;
      outline: none!important;
      margin-bottom: 60px!important;
      border-bottom: 1px solid #c4c4c4!important;
      &::placeholder {
        color: #818181;
        font-family: 'Circe';
        font-size: 20px;
        font-weight: 300;
        font-style: normal;
        letter-spacing: normal;
        line-height: 30px;
      }
    }
    button {
      width: 205px;
      height: 60px;
      border: 3px solid #f99042;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #242424;
      font-family: 'Circe';
      font-size: 18px;
      font-weight: 700;
      font-style: normal;
      letter-spacing: normal;
      line-height: normal;
      text-align: left;
      padding: 0;
      background-color: inherit;
      transition: .3s ease-in-out;

      &:hover {
        color: #f99042;
        border-color: transparent;
      }
    }
  }
  &__subscribe {
    display: flex;
    align-items: center;
    height: 679px;
    background-color: #f6f6f6;
    position: relative;
    width: 100%;
    z-index: 10;

    @media (min-width: 992px) {
      width: 50%;
      padding-left: 50px;
      padding-right: 10px;
    }

    @media (min-width: 1440px) {
      padding-left: 146px;
      padding-right: 95px;
    }

    &:before {
      position: absolute;
      top: 10px;
      left: 80px;
      display: block;
      content: '';
      width: 132px;
      height: 132px;
      background-image: url('../../../public/images/subscribe.svg');
      z-index: -1;

      @media (min-width: 992px) {
        top: 100px;
        
        left: 5px;
      }
      @media (min-width: 1200px) {
        top: 120px;
        left: 35px;
      }
      @media (min-width: 1400px) {
        left: 80px;
      }
    }

    .container {
      max-width: 366px;
    }

    h3 {
      color: #242424;
      font-family: 'Circe';
      font-size: 24px;
      font-weight: 700;
      font-style: normal;
      letter-spacing: normal;
      line-height: 1.3;
      text-align: left;
      margin-bottom: 22px;
      @media (min-width: 992px) {
        font-size: 44px;
        line-height: 52.8px;
      }
    }
    p {
      padding: 0;
      margin: 0;
      color: #242424;
      font-family: 'Circe';
      font-size: 20px;
      font-weight: 300;
      font-style: normal;
      letter-spacing: normal;
      line-height: 30px;
      text-align: left;
      margin-bottom: 40px;
    }
    input {
      width: 100%!important;
      padding: 7px 5px!important;
      background: inherit;
      border: none!important;
      outline: none!important;
      border-bottom: 1px solid #c4c4c4!important;
      margin-bottom: 40px!important;
      &::placeholder {
        color: #818181;
        font-family: 'Circe';
        font-size: 20px;
        font-weight: 300;
        font-style: normal;
        letter-spacing: normal;
        line-height: 30px;
      }
    }
    button {
      width: 169px;
      height: 60px;
      background-color: #f99042;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0;

      color: #ffffff;
      font-family: 'Circe';
      font-size: 18px;
      font-weight: 700;
      font-style: normal;
      letter-spacing: normal;
      line-height: normal;
      text-align: left;
      transition: .3s ease-in-out;
      &:hover {
        background-color: transparent;
        color: #f99042;
      }
    }
  }
}
</style>
