<template>
  <div class="sidebar">
    <div ref="sidebar" class="sidebar__content">
      <div class="sidebar__addbutton" @click="toggleModalRegistery">
        <svg width="24" height="16" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="14.2916" width="2.91666" height="31.4999" rx="1.45833" fill="black"/>
          <rect x="31.4999" y="14.2917" width="2.91666" height="31.4999" rx="1.45833" transform="rotate(90 31.4999 14.2917)" fill="black"/>
        </svg>
        <p>Новый файл</p>
      </div>
      <div class="sidebar__list">
        <div class="sidebar__item">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 20C10.8954 20 10 19.1046 10 18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18C14 19.1046 13.1046 20 12 20ZM12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14ZM12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6C14 6.53043 13.7893 7.03914 13.4142 7.41421C13.0391 7.78929 12.5304 8 12 8Z" fill="#2E3A59"/>
          </svg>
          <p>Плагины</p>
        </div>
        <div class="sidebar__item">
          <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 16H5.99998C2.87435 16.0019 0.27087 13.6039 0.0163398 10.4886C-0.23819 7.37336 1.9415 4.58454 5.02598 4.07901C6.44569 1.56189 9.11009 0.00351853 12 -5.02124e-05C13.802 -0.00686166 15.5524 0.601308 16.962 1.72401C18.3461 2.82186 19.3301 4.34498 19.762 6.05801C22.3459 6.45504 24.1878 8.77553 23.988 11.3821C23.7882 13.9887 21.6142 16.0014 19 16ZM12 2C9.83169 2.00256 7.83265 3.17211 6.76798 5.06101L6.29998 5.90001L5.35098 6.05501C3.30126 6.39841 1.85599 8.2543 2.02519 10.3257C2.19439 12.3971 3.9217 13.9938 5.99998 14H19C20.5686 14.0016 21.8736 12.7946 21.9942 11.2307C22.1148 9.66674 21.0103 8.27391 19.46 8.03501L18.144 7.83501L17.822 6.54301C17.1573 3.86982 14.7546 1.99496 12 2ZM10.528 12.71L7.02798 9.21001L8.43798 7.80001L10.528 9.89001L15.128 5.29001L16.538 6.70001L10.529 12.709L10.528 12.71Z" fill="#2E3A59"/>
          </svg>
          <p>Общий доступ</p>
        </div>
        <div class="sidebar__item">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C19.9939 15.5203 15.5203 19.9939 10 20ZM10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C17.995 5.58378 14.4162 2.00496 10 2ZM15 11H9V5H11V9H15V11Z" fill="#2E3A59"/>
          </svg>
          <p>Недавнее</p>
        </div>
        <div class="sidebar__item">
          <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 20H4C2.89543 20 2 19.1046 2 18V5H0V3H4V2C4 0.89543 4.89543 0 6 0H12C13.1046 0 14 0.89543 14 2V3H18V5H16V18C16 19.1046 15.1046 20 14 20ZM4 5V18H14V5H4ZM6 2V3H12V2H6ZM12 16H10V7H12V16ZM8 16H6V7H8V16Z" fill="#2E3A59"/>
          </svg>
          <p>Корзина</p>
        </div>
      </div>
    </div>

    <modalLoadFile
      v-model="flag_modal_load_file"
    />
  </div>
</template>

<script>
import modalLoadFile from '@/components/LoadFile.vue';

export default {
  name: 'Sidebar',
  data() {
    return {
      flag_modal_load_file: false,
    }
  },
  components: {
    modalLoadFile,
  },
  methods: {
    checkScroll(e){
      console.log(e.target.scrollingElement.scrollTop) 
      if (e.target.scrollingElement.scrollTop >= 90) {
        this.$refs.sidebar.style.position = 'fixed'
        this.$refs.sidebar.style.top = '23px'
      } else {
        this.$refs.sidebar.style.position = 'static'
      }
    },
    toggleModalRegistery() {
      this.flag_modal_load_file = !this.flag_modal_load_file;
    },
  },
  created () {
    window.addEventListener('scroll', this.checkScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.checkScroll);
  },
}
</script>

<style lang="scss" scoped>
.sidebar {
  min-width: 256px;
  position: relative;
  p{
    margin-bottom: 0px;
  }
}
.sidebar__content {
  // position: fixed;
  width: 256px;
}
.sidebar__addbutton {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: rgba(166, 202, 245, 0.29);
  border-radius: 37px;
  margin-bottom: 20px;
  padding: 0px 18px;
  height: 48px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  color: #333333;
  position: relative;
  cursor: pointer;
  svg{
    margin-right: 9px;
  }
}
.sidebar__list {
  width: 100%;
}
.sidebar__item {
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: rgba(222, 255, 207, 0.47);
  border-radius: 4px;
  margin-bottom: 20px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  height: 48px;
  position: relative;
  svg{
    margin-left: 16px;
    // margin-right: 8px;
  }
  p{
    position: relative;
    left: 18px;
  }
}
</style>