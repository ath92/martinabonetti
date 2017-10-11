<template>
	<h1>{{msg}}</h1>
</template>

<script>
export default {
	name: 'test',
	data () {
		return {
			msg: "dit is een test"
		};
	}
}
</script>

<style scoped>
h1 {
	color: red
}
</style>