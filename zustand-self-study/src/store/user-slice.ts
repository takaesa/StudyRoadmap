import { StateCreator } from "zustand";

type UserState = {
    userName: string;
    fullName: string;
    age: number;
    address: string;

};

type UserActions = {
    setAddress: (address: string) => void;
};

export type UserSlice = UserState & UserActions;

export const createUserSlice: StateCreator<UserSlice, [['zustand/immer', never]], [], UserSlice> = (set) => ({
    address: "",
    userName: "",
    fullName: "",
    age: 0,
    setAddress: (address) =>
        set((state) => {
            state.address = address;
            // state.fullName = "John Doe";
            // state.age = 30;
            // state.userName = "johndoe";
        }),
});
