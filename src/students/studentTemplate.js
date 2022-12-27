export default class StudentTemplate {
	#name;
	#subject;
	#calification;

	constructor(name, subject, calification) {
		this.name = name;
		this.subject = subject;
		this.calification = calification;
	}

	get name() {
		return this.#name;
	}

	set name(name) {
		this.#name = name;
	}

	get subject() {
		return this.#subject;
	}

	set subject(subject) {
		this.#subject = subject;
	}

	get qualification() {
		return this.#calification;
	}

	set qualification(calification) {
		this.#calification = calification;
	}
}
