import { UserStore, userDataInterface } from "@/types/types";
import { UserData } from "next-auth/providers/42-school";
import { create } from "zustand";
import { persist } from "zustand/middleware";

// const useUserStore = create<UserStore>()((set) => ({
//     id: null,
//     username: null,
//     avatar: null,
//     global_name: null,
//     api:null,
//     charList:null,
//     setData: (input) =>
//       set((state)=>({
//         id: input.id ?? state.id,
//         username: input.username ?? state.username,
//         avatar: input.avatar ?? state.avatar,
//         global_name: input.global_name ?? state.global_name,
//         api: input.api ?? state.api,
//         charList: input.charList ?? state.charList,
//       })),

// }));

// export default useUserStore;

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      id: null,
      username: null,
      avatar: null,
      global_name: null,
      api: null,
      charList: null,
      setData: (input) =>
        set((state) => ({
          id: input.id ?? state.id,
          username: input.username ?? state.username,
          avatar: input.avatar ?? state.avatar,
          global_name: input.global_name ?? state.global_name,
          api: input.api ?? state.api,
          charList: input.charList ?? state.charList,
        })),
      setID : (inputID: string) =>
      set(()=>({
        id:inputID,
      })),
    }),
    {
      name: "hi",
    }
  )
);

