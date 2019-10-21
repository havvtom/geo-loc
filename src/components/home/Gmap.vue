<template>
	<div class="map">
		<div class="google-map" id="map">
			
		</div>
	</div>
</template>
<script type="text/javascript">
	import firebase from "firebase"
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
			}
		},
		mounted(){

			if (navigator.geolocation) {
				
    			navigator.geolocation.getCurrentPosition( position => {
      			
      		this.lat = position.coords.latitude
      		this.lng = position.coords.longitude
      		this.renderMap();
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