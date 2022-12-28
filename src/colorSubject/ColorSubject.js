import { ref } from "vue";

export let mathSubject = ref(false);
export let historySubject = ref(false);
export let chemistrySubject = ref(false);

export const changeColorSubject = subject => {
	if (subject === "Math")
		return (
			(mathSubject = true),
			(historySubject = false),
			(chemistrySubject = false)
		);
	if (subject === "History")
		return (
			(historySubject = true),
			(chemistrySubject = false),
			(mathSubject = false)
		);
	if (subject === "Chemistry")
		return (
			(chemistrySubject = true),
			(historySubject = false),
			(mathSubject = false)
		);
};
