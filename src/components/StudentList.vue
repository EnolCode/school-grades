<script setup>
	const props = defineProps({
		students: Array,
	});
const convertCalificationInGrades = (num)=>{
	if(num <=3) return "Muy deficiente";
	if(num <5) return "Insuficiente";
	if(num <=6) return "suficiente";
	if(num <=8) return "Notable";
	if(num <=10) return "Sobresaliente";
}
</script>
<template>
	<div class="container">
		<table class="container__table">
			<thead>
				<tr class="container__titles">
					<th class="container__keys">Name</th>
					<th class="container__keys">subject</th>
					<th class="container__keys">Calification</th>
				</tr>
			</thead>
			<tbody class="container__students">
				<tr v-for="student  in students">
					<td class="container__value">{{ student[0] }}</td>
					<td class="container__value">{{ student[1]}}</td>
					<td class="container__value">{{ convertCalificationInGrades(student[2])}}</td>
				</tr>
			</tbody>
		</table>
	</div>

</template>

<style lang="scss">
	@use "@/assets/scss/_colors.scss" as c;

	.container {
		margin-top: 1em;
		border: 1px solid map-get(c.$colors, "blue-electric");
		border-radius: 5px;

		&__table {
			width: 100%;
		}
		&__titles {
			background: map-get(c.$colors, "dark-blue");
		}

		&__keys {
			color: map-get(c.$colors, "white");
			padding: 1em;
			font-weight: 700;
			text-transform: uppercase;
		}

		&__value {
			text-align: center;
			padding: 1em 0;
			color:black;
		}

		&__students {
			tr {
				border-bottom: 1px solid map-get(c.$colors, "blue-electric");
			}

			tr:last-child {
				border: none;
			}
			tr:hover {
				background: map-get(c.$colors, "blue-electric");
			}
		}
	}

</style>
