

export default function getAuthCookie() {
    return document.cookie.split('token=')[1];
}