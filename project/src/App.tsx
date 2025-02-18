
import { BrowserRouter  as Router ,Routes,Route } from "react-router-dom"
import PublicLayout from "./layouts/PublicLayout"
import Home from "./routes/Home"
import AuthLayout from "./layouts/AuthLayout"
import SignIn from "./routes/SignIn"
import SignUp from "./routes/SignUp"
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
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        </Route>

        {/* protected layout*/ }
      </Routes>
    </Router>
  )
}

export default App
