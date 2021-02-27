<template>
  <div class="document__form">
    <form>
      <div class="document__form--header">
        <div class="document__form--title">Поля для заполнения</div>
        <div class="progress--wrapper">
          <div class="progress">
            <div class="determinate" style="width: 21%"></div>
          </div>
          <p>Завершено: <span class="progress--green">21%</span></p>
        </div>
      </div>
      <div class="input-field col s12">
        <select ref="orgType" v-model="orgType">
          <option value="ip">ИП</option>
          <option value="ooo">ООО</option>
        </select>
        <label
          ><required-icon class="reqIcon" />Форма организации стороны</label
        >
      </div>
      <div class="spoiler" id="spoiler1" v-show="spoilerShow1">
        <div class="row">
          <div class="input-field col s12">
            <input
              placeholder="Листровой"
              id="org_name"
              type="text"
              class="validate"
              required
            />
            <label for="org_name"
              ><required-icon class="reqIcon" />Название организации</label
            >
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input
              placeholder=""
              id="org_address"
              type="text"
              class="validate"
              required
            />
            <label for="org_address"
              ><required-icon class="reqIcon" />Адрес организации</label
            >
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input placeholder="" id="org__contacts" type="text" />
            <label for="org__contacts">Контакты организации</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <select ref="orgOwner" v-model="orgOwner" required>
              <option value="true">да</option>
              <option value="" selected>нет</option>
            </select>
            <label><required-icon class="reqIcon" />Вы владелец?</label>
          </div>
        </div>
      </div>
      <div class="spoiler" id="spoiler2" v-show="spoilerShow2">
        <div class="row">
          <div class="input-field col s12">
            <input placeholder="" id="name" type="text" class="validate" />
            <label for="name">Имя</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input placeholder="" id="last_name" type="text" class="validate" />
            <label for="last_name">Фамилия</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input placeholder="" id="last_name2" type="text" />
            <label for="last_name2">Отчество</label>
          </div>
        </div>
      </div>
      <div class="input-field col s12">
        <select ref="orgContacts">
          <option value="ip1">ИП</option>
          <option value="ooo1">ООО</option>
        </select>
        <label>Контакты для связи</label>
      </div>
    </form>
  </div>
</template>

<script>
import M from "../../node_modules/materialize-css";
import requiredIcon from "../components/icons/required.vue";

export default {
  name: "DocumentsForm",
  components: {
    requiredIcon,
  },
  data() {
    return {
      flag: false,
      inputs: null,
      select1: null,
      select2: null,
      select3: null,
      orgType: "",
      orgOwner: null,
      spoilerShow1: false,
      spoilerShow2: false,
    };
  },
  watch: {
    orgType() {
      return (this.spoilerShow1 =
        this.orgType === "ip" || this.orgType === "ooo");
    },
    orgOwner() {
      return (this.spoilerShow2 = this.orgOwner);
    },
  },
  methods: {},
  mounted() {
    this.inputs = M.updateTextFields();
    this.select1 = M.FormSelect.init(this.$refs.orgType);
    this.select2 = M.FormSelect.init(this.$refs.orgOwner);
    this.select3 = M.FormSelect.init(this.$refs.orgContacts);
  },
};
</script>

<style lang="scss" scoped>
.document {
  &__form {
    background-color: #fff;
    width: 100%;
    max-width: 488px;
    padding: 20px 20px 45px;
    &--header {
      margin-bottom: 36px;
      display: flex;
      justify-content: space-between;
      .progress {
        width: 120px;
      }
    }
    &--title {
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: 30px;
      letter-spacing: 0em;
      color: #2b2d42;
      margin-bottom: 18px;
    }
  }
}
.progress {
  &--wrapper {
    align-self: flex-start;
    p {
      margin: -10px 0 0;
      padding: 0;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 18px;
      letter-spacing: 0em;
      text-align: right;

      span {
        color: #27ae60;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: 25px;
        letter-spacing: 0em;
        text-align: right;
      }
    }
  }
}
.select-wrapper + label {
  top: -32px;
}
.input-field > label:not(.label-icon).active {
  transform: translateY(-20px) scale(0.8);
  transform-origin: 0 0;
}
label {
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 15px;
  letter-spacing: 0em;
  color: #2b2d42;
}
#spoiler1 {
  padding-left: 24px;
}
#spoiler2 {
  padding-left: 48px;
}
.reqIcon {
  position: absolute;
  top: -4px;
  left: -8px;
}
</style>
