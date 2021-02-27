<template>
  <div class="home">
    <header>
      <nav role="navigation" class="mobile__menu">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <a
            href=""
            @click.prevent="openProducts = !openProducts"
            :class="{ active: openProducts}"
          >
              <li>Продукты<arrowDown /></li>
            </a>
            <ul class="submenu" :class="{ active: openProducts }">
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
            </ul>
          <a href="#"><li>Тарифы</li></a>
          <a href="#"><li>Для бизнеса</li></a>
          <a href="#"><li>Контакты</li></a>
          <div class="menu__button--wrap">
            <button class="btn__orange">Попробовать бесплатно</button>
            <button class="btn__login">Войти</button>
          </div>
          </ul>
        </div>
      </nav>
      <div class="left-wrapper">
        <div class="home__logo">
          <logo />
        </div>
        <div class="home__logo--mobile">
          <logoMobile />
        </div>
        <nav>
          <a
            href=""
            @click.prevent="openProducts = !openProducts"
            :class="{ active: openProducts}"
          >Продукты
            <arrowDown />
          </a>
          <ul class="submenu" :class="{ active: openProducts }">
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
            </ul>
          <a href="#">Тарифы</a>
          <a href="#">Для бизнеса</a>
          <a href="#">Контакты</a>
        </nav>
      </div>
      
      <div class="home__auth">
        <button class="btn__orange">Попробовать бесплатно</button>
        <button class="btn__login">Войти</button>
      </div>
    </header>
    <HomeMain />
    <HomeBanner />
    <div class="home__description">
      <h3>Все это возможно <span>с помощью Getlaw</span></h3>
      <p>Больше никакого геморроя с заполнением, согласованием и пописанноем документов!</p>
    </div>
    <HomeBlock />
    <HomeBlockDemo />
    <HomeTarifs />
    <HomeSubscribe />
    <HomeFooter />
    <div class="text-center center-align footer__bottom">
      <img src="../../public/images/cards.png" alt="">
    </div>
  </div>
</template>

<script>
import logo from '../components/icons/logoBlack';
import logoMobile from '../components/icons/logo';
import arrowDown from '../components/icons/arrowDown';
import HomeMain from '../components/home/HomeMain';
import HomeBanner from '../components/home/HomeBanner';
import HomeBlock from '../components/home/HomeBlock';
import HomeTarifs from '../components/home/HomeTarifs';
import HomeFooter from '../components/home/HomeFooter';
import HomeSubscribe from '../components/home/HomeSubscribe';
import HomeBlockDemo from '../components/home/HomeBlockDemo';

