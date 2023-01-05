import axios from "axios";
import { createContext, useReducer } from "react";
import { CLIENT_ID, CLIENT_SECRET, LINKEDIN_REDIRECT_URL } from "../config/app";

interface PropTypes {
  children: JSX.Element;
}

interface InitialState {
  code: string;
  data: any;
}

type ACTION_TYPE = {
  type: "LOGIN";
  payload: {
    code: string;
    data: any;
  };
};

const initialState: InitialState = {
  code: "",
  data: {},
};

const handlers = {
  LOGIN: (state: InitialState, action: ACTION_TYPE) => {
    const { code, data } = action.payload;
    return { ...state, code: code, data: data };
  },
};

const reducer = (state: InitialState, action: ACTION_TYPE) =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

export const AuthContext = createContext({
  ...initialState,
  provider: "linkedin-oauth2",
  login: (code: string) => Promise.resolve(),
});

function AuthProvider({ children }: PropTypes) {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("state: ", state);

  const login = async (code: string) => {
    const config = {
      "Content-Type": "application/x-www-form-urlencoded",
    };

    const requestBody = {
      code: code,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      redirect_uri: LINKEDIN_REDIRECT_URL,
    };

    // https://www.linkedin.com/oauth/v2/accessToken?code={authorization_code_from_step2_response}&grant_type=authorization_code&client_id={your_client_id}&client_secret={your_client_secret}&redirect_uri={your_callback_url}

    const request = await axios.post(
      `https://www.linkedin.com/oauth/v2/accessToken?code=${requestBody.code}&grant_type=authorization_code&client_id=${requestBody.client_id}&client_secret=${requestBody.client_secret}&redirect_uri=${requestBody.redirect_uri}`,
      {},
      {
        headers: config,
      }
    );

    if (request.status === 200) {
      console.log("request data", request.data);
      dispatch({
        type: "LOGIN",
        payload: { code: code, data: request.data },
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        provider: "linkedin-oauth2",
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
