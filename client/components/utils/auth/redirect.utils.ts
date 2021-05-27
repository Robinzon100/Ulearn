import cookie from "cookie";



export const redirect = (destination: string, permanent: boolean = false) => {
  return {
    redirect: {
      destination: destination,
      permanent: permanent,
    },
  };
};


export const ifUserLoginOrRegister = (ctx,redirectLocation:string) => {
  const { auth_access_token, auth_refresh_token, auth_token_expiration } =
    cookie.parse(ctx.req.headers.cookie || "");

  if (!auth_access_token || !auth_refresh_token || !auth_token_expiration) {
    return {
        props: {},
      };
  } else {
      return redirect(redirectLocation);
    }
};



interface IOption {
  failObject: any;
  successObject: any
}

export const ifUserCookieExistsReturnProp = async (option: IOption, ctx) => {
  const { auth_access_token, auth_refresh_token, auth_token_expiration } =
    cookie.parse(ctx.req.headers.cookie || "");


  if (!auth_access_token || !auth_refresh_token || !auth_token_expiration) {
    return option.failObject
  } else {
    return option.successObject
  }


};
