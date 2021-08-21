<template>
  <div class="footer">
       <div class="footer__content">
           <p>Цифровой прорыв -  2021</p>
       </div>
  </div>
</template>

<script>
  export default {
    name: 'Footer',
    data: function () {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
.footer {
    background: rgba(222, 255, 207, 0.47);
    p{
      margin-bottom: 0px;
    }
}
.footer__content {
    padding: 17px 0px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
}
</style>
