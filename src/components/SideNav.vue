<template>
	<nav>
		<h3>Work categories</h3>
		<ul>
			<li class="active"><a href="#"><img src="../assets/img/icons/public-services.png"></a></li>
			<li><a href="#"><img src="../assets/img/icons/product-service-systems.png"></a></li>
			<li><a href="#"><img src="../assets/img/icons/designing-the-future.png"></a></li>
			<li><a href="#"><img src="../assets/img/icons/tools-methods.png"></a></li>
		</ul>
	</nav>
</template>

<script>
	export default {
		name: 'side-nav',
		data () {
			return {
				msg: "dit is een test"
			};
		}
	}
</script>

<style scoped>
	nav{
		position: fixed;
		left: 50%;
		margin-left: -600px;
		top: 100px;
	}

	nav ul{
		list-style-type: none;
		margin:0;
		padding:0;
	}


	nav h3{
		transform: rotate(90deg) translate(0, -6.5px);
		transform-origin: bottom left;
		margin: 0 0 200px 0;
		text-transform: uppercase;
		font-size: 14px;
		position: relative;
	}

	nav ul li a{
		display: block;
		padding: 0px 5px;
		width: 10px;
		height: 80px;
		position: relative;
	}


	/*stripes*/

	nav::before{
		content: "";
		display: block;
		height: 50px;
		position: absolute;
		left: 14px;
		top: 150px;
		border: 0.5px solid black;
		z-index: -1;
	}

	nav ul li a::after{
		content: "";
		display: block;
		height: 100%;
		position: absolute;
		left: 14px;
		top: 0;
		border: 0.5px solid black;
		z-index: -1;
	}

	/* fades */

	nav ul::before{
		content: "";
		display: block;
		height: 50px;
		position: absolute;
		left: 11px;
		top: 150px;
		width: 5px;
		z-index: 1;
		background: -moz-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(255,255,255,0.01) 100%);
		background: -webkit-linear-gradient(top, rgba(255,255,255,1) 0%,rgba(255,255,255,0.01) 100%);
		background: linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,0.01) 100%);
		filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#03ffffff',GradientType=0 );
	}

	nav ul::after{
		content: "";
		display: block;
		height: 50px;
		position: absolute;
		left: 11px;
		bottom: -1px;
		width: 5px;
		z-index: 1;
		background: -moz-linear-gradient(top, rgba(255,255,255,0.01) 0%, rgba(255,255,255,1) 100%);
		background: -webkit-linear-gradient(top, rgba(255,255,255,0.01) 0%,rgba(255,255,255,1) 100%);
		background: linear-gradient(to bottom, rgba(255,255,255,0.01) 0%,rgba(255,255,255,1) 100%);
		filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#03ffffff', endColorstr='#ffffff',GradientType=0 );
	}


	nav ul li.active a{
	}

	nav ul li a img{
		width: 20px;
		height: auto;
		outline: 10px solid white;
		background-color: #fff;
		border-radius: 10px
	}
</style>