<template>
	<div>

		<div id="header">
			<h1>Martina Bonetti</h1>
			<a class="right-link" href="#">About</a>
		</div>

		<router-view></router-view>

		<div id="footer">
			<a class="right-link" href="#">Download CV</a>
			<a class="left-link" href="#">Get in touch</a>
		</div>
	</div>
</template>

<script>
	import {mapState} from 'vuex';
	import {store} from '../store'
	import VueScrollTo from 'vue-scrollto'

	var requestedFrame = false;
	var timer;
	export default {
		name: 'app',
		data () {
			return {
				msg: "dit is een test"
			};
		},
		mounted (){
			window.addEventListener('scroll', function(e){
				clearTimeout(timer);
				timer=setTimeout(function(){
					let smallest = 9999;
					let closest = 0;
					for(var i = 0; i < store.state.scrollSnapping.elements.length; i++){
						console.log(store.state.scrollPos);
						let distance = Math.abs(store.state.scrollPos - store.state.scrollSnapping.elements[i].offsetTop);
						if(distance < smallest){
							smallest = distance;
							closest = i;
						}
					};
					if(smallest < store.state.scrollSnapping.tolerance) VueScrollTo.scrollTo('.portfolio-item:nth-child('+(closest+1)+')', 300, { easing: 'ease' } );
				}, 100);
				if(!requestedFrame){
					requestedFrame = true;
					window.requestAnimationFrame(function(){
						store.commit('scrollPos');
						requestedFrame = false;
					});
				}
			})
		}
	}
</script>

<style scoped>
	#header{
		width: 1000px;
		margin: auto;
		height: 100px;
		position: fixed;
		top: 0;
		left: 50%;
		margin-left: -500px;
		z-index: 2;
	}

	#header h1{
		display: inline-block;
		margin: 20px auto;
	}

	#header a{
		margin-top: 30px;
	}

	.right-link, .left-link{
		display: block;
		text-transform: uppercase;
		font-weight: bold;
	}

	.right-link{
		float: right;
	}

	#footer{
		position: fixed;
		bottom: 0;
		width: 1000px;
		left: 50%;
		margin-left: -500px;
		padding-bottom: 30px;
	}
</style>

<style>
	@font-face {
	  font-family: 'SimpleKölnBonn';
	  src: url('../assets/fonts/SimKBBd_.ttf') format('truetype'); /* IE9 Compat Modes */
	  font-weight: bold;
	  font-style: normal;
	}

	@font-face {
	  font-family: 'SimpleKölnBonn';
	  src: url('../assets/fonts/SimKBBIt.ttf') format('truetype'); 
	  font-weight: bold;
	  font-style: italic;
	}

	@font-face {
	  font-family: 'SimpleKölnBonn';
	  src: url('../assets/fonts/SimKBRg_.ttf') format('truetype'); 
	  font-weight: normal;
	  font-style: normal;
	}


	@font-face {
	  font-family: 'SimpleKölnBonn';
	  src: url('../assets/fonts/SimKBIt_.ttf') format('truetype'); 
	  font-weight: normal;
	  font-style: italic;
	}

	html,body{
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
	}

	body::after{
		content: "";
		display: block;
		position: fixed;
		width: calc(100% - 20px);
		height: calc(100% - 20px);
		top: 10px;
		left: 10px;
		outline: 3px solid #444;
	}


	*{
		font-family: 'SimpleKölnBonn', Helvetica, Arial, sans-serif;
		box-sizing: border-box;
		color: #444;
		transition: transform .033s linear; /* .033 is 1/30 of a second, which appears to work nicely to smoothen things out). */
	}

	#intro-page{
		width: 100vw;
		height: 100vh;
		text-align: center;
		padding-top: 100px;
	}
</style>