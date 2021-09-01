import { authFetch } from './../utils/authHooks'

export default async function createUser(address, city, state, postcode, country, phone) {
	const user = { address, city, state, postcode, country, phone }
	const response = await authFetch('https://flask-shop-application-api.herokuapp.com/api/userdetails', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(user),
	})
	let responseJson = undefined
	let errorJson = undefined
	if (response.ok) {
		responseJson = await response.json()
	} else {
		if (response.status === 400) {
			errorJson = await response.json()
		}
		if (response.status === 401) {
			errorJson = await response.json()
		}
	}
	return new Promise((resolve, reject) => {
		responseJson ? resolve(responseJson) : reject(errorJson)
	})
}