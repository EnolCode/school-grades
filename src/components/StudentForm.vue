<script setup>
	import { reactive } from "vue";

	const student = reactive({
		name: null,
		subject: "Select your option",
		score: null,
	});

	let studentList = [];

	const emit = defineEmits(["sendData"]);

	function sendData() {
		const studentUpdated = [
			student.name,
			student.subject,
			student.score,
		];

		studentList.push(studentUpdated);
		emit("sendData", studentList);
	}
</script>

<template>
	<div class="form">
		<input
			type="text"
			name="student"
			id="student"
			placeholder="Enter a student's name to check their grade"
			class="form__input form__input-name"
			v-model="student.name"
		/>

		<select
			v-model="student.subject"
			class="form__select form__select-title"
		>
			<option
				selected
				disabled
			>
				Select your option
			</option>
			<option class="option">History</option>
			<option class="option">Math</option>
			<option class="option">Chemistry</option>
		</select>

		<input
			type="number"
			name="score"
			id="score"
			class="form__input form__input-score"
			placeholder="Enter a student's score (1-10)"
			min="1"
			max="10"
			v-model="student.score"
		/>
		<button
			@click="sendData"
			class="form__button"
			type="submit"
		>
			See score
		</button>
	</div>
</template>

<style scoped lang="scss">
	@use "@/assets/scss/_colors.scss" as c;

	.form {
		width: 30em;
		height: 25em;
		padding: 2em;
		background: map-get(c.$colors, "dark-blue");
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		border-radius: 5px;

		&__input,
		&__select,
		&__button {
			width: 90%;
			border-radius: 5px;
			padding: 1em;
		}
		&__input,
		&__select {
			border: 2px solid map-get(c.$colors, "blue-electric");
			background: map-get(c.$colors, "dark-blue");
			color: map-get(c.$colors, "white");
			.option {
				background: map-get(c.$colors, "blue-electric");
			}
		}

		&__input,
		.option {
			color: map-get(c.$colors, "white");
		}
		&__button {
			background: map-get(c.$colors, "blue-electric");
			color: map-get(c.$colors, "white");
		}

		&__select,
		&__button {
			cursor: pointer;
		}

		.option-black {
			background: map-get(c.$colors, "very-dark-blue");
		}
		.form__select-title:checked {
			color: white;
		}
	}
</style>
