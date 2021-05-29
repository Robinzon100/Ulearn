import Router from "next/router";


export const deleteCookie = (removeCookie) => {
    removeCookie("auth_refresh_token","");
    removeCookie("auth_token_expiration","");
    removeCookie("auth_access_token","");

    Router.reload();
}