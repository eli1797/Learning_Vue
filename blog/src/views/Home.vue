<template>
  <div class="home">
    <!-- Title and blog intro section -->
    <section class="section">
      <div class="container">
        <h1 class="title">Hello There! Question:</h1>
        <p class="subtitle">
          {{ this.randomPhrases[Math.floor(Math.random() * this.randomPhrases.length)] }}
        </p>
      </div>
    </section>

    <!-- Tile section -->
    <section class="section">
      <div class="container">
        <div class="tile is-ancestor">
          <div class="tile is-12">
            <div class="tile">
              <div class="tile is-parent is-vertical">
                <router-link class="tile is-child notification is-success" to="/blog">
                  <p class="title">Blog</p>
                  <p class="subtitle">My writing</p>
                  <!-- An unordered list of links to ids on the bloe -->
                  <ul>
                    <li><router-link to="/blog#talk">Talk! Call the Ball!</router-link></li>
                    <li><router-link to="/blog#progress">Progress: Expectations Spark Frustrations</router-link></li>
                    <li><router-link to="/blog#fundamentals">Fundamental Skills: Awareness and Technique</router-link></li>
                    <li><router-link to="/blog#eval">How good are you at volleyball?</router-link></li>
                  </ul>
                      
                  <br>
                </router-link>
              </div>
              <div class="tile is-parent is-vertical">
                <router-link class="tile is-child notification is-danger" to="/about">
                  <p class="title">About</p>
                  <p class="subtitle">
                    {{ this.aboutPhrases[Math.floor(Math.random() * this.aboutPhrases.length)] }}
                  </p>
                  <br>
                </router-link>
                <router-link class="tile is-child notification is-warning" to="/work">
                  <p class="title">Work</p>
                  <p class="subtitle">Projects, ideas, questions, etc.</p>
                  <br>
                </router-link>
              </div>
            </div>
          </div>
          <!-- <div class="tile is-parent">
            <article class="tile is-child notification is-success">
              <div class="content">
                <p class="title">Posts</p>
                <div class="content">
                  <router-link style="text-decoration: none;" :to="{ name: 'Blog', hash: '#cognition'}">Team Cognition</router-link>
                  <hr>
                  <router-link style="text-decoration: none;" :to="{ name: 'Blog', hash: '#progress'}">Progress</router-link>
                  <hr>
                  <router-link style="text-decoration: none;" :to="{ name: 'Blog', hash: '#fundamentals'}">Fundamental Skills</router-link>
                  <hr>
                  <router-link style="text-decoration: none;" :to="{ name: 'Blog', hash: '#eval'}">How good are you at volleyball?</router-link>
                </div>
              </div>
            </article>
          </div> -->
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
      // randomPhrases: ["How tall are you?", "General Kenobi", "Motor learning nerds", "You are here", "Proceed with caution"]
      randomPhrases: ["How can we improve city life?", "How could we improve first meetings, introductions, and dates?", "When do I feel like meditating, exercising, or eating well? How can I get into that state more often?", "How could we improve drought preparedness? How can we get more freshwater?", "How can hydrogen be generated, stored, and used without emitting pollutants or GHG?", "What comes after the book? How could we store/transmit knowledge more effectively?"],
      aboutPhrases: ["Often asked to get items from high places", "I like cooking", "Volleyball, Programming, Nature"]
    }
  },
}
</script>
