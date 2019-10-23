<template>
  <div class="navbar">
    <nav class="deep-purple darken-1">
      <div class="container">
        <a><router-link to="/">Geo-Loc</router-link></a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li v-if="!user"><router-link to="/signup">SignUp</router-link></li>
          <li v-if="!user"><router-link to="/login">Login</router-link></li>
          <li v-if="user"><a>{{user.email}}</a></li>
          <li v-if="user"><a @click="signout">Sign Out</a></li>
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
        user: ''
      }
    },
    methods: {
      signout(){
        firebase.auth().signOut().then(()=>{
          this.$router.push({ name: 'Login'})
        })
      }
    },
    created(){
      firebase.auth().onAuthStateChanged((user)=>{
        if(user){
          this.user = user
        }else{
          this.user = ''
        }
      })
    }
  }
</script>

<style>

</style>