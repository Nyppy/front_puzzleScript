<template>
  <div class="description">
       <div class="description__content">
           <div class="description__title">
               <h4>
                   Протокол любого совещания - легко и просто
               </h4>
           </div>
           <div class="description__text">
               <p>
                   Session - сервис автоматического формирования протокола совещания на основе записи голосов участников с использованием технологий машинного обучения
               </p>
           </div>
           <div class="description__list">
               <div class="description__item">
                   <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 13C0 9.55219 1.36964 6.24558 3.80761 3.80761C6.24558 1.36964 9.55219 0 13 0C16.4478 0 19.7544 1.36964 22.1924 3.80761C24.6304 6.24558 26 9.55219 26 13C26 16.4478 24.6304 19.7544 22.1924 22.1924C19.7544 24.6304 16.4478 26 13 26C9.55219 26 6.24558 24.6304 3.80761 22.1924C1.36964 19.7544 0 16.4478 0 13ZM12.2581 18.564L19.7427 9.20747L18.3907 8.12587L12.0085 16.1009L7.488 12.3344L6.37867 13.6656L12.2581 18.5657V18.564Z" fill="#333333"/>
                    </svg>
                    <p>Современные технологии распознавания речи</p>
               </div>
               <div class="description__item">
                   <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 13C0 9.55219 1.36964 6.24558 3.80761 3.80761C6.24558 1.36964 9.55219 0 13 0C16.4478 0 19.7544 1.36964 22.1924 3.80761C24.6304 6.24558 26 9.55219 26 13C26 16.4478 24.6304 19.7544 22.1924 22.1924C19.7544 24.6304 16.4478 26 13 26C9.55219 26 6.24558 24.6304 3.80761 22.1924C1.36964 19.7544 0 16.4478 0 13ZM12.2581 18.564L19.7427 9.20747L18.3907 8.12587L12.0085 16.1009L7.488 12.3344L6.37867 13.6656L12.2581 18.5657V18.564Z" fill="#333333"/>
                    </svg>
                    <p>Поддержка различных форматов</p>
               </div>
               <div class="description__item">
                   <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 13C0 9.55219 1.36964 6.24558 3.80761 3.80761C6.24558 1.36964 9.55219 0 13 0C16.4478 0 19.7544 1.36964 22.1924 3.80761C24.6304 6.24558 26 9.55219 26 13C26 16.4478 24.6304 19.7544 22.1924 22.1924C19.7544 24.6304 16.4478 26 13 26C9.55219 26 6.24558 24.6304 3.80761 22.1924C1.36964 19.7544 0 16.4478 0 13ZM12.2581 18.564L19.7427 9.20747L18.3907 8.12587L12.0085 16.1009L7.488 12.3344L6.37867 13.6656L12.2581 18.5657V18.564Z" fill="#333333"/>
                    </svg>
                    <p>Настройка под требования пользователя</p>
               </div>
           </div>
           <div class="description__button">
               <p>Попробовать</p>
               <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M16.5186 7.95645L8.03281 0.591504C7.96768 0.535351 7.88457 0.503906 7.79697 0.503906H5.80918C5.64297 0.503906 5.5666 0.710547 5.69238 0.818359L13.5582 7.64648H0.414063C0.315234 7.64648 0.234375 7.72734 0.234375 7.82617V9.17383C0.234375 9.27266 0.315234 9.35352 0.414063 9.35352H13.556L5.69014 16.1816C5.56436 16.2917 5.64072 16.4961 5.80693 16.4961H7.86211C7.90479 16.4961 7.94746 16.4804 7.97891 16.4512L16.5186 9.04356C16.5963 8.97594 16.6587 8.89243 16.7014 8.79866C16.7441 8.70489 16.7662 8.60304 16.7662 8.5C16.7662 8.39696 16.7441 8.29511 16.7014 8.20134C16.6587 8.10757 16.5963 8.02406 16.5186 7.95645Z" fill="white"/>
               </svg>
           </div>
           <div class="description__img">
               <img src="../assets/img/description/item.png" alt="">
           </div>
       </div>
  </div>
</template>

<script>
  export default {
    name: 'description',
    data: function () {
        return {}
    }
     
  }
</script>

<style lang="scss" scoped>
.description{
    background: #A6CAF555;
    padding: 237px 0px 127px 0px;
    p{
        margin-bottom: 0px;
    }
}

.description__content{
    max-width: 1170px;
    margin: auto;
    position: relative;
}

.description__title {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 65px;
    line-height: 76px;
    color: #333333;
    max-width: 980px;
    text-align: left;
    margin-bottom: 57px;
}
.description__text {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #515050;
    max-width: 486px;
    text-align: left;
    margin-bottom: 31px;
}
.description__list {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #515050;
    margin-bottom: 57px;
}
.description__item {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 14px;
    svg{
        margin-right: 15px;
    }
}
.description__button {
    cursor: pointer;
    height: 52px;
    background: #333333;
    border-radius: 26px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 229px;
    width: 100%;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
    padding: 0px 40px;
}
.description__img {
    position: absolute;
    right: 0px;
    bottom: 0px;
    transform: translate(0%, 40%);
}
</style>
