import Cookies from "js-cookie";
import jwt from "jsonwebtoken";

export const getAuthToken = () => {
    const token = Cookies.get("token");
};
