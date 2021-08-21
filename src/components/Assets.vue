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
    
}
.assets__content {
    width: 1025px;
    padding: 69px;
    background: #FFFFFF;
    border-radius: 100px;
}
.assets__list {
}
.aseets__item {
    display: flex;
    

}
.assets__number {
}
.assets__description {
}
.assets__text {
}
</style>
