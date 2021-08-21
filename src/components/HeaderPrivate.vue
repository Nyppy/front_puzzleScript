<template>
  <div class="header pt-4" :style="{'position': !fixed?'fixed':''}">
    <div class="header__content pb-4">
      <router-link tag="div" to="/" class="header__logo cursor-pointer ">
        <div class="header__img">
          <img src="../assets/img/header/session.png" alt="">
        </div>
      </router-link>

      <div class="header__nav pl-0">
        <v-text-field
          v-if="!search_elem"
          v-model="search"
          type="password"
          class="mr-6"
          required
          hide-details
          placeholder="Поиск"
          prepend-inner-icon="mdi-magnify"
          outlined
          dense
        ></v-text-field>

        <h3 v-else class="ml-4 black--text">{{name_protocol}}</h3>

        <div class="d-flex">
          <v-icon color="#000" size="40px" class="mr-2 cursor-pointer ">mdi-cog-outline</v-icon>

          <img
            v-if="!search_elem"
            width="40px"
            class="mr-4 cursor-pointer"
            src="../assets/img/header/Account.png" 
            alt=""
          />

          <router-link v-else tag="div" to="/private-office" class="header__button">
            <span class="black--text">Протоколы</span>
            <v-icon>mdi-arrow-right</v-icon>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HeaderPrivate',
    data() {
      return {
        search: null,
      }
    },
    props: {
      fixed: {
        type: Boolean,
        default: false,
      },
      search_elem: {
        type: Boolean,
        default: false
      },
      name_protocol: {
        type: String,
        default: null
      }
    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
    .header {
        width: 100%;
        min-height: 100px;
        z-index: 10;
        // position: fixed;
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 28px;
        color: #3A3A3A;
        background-color: white;
        p{
          margin-bottom: 0px;
        }
    }

    .header__content{
      max-width: 1280px;
      margin: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;

    }

    .header__img{
      img{
        max-width: 65%;
      }
    }

    .header__button{
      background: rgba(47, 101, 166, 0.64);
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 150px;
    }

    .header__nav{
      display: flex;
      justify-content: space-between;
      flex-grow: 1;
      align-items: center;
      padding: 0px 50px 5px;
      
        p{
          cursor: pointer;
          transition: 0.3s;
          &:hover{
           color: #3B7A20;
          }
          
        }
      
    }

    .header__social{
      img{
        cursor: pointer;
        margin-right: 10px;
        &:last-child {
          margin-right: 0px;
        }
      }
    }
</style>
