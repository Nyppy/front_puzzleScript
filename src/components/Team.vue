<template>
  <div class="team">
       <div class="team__content">
           <div class="team__title">
               <h4>
                   Команда проекта
               </h4>
           </div>
           <div class="team__list">
               <div class="team__item">
                   <div class="team__img">
                        <img src="../assets/img/team/item.png" alt="">
                   </div>
                   <div class="team__description">
                       <p>Dr.Aboobacker</p>
                   </div>
               </div>
               <div class="team__item">
                   <div class="team__img">
                        <img src="../assets/img/team/item.png" alt="">
                   </div>
                   <div class="team__description">
                       <p>Dr.Aboobacker</p>
                   </div>
               </div>
               <div class="team__item">
                   <div class="team__img">
                        <img src="../assets/img/team/item.png" alt="">
                   </div>
                   <div class="team__description">
                       <p>Dr.Aboobacker</p>
                   </div>
               </div>
               <div class="team__item">
                   <div class="team__img">
                        <img src="../assets/img/team/item.png" alt="">
                   </div>
                   <div class="team__description">
                       <p>Dr.Aboobacker</p>
                   </div>
               </div>
               <div class="team__item">
                   <div class="team__img">
                        <img src="../assets/img/team/item.png" alt="">
                   </div>
                   <div class="team__description">
                       <p>Dr.Aboobacker</p>
                   </div>
               </div>
           </div>
       </div>
  </div>
</template>

<script>
  export default {
    name: 'team',
    data: function () {
        return {}
    }
  }
</script>

<style lang="scss" scoped>
.team{
    background: #A6CAF555;
    padding: 57px 0px 0px 0px;
    p{
        margin-bottom: 0px;
    }
}

.team__content{
    max-width: 1170px;
    margin: auto;
    position: relative;
}

.team__title {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 50px;
    line-height: 59px;
    color: #333333;
    text-align: center;
    margin-bottom: 44px;
}

.team__list {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
.team__item {
    flex-basis: 205px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px 70px 90px;
}
.team__img {
    margin-bottom: 16px;
}
.team__description {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 35px;
    color: #333333;
}

</style>
