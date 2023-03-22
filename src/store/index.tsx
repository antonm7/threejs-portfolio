import { create } from 'zustand'

interface Store {
    section: 'landing' | 'fullstack' | 'backend',
    email:boolean,
    location:string,
    setSection:(value:'landing' | 'fullstack' | 'backend') => void
    setEmail:(value:boolean) => void
    updateLocation:(value:string) => void
}

export const useStore = create<Store>((set) => ({
    section: 'landing',
    email:false,
    location:'/',
    setSection: (value: 'landing' | 'fullstack' | 'backend') => set({section:value}),
    setEmail:(value:boolean) => set({email:value}),
    updateLocation:(value:string) => set({location:value})
}))