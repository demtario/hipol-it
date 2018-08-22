<template>
    <div class="item">
        <img class="item__img" :src="path" :alt="title">
        <div class="item__overlay">
            <!-- <h3>{{ title }}</h3> -->
            <!-- <hr> -->
            <!-- <p>{{ meta }}</p> -->
            
            <div>
              <span></span>
              <p><img src="@/assets/icons/search.svg" data-disabled="true"></p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Photo',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data: function () {
    return {
      title: '',
      meta: '',
      path: ''
    }
  },
  data () {
    return {
      title: this.item.title,
      meta: this.item.meta,
      path: this.item.path
    }
  },
  mounted () {
    // console.log(this.item)
  }
}
</script>

<style lang="scss" scoped>
@import '../settings.scss';

.item {
  position: relative;

  &__img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #0008;
    color: #fff;
    font-weight: 300;
    padding: 10px;
    box-sizing: border-box;
    transition: 0.2s;
    cursor: pointer;
    overflow: hidden;
    opacity: 0;
    text-align: center;

    h3 {
      font-weight: 200;
      margin: 0;
      position: relative;
      bottom: -16px;
      transition: 0.3s;
      // display: none;
    }

    hr {
      width: 10%;
      border: 0;
      transition: 0.3s;
      border-bottom: solid 1px #fff;
    }

    p {
      font-size: 0.8em;
      margin: 0;
      position: relative;
      top: -16px;
      transition: 0.3s;
      // display: none;

      img {
        height: 20px;
        opacity: 0.8;
      }
    }

    div {
      width: 120%;
      height: 120%;
      transition: 0.3s;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;

      &:before {
          display: block;
          content: "";
          width: 20px;
          height: 20px;
          position: absolute;
          top: -10px;
          left: -10px;
          border-top: 1px solid #fff;
          border-left: 1px solid #fff;
      }
      &:after {
          display: block;
          content: "";
          width: 20px;
          height: 20px;
          position: absolute;
          top: -10px;
          right: -10px;
          border-top: 1px solid #fff;
          border-right: 1px solid #fff;
      }
      span:before {
          display: block;
          content: "";
          width: 20px;
          height: 20px;
          position: absolute;
          bottom: -10px;
          left: -10px;
          border-bottom: 1px solid #fff;
          border-left: 1px solid #fff;
      }
      span:after {
          display: block;
          content: "";
          width: 20px;
          height: 20px;
          position: absolute;
          bottom: -10px;
          right: -10px;
          border-bottom: 1px solid #fff;
          border-right: 1px solid #fff;
      }
    }
  }

  &:hover &__overlay {
    opacity: 1;

    hr {
      width: 70%;
    }

    h3 {
      bottom: 0;
    }

    p {
      top: 0;
    }

    div {
      width: 90%;
      height: 90%;
    }
  }
}
</style>
