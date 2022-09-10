import {MDXRemoteSerializeResult} from 'next-mdx-remote'

export interface ICollectionResponse<T> {
    data: T,
    meta: IResourceMeta
}



//Categories

export interface Icategory {
    id: number,
    attributes: IAttribute
}

export interface IAttribute {
    title: string,
    Slug: string,
}

export interface IResourceMeta {
    pagination: Ipagination
}

export interface Ipagination {
    page: number,
    pageSize: number,
    pageCount: number,
    total: number
}


//Articles

export interface IArticle {
    id: number,
    attributes: IArticleAttribute
}

export interface IArticleAttribute {
    Title: string,
    Body: string | MDXRemoteSerializeResult,
    slug: string,
    createdAt: string,
    image: IImageData
    author: IAuthor,
    shortDescription:string
}

export interface IImageData {
    data: {
        attributes: {
            name: string,
            url: string,
            formats: {
                thumbnail: {
                    url: string
                }
            }
        }
    }
}

export interface IAuthor {
    data: {
        attributes: {
            firstname: string,
            lastname: string,
            avatar: {
                data: {
                    attributes: {
                        formats: {
                            thumbnail: {
                                url: string
                            }
                        }
                    }
                }
            }
        }
    }
}



export type TDirection=1 | -1;

export interface IQueryOptions{
    populate: any,
    sort: any,
    pagination:{
        page:number,
        pageSize:number
    }
    filters:any,
}