import { Route, Routes } from "react-router-dom"
import TopicPage from "./pages/Topic"
import SignInPage from "./pages/SignIn"
import SignUpPage from "./pages/SignUp"
import { useAuth } from "./hook/useAuth";

function App() {

const {user} = useAuth();

  return (
    <div id='App'>
    <Routes>
        <Route path="/" element={ <TopicPage /> } />
        <Route path="/signin" element={ <SignInPage /> } />
        <Route path="/signup" element={ <SignUpPage /> } />
      </Routes>

      { user ? (
        <Routes>
          <Route path="/" element={ <TopicPage /> } />
        </Routes>
      ) : (
        <Routes>
          <Route path="*" element={ <SignInPage /> } />
          <Route path="/signup" element={ <SignUpPage /> } />
        </Routes>
      )}
    </div>
  )
}

export default App