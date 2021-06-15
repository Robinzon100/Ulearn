
import { useCookies } from 'react-cookie';





const AuthUtils = () => {
    const [, setCookie] = useCookies();

    const setCookiesAndRedirect = (res) => {
    
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

    return { setCookiesAndRedirect }
}




export default AuthUtils



