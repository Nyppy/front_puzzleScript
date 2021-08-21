<template>
  <div class="functional">
      <div class="functional__content">
          <div class="functionoal__suptitle">
              <h4>Краткое руководство</h4>
          </div>
          <div class="functional__title">
              <h3>Основный функционал</h3>
          </div>
          <div class="functional__list">
              <div class="functional__item">
                  <div class="functional__img">
                    <img src="../assets/img/functional/item.png" alt="">
                  </div>
                  <div class="functional__description">
                      <p>Загрузите запись протокола</p>
                  </div>
              </div>
              <div class="functional__item">
                  <div class="functional__img">
                    <img src="../assets/img/functional/item.png" alt="">
                  </div>
                  <div class="functional__description">
                      <p>Настройте маркеры</p>
                  </div>
              </div>
              <div class="functional__item">
                  <div class="functional__img">
                    <img src="../assets/img/functional/item.png" alt="">
                  </div>
                  <div class="functional__description">
                      <p>Определите ключевые маркеры</p>
                  </div>
              </div>
              <div class="functional__item">
                  <div class="functional__img">
                    <img src="../assets/img/functional/item.png" alt="">
                  </div>
                  <div class="functional__description">
                      <p>Сохраните готовый протокол</p>
                  </div>
              </div>
          </div>
          <div class="functional__button">
              <p>Подробнее</p>
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.5186 7.95645L8.03281 0.591504C7.96768 0.535351 7.88457 0.503906 7.79697 0.503906H5.80918C5.64297 0.503906 5.5666 0.710547 5.69238 0.818359L13.5582 7.64648H0.414063C0.315234 7.64648 0.234375 7.72734 0.234375 7.82617V9.17383C0.234375 9.27266 0.315234 9.35352 0.414063 9.35352H13.556L5.69014 16.1816C5.56436 16.2917 5.64072 16.4961 5.80693 16.4961H7.86211C7.90479 16.4961 7.94746 16.4804 7.97891 16.4512L16.5186 9.04356C16.5963 8.97594 16.6587 8.89243 16.7014 8.79866C16.7441 8.70489 16.7662 8.60304 16.7662 8.5C16.7662 8.39696 16.7441 8.29511 16.7014 8.20134C16.6587 8.10757 16.5963 8.02406 16.5186 7.95645Z" fill="#060606"/>
              </svg>
          </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'functional',
    data: function () {
        return {}
    }
     
  }
</script>

<style lang="scss" scoped>
.functional {
    padding: 106px 0px 135px;
    p{
        margin-bottom: 0px;
    }
}
.functional__content {
    max-width: 1205px;
    margin: auto;
}
.functionoal__suptitle {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    line-height: 30px;
    color: #B8B8B8;
    text-align: left;
    margin-bottom: 15px;
}
.functional__title {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 50px;
    line-height: 59px;
    color: #333333;
    text-align: left;
    margin-bottom: 31px;

}
.functional__list {
    display: flex;
    justify-content: space-between;
    margin-bottom: 46px;
}
.functional__item {
    flex-basis: 284px;
}

.functional__img{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 284px;
    background-color: #333333;
}

.functional__description {
    background: rgba(222, 255, 207, 0.47);
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    // text-align: center;
    color: #515050;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p{
        display: inline-block;
        width: 100%;
    }
}
.functional__button {
    background: #BDF8A4;
    border-radius: 26px;
    max-width: 229px;
    height: 52px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 58px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #060606;
    cursor: pointer;
}
</style>
