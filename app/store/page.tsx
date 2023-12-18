import { create } from 'zustand'


type UserStore = {
    id: string;
    username: string;
    avatar: string;
    global_name: string;
    setData: (input: any) => void;
  };

const useUserStore = create<UserStore>((set) => ({
    id: '',
    username: '',
    avatar: '',
    global_name: '',
    setData: (input: any) => set((state)=>({
            id: input.id,
            username: input.username,
            avatar: input.avatar,
            global_name: input.global_name,
        
    }))
    
}));

export default useUserStore;