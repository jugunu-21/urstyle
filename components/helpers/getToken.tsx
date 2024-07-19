"use client"
import { useState, useEffect } from 'react';
import getTokenFromCookies from "./getcookie"
const useJwtToken = () => {
  const [jwtToken, setJwtToken] = useState<string | null>(null);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const token = await getTokenFromCookies();
        setJwtToken(token);
      } catch (error) {
        console.error('Error fetching token:', error);
      }
    };

    fetchToken();
  }, []);

  return jwtToken;
};
export default useJwtToken