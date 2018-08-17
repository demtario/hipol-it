<template>
  <nav class="nav">
      <ul class="nav__menu" :class="{'nav__menu--active': toggleMenu}">
        <li @click="handleMenu"><router-link to="/photo">Photos</router-link></li>
        <li @click="handleMenu"><router-link to="/video">Video</router-link></li>
        <li @click="handleMenu"><router-link to="/contact">Contact</router-link></li>
      </ul>
      <div class="nav__trigger" :class="{'nav__trigger--active': toggleMenu}" @click="handleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
</template>

<script>
export default {
  name: 'Navi',
  data () {
    return {
      toggleMenu: false
    }
  },
  methods: {
    handleMenu: function () {
      if(innerWidth < 544) this.toggleMenu = !this.toggleMenu
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../settings.scss';

.nav {
  width: 100%;
  margin-top: 10px;
  position: relative;

  &__trigger {
    position: fixed;
    top: 10px;
    right: 10px;
    width: 32px;
    transition: 0.3s;
    z-index: 120;

    span {
      display: block;
      width: 100%;
      height: 1px;
      background-color: #222;
      margin: 6px 0;
    }

    &--active {
      z-index: 101;
      width: 38px;

      span {
        margin: 8px 0;
      }
    }

    @media #{$media-sm} {
      display: none;
    }
  }
}

.nav__menu {
  list-style: none;
  margin: 0;
  padding: 0;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #e0e0e0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: 0;
  visibility: hidden;
  transition: 0.3s;

  &--active {
    opacity: 1;
    visibility: visible;
  }

  li a {
    display: block;
    padding: 10px 5px;
    color: #222;
    font-weight: 300;
    text-decoration: none;
    font-size: 1.2em;
    outline: none;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      bottom: 6px;
      left: 50%;
      transform: translateX(-50%);
      border-bottom: solid 1px #333;
      width: 0;
      transition: 0.3s;

      @media #{$media-sm} {
        bottom: 3px;
      }
    }

    &:hover::before,
    &.router-link-active::before {
      width: 50%;
    }
  }

  @media #{$media-sm} {
    position: static;
    width: auto;
    height: auto;
    flex-direction: row;
    background-color: transparent;
    opacity: 1;
    visibility: visible;

    li a {
      padding: 5px 15px;
      font-size: 0.9em;
    }
  }
}
</style>
