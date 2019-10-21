<template>
  <div class="navbar">
    <nav class="deep-purple darken-1">
      <div class="container">
        <a href="#" class="brand-logo">Geo-Loc</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><router-link to="/signup">SignUp</router-link></li>
          <li><a href="">Login</a></li>
          
        </ul>
      </div>
    </nav>
  </div>
</template>
<script type="text/javascript">

  export default{
    name: "Navbar",
    data(){
      return {

      }
    }
  }
</script>

<style>

</style>