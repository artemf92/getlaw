<template>
    <div class="block signature">
      <div class="block--wrapper">
        <div class="block__header signed">
          <div class="block__header--title">Название</div>
          <div class="block__header--title">Участники</div>
          <div class="block__header--title">Статус</div>
          <div class="block__header--title"></div>
        </div>
        <div class="block__main">
          <div class="block__main--item"
          v-for="s of documents"
          :key="s.id"
          >
            <div class="block__main--desc block__main--desc-docname">
              <img :src="`./images/icons/${s.icon}.png`" alt=""> {{s.name}}</div>
            <div class="block__main--desc block__main--desc-listphotos">
              <div class="block__main--desc-listphotos-inner">
                <div
                  class="listphotos-wrap checked"
                  v-for="(value, index) in s.participants"
                  :key="index"
                >
                  <img
                    :src="`./images/photo${value.userphoto}.png`"
                    alt=""
                    class="user-photo"
                  >
                </div>
              </div>
            </div>
            <div class="block__main--desc block__main--desc-status">{{s.status}}</div>
          </div>  
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Signed',
  props: ['documents'],
};
</script>

<style lang="scss">
</style>
