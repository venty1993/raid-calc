import { create } from "zustand";

interface IdState {
    loginedId: string;
}

const useStore = create(set => ({
    loginedId: '',
    rogin: () => {
        set((state: IdState) => ({ loginedId: state }))
    }
}))