interface FetchRequest {
	url: string
	headers?: HeadersInit
	method?: string
}

export const fetchRequest = async ({
	url,
	headers = {
		'Content-Type': 'application/json;charset=utf-8'
	},
	method = 'GET'
}: FetchRequest) => {
	try {
		const request = await fetch(url, {
			headers,
			method
		})

		return request.json()
	} catch (error: any) {
		console.error(`ERROR: fetchRequest:`, error.message)
	}
}
