<template>
  <div class="home container">
    <!-- Title and blog intro section -->
    <section class="section">
      <div class="container">
        <h1 class="title">Hello There</h1>
        <p class="subtitle">
          {{ this.randomPhrases[Math.floor(Math.random() * this.randomPhrases.length)] }}
        </p>
        <article class="message is-dark">
          <div class="message-body">
            Welcome to my blog. I write data-driven, opinionated reflections on volleyball, learning, and technology.
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
              <router-link class="tile is-child notification is-primary" to="/blog">
                <p class="title">Blog</p>
                <p class="subtitle">Jump to newest post</p>
              </router-link>
              <a class="tile is-child notification is-warning" href="https://en.wikipedia.org/wiki/Special:Random">
                <p class="title">Random</p>
                <p class="subtitle">Go somewhere on Wikipedia</p>
              </a>
            </div>
            <div class="tile is-parent">
              <router-link class="tile is-child notification is-info" to="/garden">
                <p class="title">Garden</p>
                <p class="subtitle">A library of links</p>
                <figure class="image is-3by1 is-hidden-mobile">
                  <img src="../assets/undraw_Gardening.svg">
                </figure>
              </router-link>
            </div>
          </div>
          <div class="tile is-parent">
            <router-link class="tile is-child notification is-danger" to="/about">
              <p class="title">About</p>
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
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <FooterBar></FooterBar>
  </div>
</template>

<script>
// @ is an alias to /src
import FooterBar from '@/components/FooterBar.vue'

export default {
  name: 'Home',
  components: {
    FooterBar
  },
  data () {
    return {
      // Ideas to add: "Proceed with caution", "" 
      randomPhrases: ["Tall people only", "General Kenobi", "Motor learning nerds", "You are here", "Proceed with caution"]
    }
  },
}
</script>
