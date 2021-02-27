<template>
  <footer class="home__footer">
    <div class="container">
      <div class="home__footer--wrapper">
        <div class="home__footer--contact">
          <a href="mailto:bestsaasservice@getlaw.com" class="email">bestsaasservice@getlaw.com</a>
          <a href="tel:+79164706241" class="phone">+7-916-470-62-41</a>
        </div>
        <div class="home__footer--copyright">
          <p>Условия использования</p>
          <p>© Getlaw {{ new Date().getFullYear()}}</p>
        </div>
        <div class="home__footer--social">
          <a href="#"><facebook /></a>
          <a href="#"><inst /></a>
          <a href="#"><gplus /></a>
          <a href="#"><twitter /></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import facebook from '../icons/facebook';
import inst from '../icons/inst';
import gplus from '../icons/gplus';
import twitter from '../icons/twitter';

export default {
  name: 'HomeFooter',
  components: {
    facebook,
    inst,
    gplus,
    twitter,
  },
};
</script>

<style lang="scss" scoped>
.home__footer {
  height: 230px;
  padding: 15px 0;
  background-color: #242424;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    padding: 0;
    height: 148px;
  }

  &--wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    row-gap: 20px;

    @media (min-width: 768px) {
      justify-content: space-between;
    }

    a {
      text-decoration: none;
    }
  }
  &--contact {
    .email {
      color: #e3e3e3!important;
      font-family: 'Circe';
      font-size: 20px;
      font-weight: 300;
      font-style: normal;
      letter-spacing: normal;
      line-height: 30px;
      margin-bottom: 7px;
    }
    .phone {
      display: block;
      color: #ffffff!important;
      font-family: 'Circe';
      font-size: 32px;
      font-weight: 700;
      font-style: normal;
      letter-spacing: normal;
      line-height: 30px;
      text-align: center;
    }
  }
  &--copyright {
    p {
      color: #818181!important;
      font-family: 'Circe';
      font-size: 17px;
      font-weight: 400;
      font-style: normal;
      letter-spacing: normal;
      line-height: normal;
      text-align: center;
      margin: 0;
      padding: 0;
    }
  }
  &--social {
    width: 208px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    figure {
      transition: .3s ease-in-out;
      &:hover {
        opacity: 0.7;
      }
    }
  }
}
</style>
