<template>
  <div>
    <nav>
      <div>
        <ul>
          <li>
            <router-link to="/" active-class="active-link">Home</router-link>
          </li>
        </ul>
        <ul>
          <li>
            <router-link to="/app" active-class="active-link">Application</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Main Content Area -->
    <main>
      <div class="container">
        <slot />
      </div>

    </main>
  </div>
</template>


<style scoped>
/* Minimal styling for the layout */
nav {
  width: 150px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  background: #4fdcab;
  border-right: 1px solid #ccc;
  padding: 2rem;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 1rem 0;
}

li {
  margin-bottom: 0.5rem;
}

a {
  text-decoration: none;
  color: #333;

}
.container {
  margin-left: calc(150px + 4rem);
  padding: 1rem;
  height: 100vh;
  background-color: aqua;
}
</style>
