<template>
  <div class="modal-wrapper" v-if="show">
    <div class="modal-top">
      <h3>1. Выберите документ</h3>
      <input type="text" v-model.trim="search" class="search" placeholder="Быстрый поиск..">

      <div
          class="docs__item"
          v-for="doc in documents"
          :key="doc.id"
      >
        <label>
          <input type="checkbox"/>
          <span>
            <img
              :src="`./images/icons/${doc.icon}.png`"
              alt=""
              class="user-photo"
            >
            {{doc.name}}
            </span>
        </label>
      </div>
      <button class="btn btn__upload">Загрузить</button>
      <p>Размер файла не должен превышать 5 мегабайт</p>
      <span class="block-hide"><hide /></span>
    </div>
    <div class="modal-bottom">
      <h3>2. Добавьте участников</h3>
      <form action="" class="email__invite">
        <input type="email" v-model.trim="email" placeholder="Эл. почта..">
        <button class="btn" id="invite">Пригласить</button>
      </form>
      
      <div class="docs-inner">
        <div
          class="docs__item"
          v-for="(value, index) in participants"
          :key="index"
        >
          <label>
            <input type="checkbox"/>
            <span>
              <img
                :src="`./images/photo${value.userphoto}.png`"
                alt=""
                class="user-photo"
              >
              {{value.email}}
              </span>
          </label>
          <span class="close"><close /></span>
        </div>
      </div>
      <button class="btn btn__send">Отправить на подписание</button>
      <span class="block-hide"><hide /></span>
    </div>
    <button
        class="modal__close"
        @click="close"
      ><close /></button>
  </div>
</template>

<script>
import close from '../icons/close';
import hide from '../icons/hide';

export default {
  name: 'addDocSign',
  components: {
    close, hide
  },
  data() {
    return {
      show: true,
      documents: [ 
        { id: 1, icon: 'doc', name: 'Название документа' },
        { id: 2, icon: 'doc', name: 'Название документа' },
        { id: 3, icon: 'doc', name: 'Название документа' },
        { id: 4, icon: 'doc', name: 'Название документа' }, 
      ],
      search: '',
      participants: [
        { userphoto: '1', pending: false, email: 'debra.holt@example.com' },
        { userphoto: '2', pending: false, email: 'debra.holt@example.com' },
        { userphoto: '3', pending: true, email: 'alma.lawson@example.com' },
        { userphoto: '4', pending: true, email: 'alma.lawson@example.com' }
      ],
      email: '',
    }
  },
  methods: {
    close() {
      this.show = false;
    }
  },
};
</script>

<style lang="scss" scoped>

</style>
