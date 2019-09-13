<template>  
  <div>
    <ul>
      <li v-for="link in links" :key="link.route" link :to="link.route" exact="true">
        <router-link :to="link.route">{{link.text}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        drawer: false,
        links: [
          { 
            icon: "mdi-home", 
            text: "Home", 
            route: "/" 
          },
          {
            icon: "mdi-information",
            text: "About",
            route: "/about"
          }
        ]
      };
    }
  };
</script>

<style scoped>
</style>
