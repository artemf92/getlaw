<template>
  <header class="app-header" :class="!$store.getters.getSidebar ? 'full': ''">
    <div class="app-header-wrapper">
      <div class="left-block">
        <div class="page-title"><span>{{breadcrumb}}</span> / {{ current }}</div>
        <select class="version" v-model="version" ref="select">
          <option value="1" selected>Версия 1</option>
        </select>
      </div>
      <div class="right-block">
        <button class="btn__green" disabled v-="!documentIsSigned"><checked />Согласовать</button>
        <div class="listphotos">
          <img :src="`/images/photo${p.userphoto}.png`" class="user-photo" alt="" v-for="p in participants" :key="p.id">
        </div>
        <button class="btn__send btn__yellow" v-if="stage === 0"><header-add/></button>
        <button class="btn__send btn__yellow" v-if="stage === 1"><enter />Сохранить и выйти</button>
        <button class="btn__send btn__yellow" v-else-if="stage === 2"><enter />Отправить на согласование</button>
        <button class="btn__send btn__yellow" v-else-if="stage === 3"><enter />Отправить контрагенту</button>
        <button class="btn__send btn__yellow" v-else-if="stage === 4">Сохранить</button>
      </div>
    </div>
  </header>
</template>

<script>
import headerAdd from './icons/header-add.vue';
import enter from './icons/enter';
import checked from './icons/checked';
import M from 'materialize-css';
import stages from '../lib/stages';

export default {
  name: 'NavbarFull',
  components: {
    headerAdd, enter, checked
  },
  data() {
    return {
      currentRoute: null,
      search: '',
      version: 1,
      title: {
        'signature' : 'Подписание',
        'agreement' : 'Согласование',
        'templates' : 'Шаблоны',
        'documents' : 'Документы',
        'news' : 'Новости',
        'lib' : 'База знаний',
        'faq' : 'FAQ',
        'support' : 'Поддержка',
      },
      select: null,
      participants: [
        { userphoto: null, pending: false, email: 'debra.holt@example.com' },
        { userphoto: '1', pending: false, email: 'debra.holt@example.com' },
        { userphoto: '2', pending: false, email: 'debra.holt@example.com' },
        { userphoto: '3', pending: true, email: 'alma.lawson@example.com' },
        { userphoto: '4', pending: true, email: 'alma.lawson@example.com' }
      ],
      documentIsSigned: true,
      stage: 4,
    }
  },
  computed: {
    breadcrumb() {
      let path = this.$route.path;
      let arPath = path.split('/');
      return this.title[arPath[1]];
    },
    current() {
      // let path = this.$route.path;
      // let arPath = path.split('/');
      // return this.title[arPath[1]] // 'Номер согласования';
      return 'Номер согласования';
    },
    tab() {
      return this.$store.getters.getTab;
    },
    stages() {
      return stages;
    }
  },
  watch: {
    current() {
      let path = this.$route.path;
      return this.title[path];
    },
  },
  methods: {
    setTab() {
      this.$store.commit('SET_TAB');
    }
  },
  mounted() {
    this.select = M.FormSelect.init(this.$refs.select);
  },
  destroyed() {
    if(this.select && this.select.destroy()) {
      this.select.destroy();
    }
  }
};
</script>

<style lang="scss" scoped>
.left-block {
  width: auto;
  align-items: center;
}
.app-header-wrapper {
  padding: 14.5px 0 14.5px 20px;
}
.page-title {
  font-size: 18px;
  color: #29303A;
  span {
    font-size: 16px;
    font-weight: normal;
  }
}
.btn__send {
  padding: 18px;
  margin: 0;
  width: 100%;
  height: 60px;
  border-radius: 0px 4px 4px 0px;
}
.listphotos {
  display: flex;
  align-items: center;
  height: 36px;
  img {
    height: 36px;
    margin-right: 12px;
  }
}
.btn__green {
  margin-right: 16px;
  &:disabled {
    opacity: 0.2;
  }
}
</style>
