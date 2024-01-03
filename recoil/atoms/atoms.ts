import { School } from "@/lib/interfaces";
import { User } from "@prisma/client";
import { atom } from "recoil";

export const userState = atom<User>({
    key: "userState",
    default: {
        id: "",
        name: "",
        email: "",
        password: "",
        schoolName: null,
        bio: null,
        username: null,
        emailVerified: null,
        image: null,
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