export default {
  name: 'Home',
  components: {
    logo,
    logoMobile,
    HomeMain,
    HomeBanner,
    HomeBlock,
    HomeTarifs,
    HomeBlockDemo,
    HomeSubscribe,
    HomeFooter,
    arrowDown
  },
  data() {
    return {
      openProducts: false,
    }
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.mobile__menu {
  display: block;
  z-index: 100;
  @media(min-width: 992px) {
    display: none;
  }
}
.menu__button--wrap {
  margin: 30px 0 20px;

  button {
    margin-bottom: 10px;
  }
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 24px;
}
.left-wrapper {
  display: flex;
  width: auto;

  @media(min-width: 992px) {
    width: 100%;
  }
}
nav {
  width: 100%;
  max-width: 433px;
  background: none;
  border: none;
  outline: none;
  box-shadow: none;

  display: none;
  justify-content: space-around;
  align-items: center;

  position: relative;
  ul li {
    float: none;
  }
  
  @media(min-width: 992px) {
    display: flex;
  }

  a { 
      position: relative;
      color: #000000;
      font-family: 'Circe';
      font-size: 16px;
      font-weight: 700;
      font-style: normal;
      letter-spacing: normal;
      line-height: normal;
      text-align: left;
      text-decoration: none;
      transition: .3s ease-in-out;
      &.active figure {
          transform: translateX(100%) rotate(180deg);
        }

      figure {
        position: absolute;
        top: 0;
        right: 0;
        transform: translateX(100%);
        transition: .4s ease-in-out;
        
      }
      &:hover {
        opacity: 0.5;
      }
    }
}
.home {
  background-color: #fff;
  // height: 100vh;
  color: #242424;
  &__logo {
    margin-right: 60px;
    display: none;
    @media (min-width: 992px) {
      display: block;
    }
    &--mobile {
      figure svg path {
        stroke: #000;
      }
    }
  }
  &__auth {
    display: none;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 331px;
    @media(min-width: 992px) {
      display: flex;
    }
  }
  &__description {
    background-color: #fff;
    text-align: center;
    padding: 120px 0;
    h3 {
        width: 100%;
        max-width: 520px;
        margin: 0 auto 20px;
        font-family: 'Circe';
        font-size: 60px;
        font-style: normal;
        font-weight: 300;
        line-height: 72px;
        letter-spacing: 0em;
        text-align: center;
        word-wrap: break-word;
      span {
        font-family: 'Circe';
        font-size: 60px;
        font-style: normal;
        font-weight: 700;
        line-height: 66px;
        letter-spacing: 0em;
        text-align: center;
      }
    }
    p {
      width: 100%;
      max-width: 520px;
      margin: 0 auto;
      font-family: 'Circe';
      font-size: 20px;
      font-style: normal;
      font-weight: 350;
      line-height: 30px;
      letter-spacing: 0em;
      text-align: center;
      color: #242424;
    }
  }
}
button {
  height: 40px;
  padding: 16px 20px;
  color: #fff;
  margin: 0;
  // display: flex;
  width: auto;
  border-radius: 0;
}
.btn__orange {
  width: 222px;
  height: 52px;
  padding: 0;
  color: #ffffff;
  font-family: 'Circe';
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  letter-spacing: normal;
  line-height: normal;
  transition: .3s ease-in-out;

  &:hover {
    color: #f99042;
    background-color: transparent;
  }
}
.btn__login {
  background-color: #616163;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 93px;
  height: 52px;
  background-color: #616163;
  transition: .3s ease-in-out;

  &:hover {
    color: #616163;
    background-color: transparent;
  }

  color: #ffffff;
  font-family: Circe;
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  letter-spacing: normal;
  line-height: normal;
  text-align: left;
}

.footer__bottom {
  padding: 16px 0;
  display: none;
  @media(min-width: 992px) {
    display: block;
  }
}
ul.submenu {
  animation: hideSubmenu .5s ease-in-out forwards;
  display: flex;
  flex-direction: column;
  padding-left: 20px!important;
  margin-top: 8px;
  li {
    height: 25px;
  }


  @media(min-width: 992px) {
    position: absolute;
    top: 30px;
    left: 0;
    padding: 0 10px;
  }
}
.submenu.active {
  animation: showSubmenu .5s ease-in-out forwards;
}
@keyframes hideSubmenu {
  0% {
    opacity: 1;
    height: 75px;
    z-index: 1;
  }
  70% {
    opacity: 0;
    z-index: -1;
    height: 75px;
  }
  100% {
    height: 1px;
    opacity: 0;
    z-index: -1;
  }
}
@keyframes showSubmenu {
  0% {
    opacity: 0;
    height: 1px;
    z-index: -1;
  }
  70% {
    height: 75px;
    z-index: 1;
    opacity: 0;
  }
  100% {
    height: 75px;
    opacity: 1;
    height: auto;
  }

}

[type="checkbox"]+span:not(.lever) {
  padding-left: inherit;
}
[type="checkbox"]+span:not(.lever):before, [type="checkbox"]:not(.filled-in)+span:not(.lever):after {
  content: none;
}
[type="checkbox"]:not(:checked), [type="checkbox"]:checked {
  pointer-events: auto;
}
</style>
