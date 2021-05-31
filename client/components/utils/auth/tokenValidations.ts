
import { postRefreshToken } from 'actions/client/postRefreshToken.action';
import cookie from 'cookie';





export const renewAccExpCookies = async (res, ctx?) => {
  const expirationCookie = cookie
    .serialize('auth_token_expiration', res.expiration, {
      path: '/'
    });
  const accessTokenCookie = cookie
    .serialize('auth_access_token', res.accessToken, {
      path: '/'
    });


  if (ctx) {
    ctx.res.setHeader("Set-Cookie", [
      expirationCookie,
      accessTokenCookie
    ]);
  } else {
    document.cookie = expirationCookie
    document.cookie = accessTokenCookie
  }
};




//! ─── TOKEN VALIDATION ────────────────────────────────────────────────────────
export const authenticatedRequest = async (fetcher, data?, ctx?) => {
  const {
    auth_access_token,
    auth_refresh_token,
    auth_token_expiration } =
    cookie.parse(ctx ? ctx.req.headers.cookie : document.cookie)

  const date = new Date().getTime();
  let res


  if (date < +auth_token_expiration) {
    res = data
      ? await fetcher(data, auth_access_token)
      : await fetcher(auth_access_token);
  }



  if (!res || res.statusCode != 200) {
    const tokenRes = await postRefreshToken(auth_refresh_token);
    await renewAccExpCookies(tokenRes, ctx && ctx)
    const { auth_access_token } = cookie.parse(ctx.req.headers.cookie || '')
    res = data
      ? await fetcher(data, auth_access_token)
      : await fetcher(auth_access_token)

    return res;
  }

  return res
}

