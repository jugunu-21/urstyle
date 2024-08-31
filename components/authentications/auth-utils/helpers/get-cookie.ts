
import Cookies from 'js-cookie';

export default function getJwtTokenFromCookies() {
    const cookies = Cookies.get('jwtToken');
    // console.log("cookie",cookies)
    return cookies ? cookies : null;
}