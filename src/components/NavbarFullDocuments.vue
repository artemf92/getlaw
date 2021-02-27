<template>
  <header class="app-header" :class="!$store.getters.getSidebar ? 'full': ''">
    <div class="app-header-wrapper">
      <div class="left-block">
        <div class="page-title"><span>{{breadcrumb}}</span> / {{ current }}</div>
        <div class="header-tab" :class="tab === 1 ? 'active' : ''" @click="setTab(1)">Заполнение</div>
        <div class="header-tab" :class="tab === 2 ? 'active' : ''" @click="setTab(2)">Превью</div>
        <div class="header-tab" :class="tab === 3 ? 'active' : ''" @click="setTab(3)">Настройки</div>
      </div>
      <div class="right-block">
        <button class="btn__send btn__yellow">Сохранить</button>
      </div>
    </div>
  </header>
</template>

<script>
import M from 'materialize-css';
import stages from '../lib/stages';

export default {
  name: 'NavbarFullDocuments',
  components: {
  },
  data() {
    return {
      currentRoute: null,
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
      tab: '',
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
      return 'Название документа';
    },
    stages() {
      return stages;
    },
  },
  watch: {
    current() {
      let path = this.$route.path;
      return this.title[path];
    },
  },
  methods: {
    setTab(num) {
      this.tab = num;
      this.$store.commit('SET_TAB', num);
    }
  },
  mounted() {
    this.select = M.FormSelect.init(this.$refs.select);
    this.tab = this.$store.getters.getTab;
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
.header-tab {
  margin-right: 24px;
}
.app-header-wrapper {
  padding: 14.5px 0 14.5px 20px;
}
.page-title {
  font-size: 18px;
  color: #29303A;
  margin-right: 24px;
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
