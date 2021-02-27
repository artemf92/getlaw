<template>
  <div id="buttons__wrapper">
    <div class="buttons__item">
      <button class="template__btn btn__addCondition"><condition />Добавить условие</button>
      <div class="items items__condition">
        <button v-for="v in conditions" :key="v">{{v}}<edit/></button>
      </div>
    </div>
    <div class="buttons__item">
      <button class="template__btn btn__addVar"><variable />Добавить переменную</button>
      <div class="items items__var">
        <button v-for="v in variables" :key="v">{{v}}<edit/></button>
      </div>
    </div>
    <div class="buttons__item">
      <button class="template__btn btn__addBlock"><addBlock />Добавить блоки</button>
      <div class="items items__addBlocks">
        <button v-for="v in addBlocks" :key="v">{{v}}<edit/></button>
      </div>
    </div>
  </div>
</template>

<script>
import condition from '../icons/editor/condition'
import variable from '../icons/editor/variable'
import addBlock from '../icons/editor/addBlock'
import edit from '../icons/edit2'

export default {
  name: 'TplButtons',
  components: {
    addBlock, variable, condition, edit
  },
  data() {
    return {
      conditions: ['УСЛОВИЕ: выбор (А или Б)'],
      variables: ['указать дату', 'указать номер', 'указать кол-во условий', 'указать № пункта'],
      addBlocks: ['Вариант А', 'Вариант Б'],
    }
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
#buttons__wrapper {
  margin-top: 32px;
  margin-left: 32px;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 24px;
  width: 340px;
}
.template__btn {
  padding: 18px;
  border-radius: 4px;
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;

  figure {
    margin-right: 12px;
  }
}
.btn__addCondition {
  background: #42CAB1;
}
.btn__addVar {
  background-color: #EA5C97;
}
.btn__addBlock {
  background-color: #857BF9;
}
.items {
  margin-top: 8px;
   button {
     height: 32px;
     padding: 0 8px;
     border-radius: 4px;
     margin-right: 4px;
     margin-bottom: 4px;
     transition: .3s ease-in-out;
     figure {
      display: none;
      width: 24px;
      height: 24px;
      margin-left: 4px;
      box-sizing: border-box;
      border-radius: 2px;
     }
     &:hover figure {
         display: inline-block;
       }
   }
  &__condition button {
    background: rgba(66, 202, 177, 0.16);
    color: #42CAB1;

    &:hover {
      border: 1px solid #42CAB1;
      figure {
        border: 1px solid rgba(66, 202, 177, 0.16);
      }
    }
  }
  &__var button {
    background: rgba(234, 92, 151, 0.16);
    color: #EA5C97;
    &:hover {
      border: 1px solid #EA5C97;
      figure {
        border: 1px solid rgba(234, 92, 151, 0.16);
      }
    }
  }
  &__addBlocks button {
    background: rgba(133, 123, 249, 0.16);
    color: #857BF9;
    &:hover {
      border: 1px solid #857BF9;
      transition: .3s ease-in-out;
      figure {
        border: 1px solid rgba(133, 123, 249, 0.16);;
        }
    }
  }
}
</style>
