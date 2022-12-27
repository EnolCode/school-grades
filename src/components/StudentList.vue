<script setup>
	import { convertCalificationInGrades } from "@/grades/grades.js";
	const props = defineProps({
		students: Array,
	});
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
				<tr v-for="{ name, subject, calification } in students">
					<td class="container__value">{{ name }}</td>
					<td class="container__value">{{ subject }}</td>
					<td class="container__value">
						{{ convertCalificationInGrades(calification) }}
					</td>
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
			color: black;
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
