<template>
    <div>
        <div class="wrapper">
            <div class="video">
                <iframe src="https://player.vimeo.com/video/285830821?portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
            </div>
        </div>
        <div class="more-videos">
            <div class="video">
                <iframe src="https://player.vimeo.com/video/285814576?portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
            </div>
            <div class="video">
                <iframe src="https://player.vimeo.com/video/285830240?portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
            </div>
            <div class="video">
                <iframe src="https://player.vimeo.com/video/285829777?portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
            </div>
            <div class="video">
                <iframe src="https://player.vimeo.com/video/285709325?portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
            </div>
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

    @media #{$media-lg} {
        width: 75%;
    }

    @media #{$media-xl} {
        width: 60%;
    }
}

.video {
    width: 100%;
    padding-bottom: 56.25%;
    position: relative;

    iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
}

.more-videos {
    display: grid;
    grid-gap: 1px;
    grid-template-columns: 1fr;
    width: 90%;
    margin: 0 auto;
    margin-top: 24px;

    @media #{$media-lg} {
        width: 80%;
        grid-template-columns: 1fr 1fr;
        
    }
}
</style>

