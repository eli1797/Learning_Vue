<template>
  <div class="garden">
    <section class="hero is-medium is-info">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Garden</h1>
          <h2 class="subtitle">
            Welcome. Expect the number of links to grow.
          </h2>

          <div class="content">
            <p>
              Links to things I find exciting, odd, or valuable.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">Software/Tools</p>
              <!-- <p class="subtitle">Subtitle</p> -->
              <div class="content">
                <p><a href="https://justgetflux.com/" target="_blank">Flux</a> A blue light blocker for Windows</p>
                <p><a href="https://roamresearch.com/" target="_blank">Roam Research</a> Associative notetaking</p>
                <p><a href="https://www.figma.com/" target="_blank">Figma</a> A design tool</p>
                <p><a href="https://undraw.co/" target="_blank">unDraw</a> Open Source Illustrations</p>
              </div>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">Videos</p>
              <div class="content">
                <p><a href="https://www.youtube.com/watch?v=3OoVWXiBVWo" target="_blank">Canada v. USA 2018 Nations League</a> featuring the best volleyball viewing angle</p>
                <p><a href="https://youtu.be/FlTybZvds0U" target="_blank">Dr. Richard Hamming on Creativity</a> from an exceptional lecture series</p>
                <p><a href="https://youtu.be/HUFj2r755NE" target="_blank">2012 Gold Medal Match</a> amazing volleyball</p>
              </div>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">Books</p>
              <div class="content">
                <p><a href="https://www.amazon.com/War-Art-Through-Creative-Battles/dp/0446691437" target="_blank">The War of Art</a> by Steven Pressfield</p>
                <p><a href="https://en.wikipedia.org/wiki/Metaphors_We_Live_By" target="_blank">Metaphors We Live By</a> by George Lakoff and Mark Johnson</p>
                <p><a href="https://en.wikipedia.org/wiki/The_Dispossessed" target="_blank">The Dispossessed</a> by Ursula K. Le Guin</p>
              </div>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">Assorted</p>
              <div class="content">
                <a href="https://en.wikipedia.org/wiki/Special:Random" target="_blank">A Random Wikipedia Page</a>
                <br>
                <a href="https://www.gutenberg.org/" target="_blank">Project Gutenberg</a>
                <br>
                <a href="https://en.wikipedia.org/wiki/Special:Random" target="_blank">Italian Music for Coding or Cooking</a>
                <br>
                <a href="https://www.youtube.com/channel/UCd2-Mxx5pQP5qQYx97FApbQ" target="_blank">Some Volleyball Videos</a>
              </div>
            </article>
          </div>

        </div>
        <!-- <div class="tile is-ancestor">
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">One</p>
              <p class="subtitle">Subtitle</p>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">Two</p>
              <p class="subtitle">Subtitle</p>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">Three</p>
              <p class="subtitle">Subtitle</p>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">Four</p>
              <p class="subtitle">Subtitle</p>
            </article>
          </div>
        </div> -->
      </div>
    </section>

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
}
</script>
