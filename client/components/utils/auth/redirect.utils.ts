import cookie from "cookie";
import { GetServerSideProps } from 'next';

export const redirect = (destination: string, permanent: boolean = false) => {
  return {
    redirect: {
      destination: destination,
      permanent: permanent,
    },
  };
};


export const ifUserLoginOrRegister = (ctx) => {
  const { auth_access_token, auth_refresh_token, auth_token_expiration } =
    cookie.parse(ctx.req.headers.cookie || "");

  if (auth_access_token && auth_refresh_token && auth_token_expiration) {
    return redirect("/");
  } else {
    return {
      props: {},
    };
  }
};


export const ifUserIsAuthenticated = async (ctx) => {
  const { auth_access_token, auth_refresh_token, auth_token_expiration } =
    cookie.parse(ctx.req.headers.cookie || "");

  if (!auth_access_token || !auth_refresh_token || !auth_token_expiration) {
    return redirect("/login");
  } else {
    return {
      props: {},
    };
  }
};






interface IOption {
  failObject: any;
  successObject: any
}

export const ifUserCookieExistsReturnProp = async (option: IOption, ctx) => {
  const { auth_access_token, auth_refresh_token, auth_token_expiration } =
    cookie.parse(ctx.req.headers.cookie || "");

  console.log(option)

  if (!auth_access_token || !auth_refresh_token || !auth_token_expiration) {
    return option.failObject
  } else {
    return option.successObject
  }


};
