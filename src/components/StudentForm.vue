<script setup>
	import { reactive, computed, ref } from "vue";
	import StudentTemplate from "@/students/studentTemplate";
	import { useVuelidate } from "@vuelidate/core";
	import {
		required,
		minLength,
		maxLength,
		helpers,
		minValue,
		maxValue,
	} from "@vuelidate/validators";

	const student = reactive({
		name: "",
		subject: "Select your option",
		score: "",
	});

	const chooseSubject = value => {
		return !value.includes("Select your option");
	};

	const rules = computed(() => {
		return {
			name: {
				required,
				minLength: minLength(3),
				maxLength: maxLength(18),
				$lazy: true,
			},
			subject: {
				chooseSubject: helpers.withMessage(
					"Please, choose a subject",
					chooseSubject
				),
			},
			score: {
				required,
				minValue: minValue(1),
				maxValue: maxValue(10),
			},
		};
	});

	const v$ = useVuelidate(rules, student);

	let studentList = [];

	const emit = defineEmits(["sendData"]);

	const clearValueInputs = () => {
		student.name = "",
		student.subject = "Select your option",  //Se los quise pasar por parametros pero no me respondia (?)
		student.score = "",
		v$.value.$reset();
	};

	const sendData = async () => {
		const result = await v$.value.$validate();
		if (!result) {
			return;
		}

		const studentUpdated = new StudentTemplate(
			student.name,
			student.subject,
			student.score
			);
						
		studentList.push(studentUpdated);
		emit("sendData", studentList);

		clearValueInputs();
	};
</script>

<template>
	<form
		class="form"
		@submit.prevent="sendData"
	>
		<input
			type="text"
			name="student"
			id="student"
			placeholder="Enter a student's name to check their grade"
			class="form__input form__input-name"
			v-model="student.name"
		/>
		<span
			v-for="error in v$.name.$errors"
			:key="error.$uid"
			class="error-red"
		>
			{{ error.$message }}
		</span>

		<select
			v-model="student.subject"
			class="form__select form__select-title"
			name="subject"
			id="subject"


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
			<option class="option">Music</option>
			<option class="option">Physical Education</option>
		</select>
		<span
			v-for="error in v$.subject.$errors"
			:key="error.$uid"
			class="error-red"
		>
			{{ error.$message }}
		</span>
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
		<span
			v-for="error in v$.score.$errors"
			:key="error.$uid"
			class="error-red"
		>
			{{ error.$message }}
		</span>
		<button
			class="form__button"
			type="submit"
		>
			See score
		</button>
	</form>
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
				background: map-get(c.$colors, "grey");
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

		.error-red {
			color: red;
		}
	}
</style>
