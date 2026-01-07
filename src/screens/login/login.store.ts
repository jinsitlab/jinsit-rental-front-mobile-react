import { create } from 'zustand'
import type { LoginFormState } from "./login.types"

interface LoginStore extends LoginFormState {
	setConstructionCode: (value: string) => void
	login: () => Promise<boolean>
}

export const useLoginStore = create<LoginStore>((set, get) => ({
	constructionCode: '',
	isLoading: false,
	error: undefined,

	setConstructionCode: (value) => {
		set({ constructionCode: value })
	},

	login: async () => {
		// 어쩌구
		return true
	}
}))