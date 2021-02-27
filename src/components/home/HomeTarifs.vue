<template>
  <div class="home__tarifs">
    <div class="container">
      <h3 class="title">Выберите подходящий для вас тарифный план</h3>
      <p>Все шаблоны и договоры онлайн, безопасно и удобно в одном месте</p>
      <div class="home__tarifs--overlay">
        <div class="home__tarifs--wrapper" :style="slide">
          <div
            class=""
            v-for="t in tarifs"
            :key="t.title"
          >
            <div class="home__tarifs--item">
              <h4
                class="home__tarifs--item-title"
                :class="t.class"
              >{{ t.title }}</h4>
              <p class="home__tarifs--item-desc">{{ t.desc }}</p>
              <div class="home__tarifs--item-option-in">
                <div
                  class="home__tarifs--item-option"
                  :class="t.class"
                  v-for="(value, index) in t.options"
                  :key="index"
                >
                  <span class="count" v-if="value.count > 0">{{ value.count }}</span>
                  <span class="count" v-else-if="!value.count"><endless/></span>
                  <span class="count" v-else-if="value.count === 'none'"><iconX/></span>
                  <span
                    class="count" 
                    v-else
                  ><optChecked/></span>

                  <span class="opt-title">{{ value.title }}</span>
                </div>
              </div>
              <div class="home__tarifs--item-price" v-if="t.price">{{ Math.floor(t.price) }} ₽</div>
              <div class="home__tarifs--item-price" v-else>По запросу</div>
              <button class="home__tarifs--item-btn" :class="'btn__' + t.class">Зарегистрироваться</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="prev" @click="prevSlide">
      <arrow class="left"/>
    </div>
    <div class="next" @click="nextSlide">
      <arrow class="right"/>
    </div>
  </div>
</template>

<script>
import iconX from '../icons/icon-x';
import endless from '../icons/endless';
import arrow from '../icons/arrow';
import optChecked from '../icons/optChecked';

export default {
  name: 'HomeTarifs',
  components: {
    iconX,
    endless,
    optChecked,
    arrow,
  },
  data() {
    return {
      tarifs: [
        {
          title: 'Базовый',
          class: 'basic',
          desc: 'Для личных нужд',
          options: [
            {
              count: 3,
              title: 'Активный шаблона одновременно',
            },
            {
              count: 3,
              title: 'Заполненных документа одновременно',
            },
            {
              count: 3,
              title: 'Согласования',
            },
            {
              count: 3,
              title: 'Подписания',
            },
            {
              count: 'none',
              title: 'Командная работа',
            },
          ],
          price: 0.1,
        },
        {
          title: 'Индивидуальный',
          class: 'indiv',
          desc: 'Для работы без ограничений',
          options: [
            {
              count: 0,
              title: 'Активный шаблона одновременно',
            },
            {
              count: 0,
              title: 'Заполненных документа одновременно',
            },
            {
              count: 0,
              title: 'Согласования',
            },
            {
              count: 0,
              title: 'Подписания',
            },
            {
              count: 'checked',
              title: 'Командная работа',
            },
          ],
          price: 990,
        },
        {
          title: 'Командный',
          class: 'team',
          desc: 'Для работы в команде',
          options: [
            {
              count: 'checked',
              title: 'Внедрение программных решений',
            },
            {
              count: 'checked',
              title: 'Перенос существующих шаблонов в базу программы',
            },
            {
              count: 'checked',
              title: 'Адаптация и настройка ПО под существующие рабочие процессы компании',
            },
            {
              count: 'checked',
              title: 'Интеграции с почтой, CRM, ERP и другим программным обеспечением',
            },
          ],
          price: false,
        },
        {
          title: 'Корпоративный',
          class: 'corp',
          desc: 'Для больших компаний',
          options: [
            {
              count: 'checked',
              title: 'Внедрение программных решений',
            },
            {
              count: 'checked',
              title: 'Перенос существующих шаблонов в базу программы',
            },
            {
              count: 'checked',
              title: 'Адаптация и настройка ПО под существующие рабочие процессы компании',
            },
            {
              count: 'checked',
              title: 'Интеграции с почтой, CRM, ERP и другим программным обеспечением',
            },
          ],
          price: false,
        },
      ],
      item: 229,
      current: 0,
      slide: '',
    }
  },
  methods: {
    nextSlide() {
      if (this.current === -687)
        this.current = 0;
      else 
        this.current -= 229;
      this.slide = `transform: translateX(${this.current}px)`;
    },
    prevSlide() {
      if (this.current === 0)
        this.current = -687;
      else 
        this.current += 229;
      this.slide = `transform: translateX(${this.current}px)`;
    }
  },
};
</script>

