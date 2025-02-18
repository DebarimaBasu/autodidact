
import { BrowserRouter  as Router ,Routes,Route } from "react-router-dom"
import PublicLayout from "./layouts/PublicLayout"
import Home from "./routes/Home"
import AuthLayout from "./layouts/AuthLayout"
import SignInPage from "./routes/SignInPage"
import SignUpPage from "./routes/SignUpPage"
const App = () => {
  return (
    <Router>
      <Routes>
        {/*public routes */}
        <Route element={<PublicLayout/>}>
        <Route index element={<Home/>}/>
        </Route>

         {/*public routes */}
         <Route element={<AuthLayout/>}>
        <Route path="/signin" element={<SignInPage/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
        </Route>

        {/* protected layout*/ }
      </Routes>
    </Router>
  )
}

export default App
