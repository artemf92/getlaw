<template>
  <div class="sidebar" :class="$store.getters.getSidebar ? 'full': ''">
    <div class="sidebar__head">
      <router-link to="/"><logo v-if="!$store.getters.getSidebar"/><img src="../assets/Logo.jpg" alt="" v-else></router-link>
      <button class="question active" v-show="$store.getters.getSidebar"><question /></button>
    </div>
    <div class="sidebar__main">
      <div class="sidebar__main--title" v-show="$store.getters.getSidebar">Материалы</div>
      <router-link to="/documents" active-class="active">
        <doc />
        <span v-show="$store.getters.getSidebar">Документы</span>
      </router-link>
      <router-link to="/templates" active-class="active"><icon1 /><span v-show="$store.getters.getSidebar">Шаблоны</span></router-link>
      <router-link to="/agreement" active-class="active"><deal /><span v-show="$store.getters.getSidebar">Согласование</span></router-link>
      <router-link to="/signature" active-class="active"><signature /><span v-show="$store.getters.getSidebar">Подписание</span></router-link>
      <div class="sidebar__main--title" v-show="$store.getters.getSidebar">Инфо</div>
      <router-link to="/news" active-class="active" :class="!$store.getters.getSidebar ? 'marg': ''"><news /><span v-show="$store.getters.getSidebar">Новости</span></router-link>
      <router-link to="/lib" active-class="active"><book /><span v-show="$store.getters.getSidebar">База знаний</span></router-link>
      <router-link to="/faq" active-class="active"><question /><span v-show="$store.getters.getSidebar">FAQ</span></router-link>
      <router-link to="/support" active-class="active"><support /><span v-show="$store.getters.getSidebar">Поддержка</span></router-link>
    </div>
    <div class="sidebar__footer">
      <div class="sidebar__profile" :class="!$store.getters.getSidebar ? 'no-pad': ''">
        <div class="sidebar__profile-wrapper">
          <img src="../../public/images/photo1.png" alt="" class="user-photo">
          <div class="user-info" v-show="$store.getters.getSidebar">
            <p>
              <span>Елена Наумова</span>
            </p>
            <p>Elena@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import question from './icons/question';
import doc from './icons/doc';
import icon1 from './icons/icon1';
import deal from './icons/deal';
import signature from './icons/signature';
import news from './icons/news';
import book from './icons/book';
import support from './icons/support';
import logo from './icons/logo';

export default {
  name: 'Sidebar',
  components: {
    question, doc, icon1,
    deal, signature, news, book,
    support, logo
  },
  watch: {

  },
  data() {
    return {
    }
  },
  methods: {
  },
};
</script>

<style lang="scss">
.sidebar {
  width: 80px;
  background-color: #fff;
}
.sidebar.full {
  width: 240px;
}
.sidebar {
  position: absolute;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  top: 0;
  left: 0;
  // width: 240px;
  // margin: 6px 4px;
  padding: 20px;
  height: 100vh;
  box-shadow: 0px 0px 32px rgba(11, 47, 106, 0.08);

  &__head {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
  }
  &__main {
    display: flex;
    flex-direction: column;
    flex: auto;
    &--title {
      padding: 0 12px;
      color: #FB8127;
      font-family: 'Futura PT';
      text-transform: uppercase;
      font-size: 10px;
      font-style: normal;
      line-height: 13px;
      letter-spacing: 2px;
      text-align: left;
      margin-bottom: 12px;
      &:nth-of-type(2) {
        margin-top: 20px;
      }
    }

    & a {
      width: 100%;
      max-width: 200px;
      height: 48px;
      color: #2B2D42;
      // font-family: Circe;
      display: flex;
      align-items: center;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 24px;
      padding: 0 8px;
      letter-spacing: 0em;
      transition: .3s ease-in-out;
      & figure {
        margin-right: 8px;
        vertical-align: middle;
      }

      &.active {
        background: #F7F7F7;
      }
    }
  }
  &__profile {
    width: 100%;
    max-width: 205px;
    padding: 12px 8px;
    border: 1px solid #F7F7F7;
    box-sizing: border-box;
    border-radius: 4px;
    &-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .user-photo {
        margin-right: 12px;
      }
    }
  }
}
.user-info {
  p {
    width: 137px;
    margin: 0;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: 0em;
    & span {
      font-size: 16px;
      font-weight: 700;
      color: #3A3F47;
      line-height: 24px;
    }
  }
}
// .user-photo {
//   width: 40px;
//   height: 40px;
// }
.question {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #EFEFEF;
  box-sizing: border-box;
  border-radius: 4px;
  position: relative;
  &:after {
    position: absolute;
    content: '';
    top: 26px;
    left: 26px;
    display: block;
    background: #FF5A5F;
    width: 6px;
    height: 6px;
    border-radius: 50%;
  }
}
.marg {
  margin-top: 20px;
}
.no-pad {
  padding: 0;
}
</style>
