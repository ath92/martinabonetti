<template>
	<div class="portfolio-item" >
		<a href="#">
			<h2 :style="h1Style">01</h2>
			<h1 :style="h1Style" ref="title">Public services</h1>
			<img :style="imageStyle" class="main-image" src="../assets/img/portfolio-big.png" alt="big image">
		</a>

		<div :style="relatedStyle" class="related-projects" >
			<h3>Related projects</h3>
			<a href="#">
				<img src="../assets/img/portfolio-small-1.png" alt="small image">
			</a>
			<a href="#">
				<img src="../assets/img/portfolio-small-2.png" alt="small image">
			</a>
		</div>
	</div>
</template>

<script>

	/*
	Individual portfolio items, to be shown in the Index component.
	Should reference an object that contains a portfolio item:
	title, big image, icon for in the left bar, (number?), references to related projects (other objects? not sure how to do this)

	How we can dynamically update styles:
	bind style with :style="object"
	-> object can be computed value
	*/
	import { mapState } from 'vuex'
	export default {
		name: 'portfolio-item',
		data () {
			return {
				msg: "dit is een test",
				scrollingAnimationCallback: function(scrollPos){

				}
			};
		},
		computed: mapState({
			scrollPos: state => state.scrollPos,
			relativePosition(state){
				 var relPos = (state.scrollPos-this.offsetTop) / window.innerHeight;
				 return relPos;
			},
			h1Style(state){
				if(this.relativePosition < -1 || this.relativePosition > 1) return null;
				return {transform: `translateX(${-this.relativePosition * 100}vw)`}
			},
			relatedStyle(state){
				if(this.relativePosition < -1 || this.relativePosition > 1) return null;
				return {transform: `translateX(${-this.relativePosition * 50}vw)`, opacity: `${((this.relativePosition*4)+0.8)}`}
			},
			imageStyle(state){
				if(this.relativePosition < -1 || this.relativePosition > 1) return null;
				return {transform: `translateY(${-this.relativePosition * 20}vh) rotateZ(${this.relativePosition * 30}deg)`}
			}

		}),
		updated() {
			this.offsetTop = this.$el.offsetTop;
			//set scroll snapping points.
		}
	}


</script>

<style scoped>
	.portfolio-item{
		position: relative;
		height: 100vh;
		width: 1000px;
		margin: auto;
	}

	.portfolio-item h2, .portfolio-item h1{
		position: absolute;
		font-size: 3.6em;
		bottom: 65%;
		z-index: 3;
		max-width: 60%;
	}

	.portfolio-item h1{
		position: absolute;
		bottom: 57%;
	}

	.portfolio-item h2{
		text-stroke: 3px #444;
		-webkit-text-stroke: 2px #444;
		color: transparent;
	}

	.portfolio-item .main-image{
		position: absolute;
		right: 0;
		bottom: 20%;
		width: 48%;
		height: auto;
		overflow: visible;
		z-index: 2;
	}

	.portfolio-item::before{
		content: " ";
		display: block;
		position: absolute;
		top: 90px;
		right: -60px;
		width: 120px;
		height: 120px;
		border-right: 5.5px solid #E3897D;
		border-top: 4px solid #E3897D;
	}

	.portfolio-item .related-projects{
		position: absolute;
		left: 0;
		bottom: 20%;
		width: 48%;
		font-size: 0;
		z-index: 1;
	}

	.portfolio-item .related-projects img{
		width: 30%;
		height: auto;
		float: right;
		margin-left: 8%;
	}

	.portfolio-item .related-projects h3{
		font-size: 26px;
		font-weight: lighter;
		display: inline-block;
		width: 70px;
		margin: 0;
	}

	/* animation */

	.portfolio-item.before{
		transform: translate(-1000px);
		opacity: .5;
	}

	.portfolio-item.active{
	}

	.portfolio-item.after{
		transform: translate(1000px);
		opacity: .5;
	}

</style>