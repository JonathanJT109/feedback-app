<script lang="ts">
	import { firebaseConfig } from './firebaseConfig';
	import { initializeApp } from 'firebase/app';
	import { getFirestore, doc, setDoc } from 'firebase/firestore/lite';

	const app = initializeApp(firebaseConfig);
	const db = getFirestore(app);

	let name = '';
	let email = '';
	let studentID = '';
	let course = '';
	let section = '';
	let tutor = '';
	let professor = '';
	let message = '';

	async function handleSubmit() {
		try {
			const formData = {
				name,
				email,
				studentID,
				course,
				section,
				tutor,
				professor,
				message
			};

			// Save the form data to Firebase Firestore
			await setDoc(doc(db, 'contacts', email), formData);

			// Reset the form
			name = '';
			email = '';
			studentID = '';
			course = '';
			section = '';
			tutor = '';
			professor = '';
			message = '';

			console.log('Form data saved successfully!');
		} catch (error) {
			console.error('Error saving form data:', error);
		}
	}
</script>

<form on:submit|preventDefault={handleSubmit}>
	<label>
		Name:
		<input type="text" bind:value={name} required />
	</label>
	<br />

	<label>
		Email:
		<input type="email" bind:value={email} required />
	</label>
	<br />

	<label>
		Student ID:
		<input type="text" bind:value={studentID} required />
	</label>
	<br />

	<label>
		Math Course:
		<input type="text" bind:value={course} required />
	</label>
	<br />

	<label>
		Section:
		<input type="text" bind:value={section} />
	</label>
	<br />

	<label>
		Tutor:
		<input type="text" bind:value={tutor} />
	</label>
	<br />

	<label>
		Professor:
		<input type="text" bind:value={professor} />
	</label>
	<br />

	<label>
		Message:
		<textarea bind:value={message} />
	</label>
	<br />

	<button type="submit">Submit</button>
</form>
