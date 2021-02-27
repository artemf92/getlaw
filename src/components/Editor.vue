<template>
  <div class="editor">
    <div class="editor__head">
      <div class="left-block"><h-1Edit/><h-2Edit/><h-3Edit/><boldEdit/><italicEdit/><ulEdit/><olEdit/><imageEdit/><linkEdit/></div>
      <div class="right-block">
        <figure v-for="n in pages"
        :key="n"
        :data-page="n"
        :class=" currentPage === n ? 'current' : ''"
        @click="current(n)"
        >
          <svg width="22" height="31" viewBox="0 0 22 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 30.5H2C1.17157 30.5 0.5 29.8284 0.5 29V2C0.5 1.17157 1.17157 0.5 2 0.5H11.8536C12.256 0.5 12.6415 0.661665 12.9235 0.948673L13.2781 0.600236L12.9235 0.948673L21.0699 9.23908C21.3456 9.51959 21.5 9.89713 21.5 10.2904V29C21.5 29.8284 20.8284 30.5 20 30.5Z" fill="white" stroke="#BEBEBE"/>
            <path d="M12 10H22L12 0V10Z" fill="#BEBEBE"/>
          </svg>
          <span>{{n}}</span>
        </figure>
      </div>
    </div>
    <div class="editor__body">
      <p class="editor-h1">1Тестовый договор № <span class="highlight h-red">от указать дату</span></p>
      <ol>
        <li>Это тестовый договор (далее – Договор). Он создан для проверки работоспособности и тестирования удобства пользования сервисом Getlaw.</li>
        <li>Договором предусмотрен выбор указать кол-во условий условия, указанного в п. указать <span class="highlight h-orange">№ пункта Договора.</span></li>
        <li>Условие, указанное в настоящем пункте, основывается на текстовом блоке А.</li>
        <li>Условие, указанное в настоящем пункте, основывается на текстовом блоке Б и действует до <span class="highlight h-green">указать дату.</span></li>
        <li>Настоящий договор состоит из 4 пунктов.</li>
      </ol>
    </div>
  </div>
</template>

<script>
import h1Edit from '../components/icons/editor/h1';
import h2Edit from '../components/icons/editor/h2';
import h3Edit from '../components/icons/editor/h3';
import boldEdit from '../components/icons/editor/bold';
import italicEdit from '../components/icons/editor/italic';
import linkEdit from '../components/icons/editor/link';
import olEdit from '../components/icons/editor/ol';
import ulEdit from '../components/icons/editor/ul';
import imageEdit from '../components/icons/editor/image';

export default {
  name: 'Editor',
  components: {
    h1Edit, h2Edit, h3Edit, boldEdit, 
    italicEdit, imageEdit, linkEdit, 
    olEdit, ulEdit
  },
  data() {
    return {
      pages: 2,
      currentPage: 1,
    }
  },
  methods: {
    current(num) {
      return this.currentPage = num;
    },
  },
};
</script>

<style lang="scss" scoped>
figure[data-page] {
  position: relative;
  span {
    position: absolute;
    top: 25%;
    left: 30%;
  }
}
figure[data-page].current {
  svg path:first-of-type {
    stroke: #FB8127;
  }
  svg path:last-of-type {
    fill: #FB8127;
  }
}
.highlight {
  border-radius: 2px;
}
span.h-green {
  background-color: rgba(74, 193, 32, .1);
  color: rgba(74, 193, 32, 1);
}

span.h-red {
  background-color: rgba(252, 116, 118, .1);
  color: rgba(252, 116, 118, 1);
  text-decoration: line-through;
}
span.h-orange {
  background-color: rgba(255, 146, 46, .1);;
  color: rgba(255, 146, 46, 1);
}
</style>
