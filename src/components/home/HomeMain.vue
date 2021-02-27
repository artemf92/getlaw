<template>
  <div class="home__main">
    <div class="container">
      <div class="home__main--wrapper">
        <div class="left-block">
          <h2>Заключайте договоры <span>быстрее, проще, удобнее!</span></h2>
          <p>Самый удобный способ работы с договорами: создавайте, согласовывайте и подписывайте договоры в два клика!</p>
          <button class="btn btn__orange">Попробовать бесплатно</button>
        </div>
        <div class="right-block">
          <img src="../../../public/images/main1.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeMain',
  methods: {
  },
};
</script>

<style lang="scss" scoped>
h2 {
font-family: 'Circe';
font-size: 30px;
font-style: normal;
font-weight: 300;
line-height: 32px;
letter-spacing: 0em;
text-align: left;
margin: 0;
padding: 0;
margin-bottom: 20px;
color: #242424;

@media (min-width: 768px) {
  font-size: 40px;
  line-height: 46px;
}

@media (min-width: 992px) {
  font-size: 60px;
  line-height: 66px;
}

  span {
    font-family: 'Circe';
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: left;

    @media (min-width: 768px) {
      font-size: 40px;
      line-height: 46px;
    }

    @media (min-width: 992px) {
      font-size: 60px;
      line-height: 66px;
    }
  }

}
.home {
  &__main {
    padding: 20px 0;

    @media (min-width: 992px) {
      padding: 120px 0;
    }

    p {
      font-family: 'Circe';
      font-size: 20px;
      font-style: normal;
      font-weight: 350;
      line-height: 30px;
      letter-spacing: 0em;
      text-align: left;
      padding: 0;
      margin: 0;
      color: #242424;
      margin-bottom: 80px;
    }
  }
  &__main--wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    position: relative;
  }
  
}
button {
  height: 60px;
  // padding: 16px 20px;
  color: #fff;
  margin: 0;
  // display: flex;
  width: max-content;
  border-radius: 0;
  transition: .3s ease-in-out;
  width: 261px;
  color: #ffffff;
  font-family: 'Circe';
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  letter-spacing: normal;
  line-height: normal;
  text-align: left;
  text-transform: capitalize;

  &:hover {
    color: #fff;
    background-color: rgb(249, 144, 66, .8);
    border-radius: 0;
  }
}

.right-block {
  display: none;

  @media(min-width: 992px) {
    display: block;
    width: 50%;
  }
  img {
    width: 100%;
    max-width: 529px;
    height: auto;
  }
}
.left-block {
  display: flex;
  justify-content: center;
  flex-direction: column;
  z-index: 10;

  width: 100%;
  @media(min-width: 992px) {
    width: 50%;
  }
}
</style>
