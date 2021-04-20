export const setCookiesAndRedirect = (res, setCookie) => {
    setCookie('auth-access_token', res.accessToken);
    setCookie('auth-refresh_token', res.refreshToken);
    setCookie('auth-token_expiration', res.expiration);
}