<template>
  <div>
    <NuxtPage />
  </div>
</template>

<style>
.carousel__pagination-button::after {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #7A8998;
  transition: all .2s linear;
}

.carousel__pagination-button--active::after {
  background-color: #41B883;
}

.carousel__pagination-button--active:hover::after {
  background-color: #41B883 !important;
  box-shadow: none !important;
}

.carousel__pagination-button:hover::after {
  box-shadow: inset 0 0 0 3px #41B883;
  background-color: #7A8998;
}

</style>