<template>
  <div class="home">
<!--     <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- Title and blog intro section -->
    <section class="section">
      <div class="container">
        <h1 class="title">Hello There</h1>
        <p class="subtitle">
          Practice your (volleyball) reading skills!
        </p>
        <article class="message is-dark">
          <div class="message-body">
            Welcome to my blog. 
          </div>
        </article>
      </div>
    </section>

    <!-- Tile section -->
    <section class="section">
      <div class="tile is-ancestor">
        <div class="tile is-vertical is-8">
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <a class="tile is-child notification is-primary" href="https://twitter.com/home">
                <p class="title">Most recent post</p>
                <p class="subtitle">Post title</p>
              </a>
              <article class="tile is-child notification is-warning">
                <p class="title">Contact me</p>
                <p class="subtitle">Bottom tile</p>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child notification is-info">
                <p class="title">Animated Game Library</p>
                <p class="subtitle">With an image</p>
                <figure class="image is-4by3">
                  <img src="https://bulma.io/images/placeholders/640x480.png">
                </figure>
              </article>
            </div>
          </div>
          <div class="tile is-parent">
            <router-link class="tile is-child notification is-danger" to="/about">
              <p class="title">About me</p>
              <p class="subtitle">I'm a software engineer by day, but at night...</p>
            </router-link>
          </div>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification is-success">
            <div class="content">
              <p class="title">Favorites</p>
              <div class="content">
                <p class="menu-label"><a class="no-underline" href="/">Built-in Contact Form</a></p>
                <hr>
                <p class="menu-label has-text-light">Password Protect Pages</p>
                <hr>
                <p class="menu-label">Custom Spotlight Button</p>
                <hr>
                <p class="menu-label has-text-light">Sell products via Gumroad and Stripe</p>
                <hr>
                <p class="menu-label">Embed Any Twitter Timelines</p>
                <hr>
                <p class="menu-label has-text-light">Embed any Instagram Galleries</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  }
}
</script>
