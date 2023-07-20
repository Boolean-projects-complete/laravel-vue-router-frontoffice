import { reactive } from 'vue';

const url = 'http://localhost:8000/';

export const store = reactive({
	search: new URLSearchParams(window.location.search).get('category'),
	baseUrl: url,
	getImageUrl(image) {
		return image
			? url + 'storage/' + image
			: url + 'storage/default.jpg';
	},
});