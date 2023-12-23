export interface Character {
    name: string;
    level: number;
    server: string;
}

export interface userDataInterface {
    id: string|null;
    username: string|null;
    avatar: string|null;
    global_name: string|null;
    api: string|null;
    charList: Character[]|null;
}

export interface UserStore {
    id: string|null;
    username: string|null;
    avatar: string|null;
    global_name: string|null;
    api: string|null;
    charList: Character[]|null;
    setData?: (input: userDataInterface) => void | undefined;
    setID? : (inputID: string) => void;
  };

