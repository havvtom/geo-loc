<template>
	<div class="map">
		<div class="google-map" id="map">
			
		</div>
	</div>
</template>
<script type="text/javascript">
	import firebase from "firebase"
	import db from "@/firebase/init"
	export default {
		name: 'Gmap',
		data(){
			return {
				lat: 52,
				lng: 89
			}
		},
		methods:{
			renderMap(){
				const map = new google.maps.Map(document.getElementById('map'), {
					center: {
						lat: this.lat,
						lng: this.lng
					},
					zoom: 6,
					maxZoom: 15,
					minZoom: 3,
					streetViewControl: false
				})
				db.collection('users').get().then(users=>{
				users.docs.forEach(doc=>{
					let data = doc.data()
					if(data.geolocation){
						let marker = new google.maps.Marker({
							position: {
								lat: data.geolocation.lat,
								lng: data.geolocation.lng
							},
							map
						})
						//add click 
						marker.addListener('click', ()=>{
							this.$router.push({
								name: 'ViewProfile',
								params:{ id: doc.id}
							})
						})
					}
				})
			})
			}

		},
		mounted(){
			//get current user
			let user = firebase.auth().currentUser;

			if (navigator.geolocation) {
				
    			navigator.geolocation.getCurrentPosition( position => {
      			
      		this.lat = position.coords.latitude
      		this.lng = position.coords.longitude

      		//find the user record and then update geo-coords
      		db.collection('users').where('user_id', '==', user.uid).get()
      		.then(snapshot=>{
      			snapshot.forEach((doc)=>{
      				db.collection('users').doc(doc.id).update({
      					geolocation:{
      						lat: position.coords.latitude,
      						lng: position.coords.longitude
      					}
      				})
      			})
      		})
      		.then(()=>{
      			this.renderMap();
      		})

      		
    });
  }
			
			// console.log(firebase.auth().currentUser)
		}
	}
</script>
<style>
.google-map{
	width: 100%;
	height: 100%;
	position: absolute;
	background: #fff;

}
</style>