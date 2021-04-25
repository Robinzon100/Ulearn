import cookie from 'cookie';



export const redirect = (destination: string, permanent: boolean = false) => {
    return {
        redirect: {
            destination: destination,
            permanent: permanent,
        }
    }
}

export const ifLogedInRedirect = (ctx) => {
    const { auth_access_token, auth_refresh_token, auth_token_expiration } = cookie.parse(ctx.req.headers.cookie || '')
    if (auth_access_token && auth_refresh_token && auth_token_expiration)
        return redirect('/')
}