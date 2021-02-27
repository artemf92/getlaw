<template>
  <div class="">
    <div
      class="home__block"
      :id="'block' + (+index + 1)"
      v-for="(value, index) in blocks"
      :key="index"
    >
      <div class="home__block--description">
        <p>{{ value.title }}</p>
        <div class="b-wrap">
          <button class="btn btn__orange">Попробовать</button>
          <div class="">
            <button class="play"></button>
            <a href="#">Смотреть видео</a>
          </div>
        </div>
      </div>
      <div class="home__block--preview">
        <img :src="`/images/${value.imageUrl}`" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeBlock',
  data: () => ({
    blocks: [
      {
        title: 'Заполняй любые шаблоны документов из библиотеки getlaw, или создай собственные за пару минут',
        imageUrl: 'home-block1.png',
      },
      {
        title: 'Согласовывай и утверждай любой документ с коллегами и контрагентами без звонков и длинных переписок',
        imageUrl: 'home-block2.png',
      },
      {
        title: 'Подписывай документы онлайн — без бумаги, курьеров и печатей. А, ну и в два клика:)',
        imageUrl: 'home-block3.png',
      },
    ]
  }),
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.home {
  background-color: #fff;
}
.home__block {
  display: flex;
  align-items: center;
  justify-content: space-between;
  // flex-wrap: wrap;
  flex-direction: column-reverse;
  row-gap: 10px;
  width: 100%;
  max-width: 1310px;
  position: relative;
  margin-bottom: 25px;
  background-color: #fff;
  padding: 20px 10px;

  @media (min-width: 992px) {
    padding: 0;
    height: 492px;
    flex-direction: row;
    margin-bottom: 186px;
  }
  
  &:nth-of-type(2n) {
    // flex-direction: row-reverse;
    margin-left: auto;

    .b-wrap {
      justify-content: flex-end;
    }

    @media (min-width: 992px) {
      flex-direction: row-reverse;
    }

    &:before {
      left: inherit;

      @media (min-width: 992px) {
        right: 7%;
      }
    }

    .home__block--description {
      p {
        text-align: center;

        @media (min-width: 992px) {
          text-align: right;
        }
      }
    }
  }

  &:before {
    position: absolute;
    z-index: 0;
    display: block;
    content: '';
    // width: 68%;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    @media (min-width: 992px) {
      width: 68%;
      left: 7%;
    }
  }
  &--description {
    z-index: 1;
    p {
      font-family: 'Circe';
      font-size: 25px;
      font-style: normal;
      font-weight: 700;
      line-height: 27px;
      letter-spacing: 0em;
      text-align: left;
      color: #242424;
      width: 100%;
      max-width: 639px;
      padding: 0;
      margin: 0;
      margin-bottom: 60px;
      text-align: center;

      @media (min-width: 992px) {
        font-size: 44px;
        line-height: 53px;
        text-align: left;
      }
    }
    button {
      font-family: 'Circe';
      text-transform: capitalize;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: 27px;
      letter-spacing: 0em;
      text-align: left;
      transition: .3s ease-in-out;

      &:hover {
        // color: #f99042;
        background-color: rgba(249, 146, 67, .75);
        color: #fff;
      }
    }
  }
  &--preview {
    z-index: 1;
    // margin-top: 20px;

    @media (min-width: 992px) {
      margin-top: 120px;
    }

    img {
      width: 100%;
      max-width: auto;
    }
  }
}
.b-wrap {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 10px;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  a {
    color: #616163;
    font-family: 'Circe';
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;
  }
  button {
    margin-right: 16px;
    border-radius: 4px;
    &.play {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 61px;
      transition: .3s ease-in-out;

      &:hover {
        background-color: rgba(36, 36, 36, .8);
      }

      &:after {
        display: block;
        content: '';
        border: 12px solid #fff;
        border-left-width: 20px;
        border-right-color: transparent;
        border-bottom-color: transparent;
        border-top-color: transparent;
        margin-left: 16px;
      }
    }
  }
  .btn__orange {
    height: 60px;
    margin-top: 0;
    // margin-right: 40px;
    border-radius: 0;

    @media (min-width: 768px) {
      margin-right: 40px;
    }
  }
}
#block1:before {
  background-color: rgba(97, 97, 99, .12);
}
#block2:before {
  background-color: rgba(255, 218, 123, .12);
}
#block3:before {
  background-color: rgba(249, 144, 66, .12);
}
</style>
