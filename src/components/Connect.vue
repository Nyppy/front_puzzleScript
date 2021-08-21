<template>
    <div class="connect">
        <div class="connect__content">
            <div class="connect__suptitle">
                <h4>
                    Свяжитесь с нами
                </h4>
            </div>
            <div class="connect__title">
                <h3>
                    Пользуйтесь лучшим
                </h3>
            </div>
            <div class="connect__text">
                <p>
                    Session - сервис который позволит вам оптимизировать огромное количество рабочих издержек благодаря использованию современных технологий машинного обучения, обраюотки речи, и заканчивая возможностью пользовательской настройки ключевых фраз и профессиональной лексики.
                    Сохраните свое личное и рабочее время - пользуйтесь Session!
                </p>
            </div>
            <div class="connect__img">
                <img src="../assets/img/connect/item.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'connect',
    data: function () {
        return {}
    }
  }
</script>

<style lang="scss" scoped>
.connect {
    padding: 150px 0px 230px;
}
.connect__content {
    max-width: 1140px;
    margin: auto;
    position: relative;
}
.connect__suptitle {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    line-height: 30px;
    color: #B8B8B8;
    text-align: left;
    margin-bottom: 16px;
}
.connect__title {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 50px;
    line-height: 59px;
    color: #333333;
    text-align: left;
    margin-bottom: 32px;
}
.connect__text {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #505050;
    text-align: left;
    max-width: 600px;
}
.connect__img {
    opacity: 0.6;
    position: absolute;
    right: 0px;
    transform: translate(10%, -60%);
    img{
        max-width: 80%;
    }
}

</style>
