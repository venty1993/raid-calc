import { UserStore } from '@/types/types';
import { create } from 'zustand'


const useUserStore = create<UserStore>((set) => ({
    id: null,
    username: null,
    avatar: null,
    global_name: null,
    api:null,
    charList:null,
    setData: (input: any) => set((state)=>({
            id: input.id,
            username: input.username,
            avatar: input.avatar,
            global_name: input.global_name,
        
    }))
    
}));

export default useUserStore;