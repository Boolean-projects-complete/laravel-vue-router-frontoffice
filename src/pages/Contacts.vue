<script>
import { store } from '../store';
import axios from 'axios';

export default {
	data() {
		return {
			store,
			name: '',
			email: '',
			message: '',
			showSuccess: false,
			isSending: false,
			showError: false,
		};
	},
	methods: {
		sendEmail() {
			this.isSending = true;
			this.showSuccess = false;
			this.showError = false;
			this.errors = {};
			axios
				.post(this.store.baseUrl + 'api/emails/', {
					name: this.name,
					email: this.email,
					message: this.message,
				})
				.then(response => {
					this.isSending = false;

					if (response.data.success) {
						this.showSuccess = true;
						this.resetForm();
					} else {
						this.showError = true;
						this.errors = response.data.errors;
					}
				});
		},
		resetForm() {
			this.name = '';
			this.email = '';
			this.message = '';
		},
	},
};
</script>

<template>
    <div>
        <h1>Contattaci</h1>
        <form @submit.prevent="sendEmail" novalidate>
            <label for="name">Nome</label>
            <input class="inpt" type="text" id="name" v-model="name">
            <label for="email">Email</label>
            <input class="inpt" type="email" id="email" v-model="email">
            <label for="message">Corpo del messaggio</label>
            <textarea class="inpt" name="message" id="message" cols="30" rows="10" v-model="message"></textarea>
            <button type="submit" :disabled="isSending">
                Submit
            </button>
        
        </form>
    </div>
    
</template>


<style lang="scss" scoped>
@use '../assets/styles/general.scss' as *;
    
div{
        max-width: 70%;
        margin: 0 auto;
        padding: 2rem;
        background-color: $c-bg;
        color: white;

        form {
            @include dfj;
            flex-direction: column;
            padding: 2rem;
            .inpt{
                background-color: rgba(242, 242, 242, 0);
                border: 2px solid $c-bg-txt;
                border-radius: 3px;
            }
    }
    }
</style>