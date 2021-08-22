<template>
    <div class="assets">
        <div v-click-outside="clickOutside" class="assets__content">
            <div class="assets__list">
                <div v-for="item in items" @click="togle(item.title)" :key='item.title' v-bind:class='{ "aseets__item-active": item.show }' class="aseets__item">
                    <div class="assets__number">
                        <h4>{{item.title}}</h4>
                    </div>
                    <div class="assets__description">
                        <div class="assets__text">
                            <h4>Общий ассет маркеров протокола</h4>
                            <p>Ключевые слова: {{item.keywords}}</p>
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
        return {
            items:[
                {show: false, title: 'Набор №1', keywords: 'Начало сообщения, конец сообщения, начало заметки, конец заметки'},
                {show: false, title: 'Набор №2', keywords: 'Обратите внимание, отметим, выделим, решили, рассмотрим... '},
            ]
        }
    },
    methods: {
        clickOutside(){
            this.$emit('outside')
        },
        togle(title){
            this.items.forEach(element => {
                element.show = false
                if (element.title == title) {
                    element.show = true
                }
            });
            console.log(this.items)
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
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 40px;
    height: 115px;
    border-radius: 16px;
    
    &:last-child{
        margin-bottom: 0px;
    }

}

.aseets__item-active{
    -webkit-box-shadow: 12px 12px 8px 0px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 12px 12px 8px 0px rgba(34, 60, 80, 0.2);
    box-shadow: 12px 12px 8px 0px rgba(34, 60, 80, 0.2);
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
    svg{
        min-width: 48px;
    }
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
