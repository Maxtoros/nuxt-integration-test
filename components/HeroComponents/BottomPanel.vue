<template>
    <div class="hero-bottom" />
</template>
<style lang="css" scoped>
.hero-bottom {
    position: relative;
    top: -64px;
    width: 100%;
    height: 7.5rem;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #f5f5f5 69.79%);
}

/* draw green line */
.hero-bottom:before {
    content: '';
    height: 1.5rem;
    border-left: solid 2px #6ad300;
    position: absolute;
    left: 0;
    top: 50%;
    z-index: 1;
    margin: 0 65px;
}

.hero-bottom:after {
    content: '';
    height: 1.5rem;
    display: inline-block;
    position: absolute;
    top: calc(100% - 38px);
    right: 0;
    width: 40px;
    height: 2px;
    z-index: 1;
    background-color: #6ad300;
    transform: rotate(45deg);
    transform-origin: bottom right;
    margin: 0 65px;
}

@media (max-width: 768px) {
    /* draw green line */
    .hero-bottom:before {
        margin: 0 30px;
    }

    .hero-bottom:after {
        margin: 0 30px;
    }
}
</style>