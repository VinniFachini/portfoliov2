
<script>
export default {
  methods: {
    goToContact() {
        window.scrollTo(0, (window.innerHeight / 2) * 8);
        const scrollState = useScrollState()
        scrollState.setState(5)
    },
  },
};
</script>

<template>
  <header>
    <div class="container">
      <NuxtLink to="/">
        <baseLogo />
      </NuxtLink>
      <div class="lang-and-contact">
        <baseLanguages />
        <baseButton @click="goToContact()" text="contact" />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  padding-block: 32px;
  @media screen and (max-width: 768px) {
    padding-inline: 32px;
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .lang-and-contact {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 16px;
      button {
        font-size: 24px;
        padding: 8px 16px;
        border-radius: 5px;
        border: 2px solid white;
        text-transform: capitalize;
        background: transparent;
        color: white;
        cursor: pointer;
        transition: all 0.2s linear;
        &:hover {
          background-color: white;
          color: #1b2631;
        }
      }
    }
  }
}
</style>