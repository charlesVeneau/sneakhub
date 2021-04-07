<template>
  <div class="">
    <Header :page-name="home" />
    <div class="main-card">
      <h2 class="card-title">Sneakhub Project</h2>
      <p class="card-text">
        Here you can find my ability to create an e-commerce website using
        Nuxt.js and Rest API. You can access the github repo
        <a href="https://github.com/charlesVeneau/sneakhub">here</a>
      </p>
      <h4 class="card-subtitle">What do I used for these projet?</h4>
      <ul class="card-list">
        <li class="card-listElt">
          <a href="https://nuxtjs.org/" class="card-link"
            ><img class="card-img" src="@/static/nuxt.svg" alt=""
          /></a>
        </li>
        <li class="card-listElt">
          <a href="https://sass-lang.com/" class="card-link"
            ><img class="card-img" src="@/static/Sass-icon.svg" alt=""
          /></a>
        </li>
        <li class="card-listElt">
          <a href="https://firebase.google.com/" class="card-link"
            ><img class="card-img" src="@/static/firebase-icon.svg" alt=""
          /></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      home: 'Home',
    }
  },
}
</script>
