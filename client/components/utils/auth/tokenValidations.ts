
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

  return [
    accessTokenCookie,
    expirationCookie
  ]
};




//! ─── SSR TOKEN VALIDATIO ────────────────────────────────────────────────────────
export const authenticatedRequestSSR = async (fetcher, ctx) => {
  const {
    auth_access_token,
    auth_refresh_token,
    auth_token_expiration } = cookie.parse(ctx.req.headers.cookie || '')
  const date = new Date().getTime();


  let res = date < +auth_token_expiration && await fetcher(auth_access_token);


  if (!res && res.statusCode != 200) {
    const tokenRes = await postRefreshToken(auth_refresh_token);
    await renewAccExpCookies(tokenRes, ctx)
    const { auth_access_token } = cookie.parse(ctx.req.headers.cookie || '')
    res = await fetcher(auth_access_token)

    return res;
  }

  return res
}







//! ─── CLIENT SIDE VALIDATIO ────────────────────────────────────────────────────────
