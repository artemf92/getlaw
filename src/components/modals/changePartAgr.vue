<template>
  <div class="modal-wrapper" v-if="show">
    <h3>Сменить участников</h3>
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
        <img
          :src="`./images/photo${value.userphoto}.png`"
          alt=""
          class="user-photo"
        >
        {{value.email}}
        <span class="close"><close /></span>
      </div>
    </div>
    <span class="block-hide"><hide /></span>
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
  name: 'changePartAgr',
  components: {
    close, hide,
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
h3 {
  margin-bottom: 24px;
}
.user-photo {
  width: 32px;
  height: 32px;
  margin-right: 9px;
}
</style>
