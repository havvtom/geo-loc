<template>
	<div class="login container">
		<form class="card-panel" @submit.prevent="login">
			<h2 class="center deep-purple-text">Login</h2>
			<div class="row">
		        <div class="input-field col s12">
		          <input  type="email" id="email" v-model="email">
		          <label for="email">Email</label>
	        	</div>
	      	</div>
	        <div class="row">
	          <div class="input-field col s12">
	            <input id="password" type="password" v-model="password">
	            <label for="password">Password</label>
	          </div>
	        </div>
	         <p class="center red-text" v-if="feedback">{{feedback}}</p>
	        <div class="center">
	        <button class="btn deep-purple" type="submit">Login
			    <i class="material-icons right">send</i>
			</button>
			</div>
		</form>
		
	</div>
</template>
<script type="text/javascript">
	import firebase from 'firebase';
	export default{
		data(){
			return {
				password: "",
				email: '',
				feedback: ''
			}
		},
		methods: {
			login(){
				if(this.email && this.password){
					firebase.auth().signInWithEmailAndPassword(this.email, this.password)
					.then(cred=>{
						this.$router.push({name: 'home'});
					})
					.catch(err=>{
						this.feedback = err.message
					})
				}else{
					this.feedback = "You need to enter all the fields"
				}
			}
		}
	}
</script>
<style>
	.login{
		max-width: 400px;
		margin-top: 50px;
	}
</style>