import { School, User } from "@/lib/interfaces";
import { atom } from "recoil";

export const userState = atom<User>({
    key: "userState",
    default: {
        id: -1,
        name: "",
        email: "",
    },
});

export const schoolDetails = atom<School>({
    key: "schoolDetails",
    default: {
        id: -1,
        name: "",
        email: "",
        classStart: 0,
        classEnd: 0,
    },
});
