
import { BrowserRouter  as Router ,Routes,Route } from "react-router-dom"
import PublicLayout from "./layouts/PublicLayout"
import Home from "./routes/Home"
const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<PublicLayout/>}>
        <Route index element={<Home/>}>
        </Route>
        
        </Route>
      </Routes>
    </Router>
  )
}

export default App
