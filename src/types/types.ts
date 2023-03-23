export interface IFilterBook {
	search: string
	startIndex?: number
	maxResults?: number

	subject?: string

	orderBy?: string

	isLoadMore: boolean
}

export interface IBook {
	id: number

	volumeInfo: VolumeInfoIBook
}

interface VolumeInfoIBook {
	title: string
	authors: string[]
	categories: string[]

	imageLinks: ImageLinksIBook
}

interface ImageLinksIBook {
	thumbnail: string
}

export interface IBookDetail {
	id: string

	volumeInfo: VolumeInfoIBookDetail
}

interface VolumeInfoIBookDetail {
	imageLinks: ImageLinksIBookDetail
	title: string

	publisher: string

	publishedDate: string
	categories: string[]
	authors: string[]
	description: string
}

interface ImageLinksIBookDetail {
	medium: string
}
