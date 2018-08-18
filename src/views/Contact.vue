<template>
    <div class="wrapper">
        <!-- <h3 class="title-text">Kontakt</h3>
        <br> -->
        <a href="mailto:kempinskikarol@outlook.com" class="mail">kempinskikarol@outlook.com</a>
        <a href="tel:731 251 240" class="phone">731 251 240</a>
        <a href="https://www.instagram.com/hipolit2/" target="_blank" class="insta">hipolit2</a>
    </div>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style lang="scss" scoped>
.wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

a, p {
    margin: 10px 0;
    color: #111;
    font-weight: 200;
    text-decoration: none;
    position: relative;
    padding-left: 26px;

    &::before {
        content: '';
        width: 22px;
        height: 22px;
        position: absolute;
        top: -1px;
        left: 0;
        background-size: contain;
        background-position: center;
    }
}

.phone::before {
    background-image: url(../assets/icons/phone.svg);
}

.insta::before {
    background-image: url(../assets/icons/instagram.svg);
}

.mail::before {
    background-image: url(../assets/icons/gmail.svg);
}

a {
    &::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 10%;
        width: 80%;
        border-bottom: solid 1px #E9FA1Fee;
        transition: 0.3s ease-in;
        z-index: -2;
    }

    &:hover::after {
        border-bottom: solid 12px #E9FA1Fee;
    }
}
</style>
