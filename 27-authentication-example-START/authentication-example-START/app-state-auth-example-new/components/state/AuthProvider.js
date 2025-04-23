import {useState, useContext, createContext} from 'react'

// 4. I'm going to import the login
import { login } from '@/utils/api/auth'

// 2. let's create the context.
export const AuthContext = createContext({})

// 7. let's create the hook to simplify
export function useAuth() {
  // so you can call your own hooks inside of your custom hook
  // useEffect, useState, useRouter.
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error(`useAuth must be used within a AuthProvider`)
  }
  return context
}


// 1. let's create the component
export default function AuthProvider({children}) {
  // 3. creqate hte values we're going to use that are stateful
  // this state once we set it will be accessible once passed in the
  // the "value" of the AuthContext.Provider
  const [token, setToken] = useState()
  const [user, setUser] = useState()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // 5. create the sign method
  // we're going to create the method that is going to call the backend
  // and update the state of the frontend and keep the values up to date
  const signIn = async ({email, password}) => {
    // call the backend
    const data = await login({email: email, password: password})

    // update the frontend
    setToken(data.accessToken)
    // update the user
    setUser(data.user)
    // update the state that the user isAuthenticated
    setIsAuthenticated(true)
  }


  // return the children in the provider
  // so in react 19.1 AuthContext.Provider has just become AuthContext
  return <AuthContext.Provider value={{
    // 6. this going to hold the values that other components will use.
    signIn, token, user, isAuthenticated
  }}>
    {children}
  </AuthContext.Provider>
}