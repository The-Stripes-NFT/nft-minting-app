import UAuth from '@uauth/js'
import React, {useEffect, useState} from 'react'
import styled from 'styled-components'

export const UnstoppableButton = styled.button`
  padding: 5px;
  margin: 15px;
  border-radius: 10px;
  border: none;
  font-weight: bold;
  background-color: blue;
  color: white;
  height: 40px;
  width: 200px;
  cursor: pointer;
  postion: relative;
  justify-content: center;
  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const LoginText = styled.span`
  line-height: 25px;
  `;

const uauth = new UAuth({
  // These can be copied from the bottom of your app's configuration page on unstoppabledomains.com.
  clientID: "zMD7Qay86pz0R7UuoyaJUs5H2u/N8SKrIIIc57ZDvJo=", //process.env.REACT_APP_CLIENT_ID!,
  clientSecret: "bR5LiRTtsaHNBwIj0/8HdQkr6Yuht/FYwuu/DA0oHCo=", //process.env.REACT_APP_CLIENT_SECRET!,

  // These are the scopes your app is requesting from the ud server.
  scope: 'openid email wallet',

  // This is the url that the auth server will redirect back to after every authorization attempt.
  redirectUri: "http://localhost:3000/callback", //process.env.REACT_APP_REDIRECT_URI!,

  // OPTIONAL: This is the url that the auth server will redirect back to after
  // logging out. If not included, as in this example, the authorization is just
  // removed from the cache when uauth.logout is called.
  // postLogoutRedirectUri: process.env.REACT_APP_POST_LOGOUT_REDIRECT_URI,
})

const Unstoppable: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error>()
  const [user, setUser] = useState<any>()

  // Check to see if the user is inside the cache
  useEffect(() => {
    setLoading(true)
    uauth
      .user()
      .then(setUser)
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  // Login with a popup and save the user
  const handleLogin = () => {
    setLoading(true)
    uauth
      .loginWithPopup()
      .then(() => uauth.user().then(setUser))
      .catch(setError)
      .finally(() => setLoading(false))
  }

  // Logout and delete user
  const handleLogout = () => {
    setLoading(true)
    uauth
      .logout()
      .then(() => setUser(undefined))
      .catch(setError)
      .finally(() => setLoading(false))
  }

  if (loading) {
    return <>Loading...</>
  }

  if (error) {
    console.error(error)
    return <>{String(error.stack)}</>
  }

  if (user) {
    return (
      <>
        <UnstoppableButton 
          onClick={handleLogout}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" fill="#2FE9FF" d="M22.7319 2.06934V9.87229L0 19.094L22.7319 2.06934Z"></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  fill="#fff"
                  d="M18.4696 1.71387V15.1917C18.4696 19.1094 15.2892 22.2853 11.3659 22.2853C7.44265 22.2853 4.26221 19.1094 4.26221 15.1917V9.51682L8.52443 7.17594V15.1917C8.52443 16.5629 9.63759 17.6745 11.0107 17.6745C12.3839 17.6745 13.497 16.5629 13.497 15.1917V4.4449L18.4696 1.71387Z"
                ></path>
              </svg>
          <span>Logout</span>
        </UnstoppableButton>
      </>
    )
  }

  return <UnstoppableButton
            onClick={handleLogin}>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" fill="#2FE9FF" d="M22.7319 2.06934V9.87229L0 19.094L22.7319 2.06934Z"></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  fill="#fff"
                  d="M18.4696 1.71387V15.1917C18.4696 19.1094 15.2892 22.2853 11.3659 22.2853C7.44265 22.2853 4.26221 19.1094 4.26221 15.1917V9.51682L8.52443 7.17594V15.1917C8.52443 16.5629 9.63759 17.6745 11.0107 17.6745C12.3839 17.6745 13.497 16.5629 13.497 15.1917V4.4449L18.4696 1.71387Z"
                ></path>
              </svg>
                <LoginText>Login with Unstoppable</LoginText>
            </div>
          </UnstoppableButton>
}

export default Unstoppable