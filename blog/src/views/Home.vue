<template>
  <div class="home">
<!--     <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- Title and blog intro section -->
    <section class="section">
      <div class="container">
        <h1 class="title">Hello There</h1>
        <p class="subtitle">
          I've been expecting you...
        </p>
        <article class="message is-dark">
          <div class="message-body">
            Welcome to my blog. I've always been a little slow to things, so here I am about 25yrs after the first big blogs. Whatever. There's stuff for you read to about sports (mostly volleyball), technology, and learning.
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
                <p class="title">Recent</p>
                <p class="subtitle">Post title</p>
              </a>
              <article class="tile is-child notification is-warning">
                <p class="title">Contact</p>
                <div class="level">
                  <div class="level-item has-text-centered">
                    <div>
                      <a style="text-decoration: none;" href="https://twitter.com/EliBailey19">
                        <span class="icon">
                          <i class="fab fa-twitter mr-1"></i>
                          Twitter
                        </span>
                      </a>
                    </div>
                  </div>
                  <div class="level-item has-text-centered">
                    <div>
                      <a style="text-decoration: none;" href="mailTo:elibailey97@protonmail.com">
                        <span class="icon">
                          <i class="fas fa-envelope mr-1"></i>
                          Email
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child notification is-info">
                <p class="title">Library</p>
                <p class="subtitle">With an image</p>
                <figure class="image is-4by3">
                  <img src="https://bulma.io/images/placeholders/640x480.png">
                </figure>
              </article>
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
                <hr>
                <p class="menu-label has-text-light">Embed any Instagram Galleries</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- All posts section -->
    <!-- @Todo -->
    <section class="section">
      <h1 class="title">All Posts</h1>

      <!-- Top post -->
      <article class="message">
        <div class="message-header">
          <p>Hello World</p>
        </div>
        <div class="message-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
        </div>
      </article>

      <!-- <blog-post></blog-post> -->

      <!-- Second post -->
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
