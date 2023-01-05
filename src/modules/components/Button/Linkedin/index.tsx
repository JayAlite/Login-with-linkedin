import useLinkedinLogin from "../../../auth/LinkedinPage/useLinkedinLogin";

import LinkedinImage from "react-linkedin-login-oauth2/assets/linkedin.png";

import classNames from "./style.module.css";
import useAuth from "../../../../hooks/useAuth";

function LinkedinLoginButton() {
  const { linkedInLogin } = useLinkedinLogin();
  const { code } = useAuth();

  return (
    <>
      <img
        onClick={linkedInLogin}
        src={LinkedinImage}
        alt="Sign in with Linked in"
        className={classNames["linkedin-image"]}
      />
      {code !== "" ? <p>{code}</p> : null}
    </>
  );
}

export default LinkedinLoginButton;
