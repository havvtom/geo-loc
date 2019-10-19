<template>
	<div class="container signup">
		<form class="card-panel" @submit.prevent="signUp">
			<h2 class="center deep-purple-text">Sign Up</h2>
			<div class="row">
		        <div class="input-field col s12">
		          <input  type="email" id="email">
		          <label for="email">Email</label>
	        	</div>
	      	</div>
	        <div class="row">
	          <div class="input-field col s12">
	            <input id="password" type="password">
	            <label for="password">Password</label>
	          </div>
	        </div>
	        <div class="row">
	          <div class="input-field col s12">
	            <input id="alias" type="text" class="validate">
	            <label for="alias">Alias</label>
	          </div>
	        </div>
	        <div class="center">
	        <button class="btn deep-purple" type="submit">Submit
			    <i class="material-icons right">send</i>
			</button>
			</div>
		</form>
		
	</div>
</template>
<script type="text/javascript">
	export default{
		name: "Signup",
			data(){
				return {

			}
		},
		methods:{
			signUp(){
				console.log('submitted')
			}
		}
	}
</script>
<style>
	.signup{
		max-width: 400px;
		margin-top: 50px;
	}
</style>