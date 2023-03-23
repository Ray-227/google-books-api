export interface IFilterBook {
	search: string
	startIndex?: number
	maxResults?: number

	subject?: string

	orderBy?: string
}

export interface IBook {
	id: number
	selfLink: string

	volumeInfo: VolumeInfo

	searchInfo: SearchInfo
}

interface VolumeInfo {
	title: string
	authors: string[]

	publisher: string
	publishedDate: string
	description: string
	pageCount: number
	categories: string[]

	imageLinks: ImageLinks
	language: string
}

interface ImageLinks {
	smallThumbnail: string
	thumbnail: string
}

interface SearchInfo {
	textSnippet: string
}
