<template>
  <div class="navbar">
    <nav class="deep-purple darken-1">
      <div class="container">
        <a><router-link to="/">Geo-Loc</router-link></a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><router-link to="/signup">SignUp</router-link></li>
          <li><router-link to="/login">Login</router-link></li>
          <li><a @click="signout">Sign Out</a></li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script type="text/javascript">
  import firebase from 'firebase';
  export default{
    name: "Navbar",
    data(){
      return {

      }
    },
    methods: {
      signout(){
        firebase.auth().signOut().then(()=>{
          this.$router.push({ name: 'Login'})
        })
      }
    }
  }
</script>

<style>

</style>