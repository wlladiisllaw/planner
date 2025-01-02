<<<<<<< HEAD
import type { IBase } from './root.types'

export enum EnumTaskPriority {
	low = 'low',
	medium = 'medium',
	high = 'high'
}

export interface ITaskResponse extends IBase {
	name: string
	priority?: EnumTaskPriority
	isCompleted: boolean
}

export type TypeTaskFormState = Partial<Omit<ITaskResponse, 'id' | 'updatedAt'>>
=======
import { IBase } from "./root.types"

export enum EnumTaskPriority {
    low = 'low',
    medium = 'medium',
    high = 'high'
}

export interface ITaskResponse extends IBase {
    name: string
    priority?: EnumTaskPriority
    isCompleted: boolean
}

export type TypeTaskFormState = Partial<Omit<ITaskResponse, 'id' | 'updatedAt'>>
>>>>>>> d57ec42528bb599395c7c89dbeb6964eddf4159c
