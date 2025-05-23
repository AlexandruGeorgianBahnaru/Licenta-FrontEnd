import axios from "@/app/_api/axios_auth";
import { UpdateUserModel } from "@/app/_models/UpdateUserModel";

class AuthenticationService {
  loginUser = async (email: any, password: any) => {
    return await axios.post(
      `/login`,
      {
        user_email: email,
        user_password: password,
      },
      {
        withCredentials: true,
      }
    );
  };

  signupUser = async (
    first_name: any,
    last_name: any,
    email: any,
    phone: any,
    password: any
  ) => {
    return await axios.post(`/signup`, {
      user_first_name: first_name,
      user_last_name: last_name,
      user_email: email,
      user_phone: phone,
      user_password: password,
    });
  };

  getUserInfo = async (access_token: string) => {
    return await axios.get("/getUserInfo", {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      params: {},
      withCredentials: true,
    });
  };

  updateUser = async (access_tokne: string, userData: UpdateUserModel) => {
    return await axios.put("/updateUser", userData, {
      headers: {
        Authorization: `Bearer ${access_tokne}`,
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
  };
}

const newAuthenticationService = new AuthenticationService();
export default newAuthenticationService;
