export type UserStore = {
    id: string|null;
    username: string|null;
    avatar: string|null;
    global_name: string|null;
    api: string|null;
    charList: []|null;
    setData?: (input: any) => void;
  };

