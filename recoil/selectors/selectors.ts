import { selector } from "recoil";
import { userState } from "../atoms/atoms";
import { User } from "@prisma/client";

const userData = selector({
    key: "userData",
    get: ({ get }) => {
        const user: User = get(userState);

        return user;
    },
});
