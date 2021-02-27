<template>
  <div class="block agreement">
    <div class="block--wrapper">
      <div class="block__header">
        <div class="block__header--title agreement__header--title-name">Название</div>
        <div class="block__header--title agreement__header--title-part">Участники</div>
        <div class="block__header--title agreement__header--title-status">Статус</div>
        <div class="block__header--title agreement__header--title-button"></div>
        <div class="block__header--title agreement__header--title-edit"></div>
      </div>
      <div class="block__main">
        <div class="block__main--item"
        v-for="s of documents"
        :key="s.id"
        >
          <div class="block__main--desc block__main--desc-docname agreement__main--desc-docname">
            <img
              :src="`./images/icons/${s.icon}.png`"
              alt=""
            > {{s.name}}</div>
          <div class="block__main--desc block__main--desc-listphotos agreement__main--desc-listphotos">
            <div class="block__main--desc-listphotos-inner">
              <div
                class="listphotos-wrap"
                :class="[ value.pending ? '' : 'checked']"
                v-for="(value, index) in s.participants"
                :key="index"
              >
                <img
                  :src="`./images/photo${value.userphoto}.png`"
                  alt=""
                  class="user-photo"
                  :class=" value.flag ? 'circle': ''"
                >
              </div>
            </div>
          </div>
          <div class="block__main--desc block__main--desc-status agreement__main--desc-status">
            {{s.status}}
            <button
              class="btn__send"
              v-if="s.status == 'Ожидает отправки контрагенту'"
            ><icon-send />Отправить</button>  
          </div>
          <button
            class="status__cancel--button agreement__main--desc-button"
            :class="{ sign_start: s.pending }"
          >{{s.pending ? 'Отменить подписание' : 'Перейти к подписанию'}}</button>
          <div class="agreement__main--desc-edit">
            <button class="block__main--desc-edit-btn agreement__main--desc-edit-btn"><edit /></button>
          </div>
        </div>  
      </div>
    </div>
  </div>
</template>

<script>
import iconSend from './icons/send.vue';
import edit from '../components/icons/edit';

export default {
  name: 'AgrInProgress',
  props: ['documents'],
  components: {
    iconSend, edit
  }
};
</script>

<style lang="scss">
.agreement {
  &__header {
    &--title {
      &-name {
        width: 24%;
      }
      &-part {
        width: 21%;
      }
      &-status {
        width: 34%;
      }
      &-button {
        width: 13%;
      }
      &-edit {
        width: 8%;
      }
    }
  }
  &__main {
    &--desc {
      &-docname {
        width: 24%;
      }
      &-listphotos {
        width: 21%;
      }
      &-status {
        width: 34%;
      }
      &-button {
        width: 13%;
      }
      &-edit {
        width: 8%;
      }
    }
  }
}
.btn__send {
  width: 135px;
  height: 40px;
  background: #FB8127;
  margin: 0 12px;
  color: #fff;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
