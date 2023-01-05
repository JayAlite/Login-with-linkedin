import { useLinkedIn } from "react-linkedin-login-oauth2";

import { CLIENT_ID, LINKEDIN_REDIRECT_URL } from "../../../config/app";
import useAuth from "../../../hooks/useAuth";

function useLinkedinLogin() {
  const { login } = useAuth();

  const { linkedInLogin } = useLinkedIn({
    clientId: CLIENT_ID,
    redirectUri: LINKEDIN_REDIRECT_URL,
    onSuccess: async (code) => {
      console.log("code: ", code);
      await login(code);
    },
    onError: (error) => {
      console.error("error", error);
    },
  });

  return { linkedInLogin };
}

export default useLinkedinLogin;
