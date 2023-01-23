<template>
	<div class="item-preview">
		<h3>{{ item.name }}</h3>
		<p>{{ item.description }}</p>
		<p>{{ item.price }}</p>
		<pre>{{ item.times }}</pre>
	</div>
</template>

<script>
export default {
	name: 'item-preview',
	props: {
		item: Object,
	},
}
</script>

<style>
.item-preview {
	width: 200px;
	height: 300px;
	margin: 15px;
background-color: antiquewhite;
}
</style>