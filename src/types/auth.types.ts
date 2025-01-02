export interface IAuthForm {
<<<<<<< HEAD
	email: string
	password: string
}

export interface IUser {
	id: number
	name?: string
	email: string

	workInterval?: number
	breakInterval?: number
	intervalsCount?: number
}

export interface IAuthResponse {
	accessToken: string
	user: IUser
}

export type TypeUserForm = Omit<IUser, 'id'> & { password?: string }
=======
    email: string
    password: string
}

export interface IUser {
    id: number,
    name?: string,
    email: string

    workInterval?: number,
    breakInterval?: number,
    intervalsCount?: number
}

export interface IAuthResponse {
    accessToken: string
    user: IUser
}

export type TypeUserForm = Omit<IUser, 'id'> & {password?: string}
>>>>>>> d57ec42528bb599395c7c89dbeb6964eddf4159c
