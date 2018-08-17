<template>
    <div class="wrapper">
        <div class="video">
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/fPg6h3e2xTE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Video'
}
</script>

<style lang="scss" scoped>
@import '../settings.scss';
.wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    margin: 0 auto;

    @media #{$media-sm} {
        width: 90%;
    }

    @media #{$media-sm} {
        width: 80%;
    }

    @media #{$media-lg} {
        width: 70%;
    }

    @media #{$media-xl} {
        width: 60%;
    }
}

.video {
    width: 100%;
    padding-bottom: 56.25%;
    background-color: #fff;
    position: relative;

    iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
}
</style>

