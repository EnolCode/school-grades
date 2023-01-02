<script setup>
	import { getCurrentInstance, ref, readonly } from "vue";
	import { RouterLink, RouterView } from "vue-router";
	import StudentForm from "./components/StudentForm.vue";
	import StudentList from "./components/StudentList.vue";

	let studentList = readonly([]);
	let componentListKey = ref(0);
	const instance = getCurrentInstance();

	function retrieveData(data) {
		studentList = data;
		forceRerenderList();
		instance.proxy.$forceUpdate();
	}

	function forceRerenderList() {
		componentListKey += 1;
	}
</script>

<template>
	<StudentForm @send-data="retrieveData" />
	<StudentList
		:key="componentListKey"
		:students="studentList"
		
	/>
</template>

<style scoped>
	body {
		/* background: url("https://img.freepik.com/vector-gratis/fondo-regreso-escuela-espacio-vacio_23-2148609200.jpg?w=2000")  */
		width: 100vh;
		height: 100vh;
		/* text-align: center; */
	}
</style>
