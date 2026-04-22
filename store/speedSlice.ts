import { create } from 'zustand'

const useSpeed = create(
    (set) => ({
        speed: 300,
        setSpeed: (speed: number) => set({ speed }),
        
    })
)

export default useSpeed;