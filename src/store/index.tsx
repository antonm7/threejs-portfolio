import {create} from 'zustand'

interface Store {
    section: 'landing' | 'fullstack' | 'backend',
    setSection:(value:'landing' | 'fullstack' | 'backend') => void
}

export const useStore = create<Store>((set) => ({
    section: 'landing',
    setSection: (value: 'landing' | 'fullstack' | 'backend') => set({section:value})
}))