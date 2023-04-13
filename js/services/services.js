export const postData = async (url, data) => {
	const resolve = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
		},
		body: data,
	})

	return await resolve.json()
}
