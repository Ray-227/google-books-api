interface GetQueryGoogleAPI {
	q: Search
	maxResults: number
	startIndex: number
	orderBy: string
}

interface Search {
	search: string
	subject: string
}

export const getQueryGoogleAPI = (query: GetQueryGoogleAPI) =>
	Object.keys(query).reduce((accum: string, key: string) => {
		if (typeof query[key as keyof typeof query] === 'object') {
			const objectValue = query[key as keyof typeof query]

			// @ts-ignore
			const tempQuery = Object.keys(objectValue).reduce((accumI: string, keyI: string) => {
				const value = objectValue[keyI as keyof typeof objectValue]

				if ((!!value || value === 0) && value !== 'all') return !!accumI ? `${accumI}+${keyI}:${value}` : value

				return accumI
			}, '')

			return !!accum ? `${accum}&${key}=${tempQuery}` : `${key}=${tempQuery}`
		}

		const value = query[key as keyof typeof query]

		if (!!value || value === 0) return !!accum ? `${accum}&${key}=${value}` : `${key}=${value}`

		return accum
	}, '')
