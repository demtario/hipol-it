<template>
    <footer class="footer">
        Karol Hipolit Kempiński &copy; 2018 - Designed by <a href="https://amedrygal.pl" target="_blank">Artur Mędrygał</a> - <a href="https://heseya.com" target="_blank">Heseya</a>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style lang="scss" scoped>
@import '../settings.scss';
.footer {
  padding: 5px;
  font-size: 0.8em;
  text-align: center;
  font-weight: 300;
  padding: 10px;

  a {
    color: #333;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>


