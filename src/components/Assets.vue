<template>
    <div class="assets">
        <div v-click-outside="clickOutside" class="assets__content">
            <div class="assets__list">
                <div class="aseets__item">
                    <div class="assets__number">
                        <h4>Набор №1</h4>
                    </div>
                    <div class="assets__description">
                        <div class="assets__text">
                            <h4>Общий ассет маркеров протокола</h4>
                            <p>Ключевые слова: Зафиксировать, Обозначить...</p>
                        </div>
                        <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M32.9999 0.333328L27.2424 6.09083L50.0274 28.9167H0.333252V37.0833H50.0274L27.2424 59.9092L32.9999 65.6667L65.6666 33L32.9999 0.333328Z" fill="#333333"/>
                        </svg>
                    </div>
                </div>
                <div class="aseets__item">
                    <div class="assets__number">
                        <h4>Набор №2</h4>
                    </div>
                    <div class="assets__description">
                        <div class="assets__text">
                            <h4>Общий ассет маркеров протокола</h4>
                            <p>Ключевые слова: Зафиксировать, Обозначить...</p>
                        </div>
                        <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M32.9999 0.333328L27.2424 6.09083L50.0274 28.9167H0.333252V37.0833H50.0274L27.2424 59.9092L32.9999 65.6667L65.6666 33L32.9999 0.333328Z" fill="#333333"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'assets',
    data: () => {
        return {}
    },
    methods: {
        clickOutside(){
            this.$emit('outside')
        }
    }
  }
</script>

<style lang="scss" scoped>
.assets {
    top: 0px;
    position: fixed;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #A6CAF588;
    z-index: 1000;
    p{
        margin-bottom: 0px;
    }
    
}
.assets__content {
    width: 1025px;
    padding: 69px;
    background: #FFFFFF;
    border-radius: 100px;
}
.assets__list {
    width: 100%;

}
.aseets__item {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 40px;
    height: 115px;
    &:last-child{
        margin-bottom: 0px;
    }

}
.assets__number {
    width: 30%;
    background: #FFFFFF;
    border: 1px solid #000000;
    border-radius: 16px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 40px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 35px;
    color: #000000;
}
.assets__description {
    display: flex;
    align-items: center;
    width: 75%;
    justify-content: space-between;
    height: 100%;
    background: #A6CAF5;
    border-radius: 16px;
    position: absolute;
    right: 0px;
    padding: 18px 30px 27px 24px;
}
.assets__text {
    height: 100%;
    color: #000000;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h4{
        
        font-size: 24px;
        line-height: 28px;
        
    }
    p{
        font-size: 18px;
        line-height: 21px;
    }
}
</style>
