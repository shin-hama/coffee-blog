// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.
import { Document } from '@contentful/rich-text-types'
import { Asset, Entry } from 'contentful'

export interface ICafeFields {
  /** Name */
  name: string

  /** Slug */
  slug: string

  /** Visited */
  visited: string

  /** Thumbnail */
  thumbnail: Asset

  /** Photos */
  photos: Asset[]

  /** Description */
  description: Document

  /** Links */
  links: string[]

  /** Information */
  information: ICafeInformation

  /** Orders */
  orders: ICafeOrder[]

  /** Instagram */
  instagram?: string | undefined
}

/** 紹介するカフェの情報 */

export interface ICafe extends Entry<ICafeFields> {
  sys: {
    id: string
    type: string
    createdAt: string
    updatedAt: string
    locale: string
    contentType: {
      sys: {
        id: 'cafe'
        linkType: 'ContentType'
        type: 'Link'
      }
    }
  }
}

export interface ICafeInformationFields {
  /** Name */
  name: string

  /** Location */
  location: { lat: number; lon: number }

  /** Holidays */
  holidays: ('月' | '火' | '水' | '木' | '金' | '土' | '日')[]

  /** Takeout */
  takeout: boolean

  /** Wifi */
  wifi: boolean

  /** Payment */
  payment: ('QR 決済' | '電子マネー' | 'クレジットカード' | '現金のみ')[]

  /** Opening Hour */
  openingHour: string

  /** Smoking */
  smoking: '禁煙' | '喫煙' | '分煙'

  /** Seats */
  seats: string
}

/** カフェの基本情報
営業時間、定休日など一覧で確認したいもの */

export interface ICafeInformation extends Entry<ICafeInformationFields> {
  sys: {
    id: string
    type: string
    createdAt: string
    updatedAt: string
    locale: string
    contentType: {
      sys: {
        id: 'cafeInformation'
        linkType: 'ContentType'
        type: 'Link'
      }
    }
  }
}

export interface ICafeOrderFields {
  /** Name */
  name: string

  /** Price */
  price: number

  /** Photo */
  photo: Asset

  /** OrderedAt */
  ordered: string

  /** Description */
  description?: string | undefined
}

/** カフェで注文したもの */

export interface ICafeOrder extends Entry<ICafeOrderFields> {
  sys: {
    id: string
    type: string
    createdAt: string
    updatedAt: string
    locale: string
    contentType: {
      sys: {
        id: 'cafeOrder'
        linkType: 'ContentType'
        type: 'Link'
      }
    }
  }
}

export interface IPersonFields {
  /** Name */
  name: string

  /** Title */
  title: string

  /** Company */
  company: string

  /** Short Bio */
  shortBio: string

  /** Email */
  email?: string | undefined

  /** Phone */
  phone?: string | undefined

  /** Facebook */
  facebook?: string | undefined

  /** Twitter */
  twitter?: string | undefined

  /** Github */
  github?: string | undefined

  /** Image */
  image?: Asset | undefined
}

export interface IPerson extends Entry<IPersonFields> {
  sys: {
    id: string
    type: string
    createdAt: string
    updatedAt: string
    locale: string
    contentType: {
      sys: {
        id: 'person'
        linkType: 'ContentType'
        type: 'Link'
      }
    }
  }
}

export type CONTENT_TYPE = 'cafe' | 'cafeInformation' | 'cafeOrder' | 'person'

export type IEntry = ICafe | ICafeInformation | ICafeOrder | IPerson

export type LOCALE_CODE = 'en-US'

export type CONTENTFUL_DEFAULT_LOCALE_CODE = 'en-US'
