<template>
	<section class="main-hero">
		<div class="main-hero__inner">
			<!-- <img src="../assets/images/hero.png" /> -->
			<h1></h1>
			<p></p>
			<!-- <action-btn>get started</action-btn> -->
		</div>
	</section>
</template>

<script>
	import actionBtn from './action-btn.vue';
	export default {
		name: 'app-hero',
		components: {
			actionBtn,
		},
	};
</script>
