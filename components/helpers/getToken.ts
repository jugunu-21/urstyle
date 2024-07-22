
import getTokenFromCookies from "./getcookie";

const useJwtToken = async () => {
  try {
    const token = await getTokenFromCookies();
    return token
  } catch (error) {
    return null
  };
};

export default useJwtToken;