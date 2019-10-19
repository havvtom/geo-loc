<template>
	<div class="map">
		<div class="google-map" id="map">
			
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		name: 'Gmap',
		data(){
			return {
				lat: -25.344,
				lng: 131.036
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
			this.renderMap();
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