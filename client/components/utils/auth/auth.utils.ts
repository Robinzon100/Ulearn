export const setCookiesAndRedirect = (res, setCookie) => {
    setCookie('auth_access_token', res.accessToken, {
        path: "/",
        sameSite: true,
    });
    setCookie('auth_refresh_token', res.refreshToken, {
        path: "/",
        sameSite: true,
    });
    setCookie('auth_token_expiration', res.expiration, {
        path: "/",
        sameSite: true,
    });
}