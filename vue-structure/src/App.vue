<template>
	<main>
		<header-bar></header-bar>
		<main-view class="frame">
			<contacts-detail class="col-3"/>
			<contacts-list class="col-1"/>
		</main-view>
		<footer-bar></footer-bar>
	</main>
</template>

<script>

	import Header from "./components/Header.vue";
	import Main from "./components/Main.vue";
	import ContactsDetail from "./components/ContactsDetail.vue";
	import ContactsList from "./components/ContactsList.vue";
	import Footer from "./components/Footer.vue";

	export default {
		name: "app",
		components: {
			"header-bar": Header,
			"main-view": Main,
			"contacts-detail": ContactsDetail,
			"contacts-list": ContactsList,
			"footer-bar": Footer
		}
	}

</script>

<style>
	html {
		margin: 0;
		padding: 0;
	}

	body {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
		margin: 0;
		padding: 0;
	}

	h1, h2, h3, h4, h5, h6, p, ul, li {
		margin: 0;
		padding: 0;
	}

	a {
		color: #42b983;
	}

	.frame {
		float: left;
		width: 100%;
	}
	.col-4 {
		float: left;
		width: 100%;
	}
	.col-3 {
		float: left;
		width: 75%;
	}
	.col-2 {
		float: left;
		width: 50%;
	}
	.col-1 {
		float: left;
		width: 25%;
	}


</style>
