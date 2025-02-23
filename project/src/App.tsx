
import { BrowserRouter  as Router ,Routes,Route } from "react-router-dom"
import { MainLayout } from "./layouts/MainLayout"
import { PublicLayout } from "./layouts/PublicLayout"
import Home from "./routes/Home"
import AuthLayout from "./layouts/AuthLayout"
import SignInPage from "./routes/SignInPage"
import SignUpPage from "./routes/SignUpPage"
import ProtectRoutes from "./layouts/ProtectRoutes"
import { Generate } from "./components/generate"
import {Dashboard} from "./routes/dashboard"
import { CreateEditPage } from "./routes/CreateEditPage"
import { MockLoadPage } from "./routes/MockLoadPage"
import { MockInterviewPage } from "./routes/MockInterviewPage"
import { Feedback } from "./routes/Feedback"
import Services from "./routes/services"
const App = () => {
  return (
    <Router>
      <Routes>
        {/* public routes */}
        <Route element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route index element={<Services/>} />
          
        </Route>

         {/*public routes */}
         <Route element={<AuthLayout/>}>
        <Route path="/signin/*" element={<SignInPage/>}/>
        <Route path="/signup/*" element={<SignUpPage/>}/>
        </Route>

        {/* protected layout*/ }
        <Route
         element={
         <ProtectRoutes> 
          <MainLayout/>
          </ProtectRoutes>
        }
        >
          {/* protected routes */}
          <Route element={<Generate />} path="/generate">
            <Route index element={<Dashboard />} />
            <Route path=":interviewId" element={<CreateEditPage />} />
            <Route path="interview/:interviewId" element={<MockLoadPage/>}/>
            <Route
              path="interview/:interviewId/start"
              element={<MockInterviewPage />}
            />
             <Route path="feedback/:interviewId" element={<Feedback />} />
          </Route>
            

        </Route>
        
      </Routes>
    </Router>
  )
}

export default App
