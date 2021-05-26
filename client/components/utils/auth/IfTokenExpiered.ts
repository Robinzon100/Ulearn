
import { postRefreshToken } from 'actions/client/postRefreshToken.action';
import cookie from 'cookie';



//? UTILS


export const renewAccExpCookiesSRR = async (res, ctx) => {
  ctx.res.setHeader("Set-Cookie", [
    cookie.serialize("auth_token_expiration", res.expiration, {
      httpOnly: true,
      path: "/",
    }),
    cookie.serialize("auth_access_token", res.accessToken, {
      httpOnly: true,
      path: "/",
    }),
  ]);
};







export const authenticatedGet = async (fetcher, ctx) => {
  const {
    auth_access_token,
    auth_refresh_token,
    auth_token_expiration } = cookie.parse(ctx.req.headers.cookie || '')
  const date = new Date().getTime();

  let res = date < +auth_token_expiration && await fetcher(auth_access_token);


  if (!res && res.statusCode != 200) {
    const tokenRes = await postRefreshToken(auth_refresh_token);
    await renewAccExpCookiesSRR(tokenRes, ctx)
    const { auth_access_token } = cookie.parse(ctx.req.headers.cookie || '')
    res = await fetcher(auth_access_token)

    return false
  }

  return res
}