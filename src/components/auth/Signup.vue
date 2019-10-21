<template>
	<div class="container signup">
		<form class="card-panel" @submit.prevent="signUp">
			<h2 class="center deep-purple-text">Sign Up</h2>
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
	        <div class="row">
	          <div class="input-field col s12">
	            <input id="alias" type="text" v-model="alias">
	            <label for="alias">Alias</label>
	          </div>
	          <p class="center red-text" v-if="feedback">{{feedback}}</p>
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
	import slugify from "slugify";
	import db from "@/firebase/init";
	export default{
		name: "Signup",
			data(){
				return {
					email: "",
					password: "",
					alias: "",
					feedback: "",
					slug: ""

			}
		},
		methods:{
			signUp(){
				if(this.alias){
					this.slug = slugify(this.alias, {
						replacement: "-",
						remove: /[$*_+~.()'"!\-:@]/g,
						lower: true
					})
					console.log(this.slug);
				}else{
					this.feedback = "You need to enter an alias"
				}
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