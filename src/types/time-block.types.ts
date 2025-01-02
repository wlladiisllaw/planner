<<<<<<< HEAD
import type { IBase } from './root.types'

export interface ITimeBlockResponse extends IBase {
	name: string
	color?: string
	duration: number
	order: number
}

export type TypeTimeBlockFormState = Partial<
	Omit<ITimeBlockResponse, 'createdAt' | 'updatedAt'>
>
=======
import { IBase } from "./root.types"

export interface ITimeBlockResponse extends IBase {
    name: string
    color?: string
    duration: number
    order: number
}

export type TypeTimeBlockFormState = Partial<Omit<ITimeBlockResponse, 'createdAt' | 'updateAt'>>
>>>>>>> d57ec42528bb599395c7c89dbeb6964eddf4159c