<style lang="scss" scoped>
.left {
  position: absolute;
  top: 60%;
  left: 5px;

  @media (min-width: 400px) {
    left: 15%;
  }
  @media (min-width: 768px) {
    top: 50%;
  }
}
@media (min-width: 1200px) {
  .right, .left {
    display: none;
  }
}
.right {
  position: absolute;
  top: 60%;
  right: 5px;
  transform: rotate(180deg);
  @media (min-width: 400px) {
    right: 15%;
  }
  @media (min-width: 768px) {
    top: 50%;
  }
}
.home__tarifs {
  background-color: #242424;
  color: #818181;
  padding: 120px 0;
  position: relative;
  &--overlay {
    width: 229px;
    overflow: hidden;
    margin: 0 auto;

    @media (min-width: 1200px) {
      width: 100%;
      overflow: inherit;
    }
  }

  &--wrapper {
    display: flex;
    // width: 229px;
    // overflow: hidden;
    justify-content: space-between;
    transition: .6s ease-out;

    @media (min-width: 1200px) {
      width: 100%;
      margin: 0;
    }
  }

  .title {
    color: #ffffff;
    font-family: 'Circe';
    font-size: 44px;
    font-weight: 700;
    font-style: normal;
    letter-spacing: normal;
    line-height: 52.8px;
    text-align: center;
    margin-bottom: 20px;
  }
  p {
    color: #818181;
    font-family: Circe;
    font-size: 20px;
    font-weight: 300;
    font-style: normal;
    letter-spacing: normal;
    line-height: 30px;
    text-align: center;
    margin-bottom: 37px;
  }
  &--item {
    width: 100%;
    height: 695px;
    margin-right: 5px;
    max-width: 229px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 20px;
    // padding: 0 5px;
    
    &:hover {
      // background-color: rgba(255,255,255,.01);
      // border-radius: 10px;
    }

    @media (min-width: 1440px) {
      height: 680px;
    }

    h4 {
      color: #818181;
      font-family: 'Circe';
      font-size: 24px;
      font-weight: 700;
      font-style: normal;
      letter-spacing: normal;
      line-height: 30px;
      text-align: left;
    }
    & > p {
      color: #818181;
      font-family: 'Circe';
      // font-size: 20px;
      font-size: 17px;
      font-weight: 300;
      font-style: normal;
      letter-spacing: normal;
      line-height: 30px;
      text-align: left;
      padding: 0;
      margin: 0;
      padding-bottom: 40px;
      border-bottom: 2px solid rgba(129, 129, 129, .3);
    }
    &-option {
      &-in {
        display: flex;
        flex-direction: column;
        height: 368px;
        justify-content: space-between;
      }
      padding: 16px 6px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid rgba(129, 129, 129, .3);
      .count {
        color: #818181;
        font-size: 40px;
        font-family: 'Circe';
        font-weight: 700;
        padding: 0;
        margin: 0;
        line-height: 1;
        margin-right: 13px;
      }
      .opt-title {
        color: #616163;
        font-family: 'Circe';
        font-size: 16px;
        font-weight: 400;
        font-style: normal;
        letter-spacing: normal;
        line-height: 16px;
        text-align: left;
      }
    }
    &-price {
      display: flex;
      justify-content: center;
      align-items: center;
      width: max-content;
      padding: 0 16px;
      // width: 67px;
      height: 51px;
      border-radius: 4px;
      background-color: rgba(255, 255, 255, 0.1);
      color: #ffffff;
      font-family: 'Circe';
      font-size: 29px;
      font-weight: 700;
      font-style: normal;
      letter-spacing: normal;
      line-height: 34.8px;
      text-align: left;
      margin: 40px 0;
    }
    &-btn {
      width: 229px;
      height: 60px;
      border: 3px solid #818181;
      color: #ffffff;
      font-family: 'Circe';
      font-size: 18px;
      font-weight: 700;
      font-style: normal;
      letter-spacing: normal;
      line-height: normal;
      text-align: left;
    }
  }
}
.home__tarifs--item {
  .home__tarifs--item-title.basic {
    color: #818181;
  }
}
.home__tarifs--item {
  .home__tarifs--item-title.indiv {
    color: #ffda7b;
  }
}
.home__tarifs--item {
  .home__tarifs--item-title.team {
    color: #f99042;
  }
}
.home__tarifs--item {
  .home__tarifs--item-title.corp {
    color: #70ba35;
  }
}
.btn__basic {
  border-color: #818181;
  transition: .3s ease-in-out;

  &:hover {
    border-color: transparent;
    color: #818181;
  }
}
.btn__indiv {
  border-color: #ffda7b;
  transition: .3s ease-in-out;

  &:hover {
    border-color: transparent;
    color: #ffda7b;
  }
}
.btn__team {
  border-color: #f99042;
  transition: .3s ease-in-out;

  &:hover {
    border-color: transparent;
    color: #f99042;
  }
}
.btn__corp {
  border-color: #70ba35;
  transition: .3s ease-in-out;

  &:hover {
    border-color: transparent;
    color: #70ba35;
  }
}
</style>
