<template>
	<div>
		<router-view></router-view>
	</div>
</template>

<script>
	import { mapGetters }					from "vuex";
	export default {
	}
</script>

<style lang="css">

	body {
		margin: 0;
		padding: 0;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		font-family: 'Titillium Web', sans-serif;
		color: #8c829b;
		background: #ffffff;
		font-size: 18px;
	}

	h1, h2, h3, h4, h5, h6, p, ul, li {
		margin: 0;
		padding: 0;
		font-weight: normal;
		margin-bottom: 16px;
	}

	h2 {
		width: 100%;
		padding-bottom: 4px;
		margin-bottom: 8px;
		border-bottom: 1px solid rgba(0,0,0,0.1);
	}

	a {
		color: #9d7660;
		text-decoration: none;
	}

	a:hover{
		color: #82718e;
	}

	.main-body {
		padding: 32px;
	}

	.margin-top {
		margin-top: 16px;
	}



</style>
