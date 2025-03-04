import { StateCreator } from 'zustand';

type UserState = {
    username: string;
    fullname: string;
    age: number;
    address: string;
}

type UserActions = {
    setAddress: (address: string) => void;
}

export type UserSlice = UserState & UserActions;

export const createUserSlice: StateCreator<UserSlice, [['zustand/immer', never]], [], UserSlice> = (set) => ({
    username: '',
    fullname: '',
    age: 0,
    address: '',
    setAddress: (address) => set((state) => { 
        state.address= address;
     }),
})