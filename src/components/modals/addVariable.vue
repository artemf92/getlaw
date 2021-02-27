<template>
  <div class="modal-wrapper modal__condition">
    <div class="modal-top">
      <h3>Переменная</h3>
      <div class="tabs-in">
        <div class="tab active">Создать</div>
        <div class="tab">Выбрать</div>
      </div>
    </div>
    <div class="modal-body">
      <form>
        <label for="vType">Тип переменной</label>
        <div class="input-field col s12">
          <select id="vType" ref="select">
            <option value="1">Текст</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
        </div>
        <label for="vName">Название</label>
        <div class="input-field col s12">
          <input id="vName" type="text" class="validate" placeholder="" />
        </div>
        <label for="vDesc">Краткое описаие</label>
        <div class="input-field col s12">
          <input id="vDesc" type="text" class="validate" placeholder="" />
        </div>
        <label>
          <input type="checkbox" class="filled-in" checked="checked" />
          <span class="checkbox-label">Это поле обязательное</span>
        </label>
        <div class="modal-bottom">
          <button type="submit" class="btn btn__addVariable">
            Добавить переменную
          </button>
          <a href="" class="cancel">Отменить</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import M from "../../../node_modules/materialize-css";

export default {
  name: "addVariable",
  components: {},
  data() {
    return {
      flag: false,
      tab: "",
      inputs: null,
      condVar: "",
      select: null,
    };
  },
  methods: {},
  mounted() {
    this.tab = this.$store.getters.getTab;
    this.inputs = M.updateTextFields();
    this.select = M.FormSelect.init(this.$refs.select);
  },
};
</script>

<style lang="scss" scoped>
.modal {
  &-wrapper {
    z-index: 9999;
  }
  &-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .tabs-in {
      display: flex;
      justify-content: space-between;
      .tab {
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: 0em;
        padding-bottom: 12px;
        border-bottom: 2px solid #f7f7f7;
        color: #808080;
        &.active {
          color: #29303a;
          border-bottom: 2px solid #EA5C97;
        }
      }
      .tab:first-child {
        margin-right: 12px;
      }
    }
  }
  &-bottom {
    display: flex;
    a {
      margin-left: 12px;
      width: 93px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #808080;
    }
  }
  &-body {
    .input-field {
      margin-bottom: 40px;
    }
    label {
      font-size: 14px !important;
      font-style: normal;
      font-weight: 600;
      line-height: 15px;
      letter-spacing: 0em;
      color: #2b2d42;
    }
  }
}
.no-padding {
  .input-field {
    padding: 0;
  }
}
.condVar {
  position: relative;
  ul {
    margin: 0;
    padding: 8px 10px 8px 8px;
    background: #ffffff;
    box-shadow: 0px 0px 32px rgba(41, 48, 58, 0.16);
    border-radius: 4px;
    li:last-child {
      background: rgba(133, 123, 249, 0.16);
      border-radius: 4px;
      .cpt {
        margin-right: 5px;
        svg path {
          stroke: #857bf9;
        }
      }
    }
  }
  & > figure {
    position: absolute;
    top: 10px;
    right: 10px;
  }
}
.variants-in {
  margin-top: 16px;
  margin-right: 4px;
  span.variant {
    display: inline-block;
    padding: 8.5px 8px;
    background: #efefef;
    border-radius: 4px;
  }
}
.checkbox-label {
  height: 22px!important;
    margin: 15px 0;
    &:after {
      background-color: #EA5C97!important;
      border-color: #EA5C97!important;
    }
}
.btn__addVariable {
  text-transform: none;
  background: #EA5C97!important;
  border-radius: 4px;
}
</style>
