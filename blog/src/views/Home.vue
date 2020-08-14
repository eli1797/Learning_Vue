<template>
  <div class="home">
    <!-- Title and blog intro section -->
    <section class="section">
      <div class="container">
        <h1 class="title">Hello There</h1>
        <p class="subtitle">
          {{ this.randomPhrases[Math.floor(Math.random() * this.randomPhrases.length)] }}
        </p>
        <div class="notification">
          Welcome to my site. I write data-driven, opinionated reflections on volleyball, learning, and technology.
        </div>
      </div>
    </section>

    <!-- Tile section -->
    <section class="section">
      <div class="container">
        <div class="tile is-ancestor">
          <div class="tile is-vertical is-8">
            <div class="tile">
              <div class="tile is-parent is-vertical">
                <router-link class="tile is-child notification is-primary" to="/blog">
                  <p class="title">Blog</p>
                  <p class="subtitle">Jump to newest post</p>
                </router-link>
                <a class="tile is-child notification is-warning" href="https://en.wikipedia.org/wiki/Special:Random" target="_blank">
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
                <p class="title">Posts</p>
                <div class="content">
                  <router-link style="text-decoration: none;" :to="{ name: 'Blog', hash: '#fundamentals'}">Fundamental Skills</router-link>
                  <hr>
                  <router-link style="text-decoration: none;" :to="{ name: 'Blog', hash: '#eval'}">How good are you at volleyball?</router-link>
                  <hr>
                  <p>Hydrogen's Place (In progress)</p>
                  <hr>
                  <p>Team Cognition (In progress)</p>
                </div>
              </div>
            </article>
          </div>
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
      randomPhrases: ["How tall are you?", "General Kenobi", "Motor learning nerds", "You are here", "Proceed with caution"]
    }
  },
}
</script>
