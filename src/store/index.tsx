import { create } from 'zustand'

interface Store {
    section: 'landing' | 'fullstack' | 'backend',
    email:boolean,
    setSection:(value:'landing' | 'fullstack' | 'backend') => void
    setEmail:(value:boolean) => void
}


export const useStore = create<Store>((set) => ({
    section: 'landing',
    email:false,
    setSection: (value: 'landing' | 'fullstack' | 'backend') => set({section:value}),
    setEmail:(value:boolean) => set({email:value})
}))