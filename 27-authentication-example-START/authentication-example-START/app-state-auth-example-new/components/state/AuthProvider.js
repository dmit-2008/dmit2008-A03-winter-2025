import {useState, useContext, createContext} from 'react'


// 2. let's create the context.
export const AuthContext = createContext({})

// 1. let's create the component
export default function AuthProvider({children}) {
  // 3. creqate hte values we're going to use that are stateful
  // this state once we set it will be accessible once passed in the
  // the "value" of the AuthContext.Provider
  const [token, setToken] = useState()
  const [user, setUser] = useState()
  const [isAuthenticated, setIsAuthenticated] = useState(false)




  // return the children in the provider
  // so in react 19.1 AuthContext.Provider has just become AuthContext
  return <AuthContext.Provider value={{
    // this going to hold the values that other components will use.

  }}>
    {children}
  </AuthContext.Provider>
}