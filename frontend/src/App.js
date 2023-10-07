import HomePage from "./pages/HomePage"
import LandingPage from "./pages/LandingPage"
import { Link,Route } from "react-router-dom"
const App=()=>{
  return(
    <div>
      {/* <LandingPage /> */}
      <Route path="/" component={LandingPage}  exact={true}/>
      <Route path="/home" component={HomePage}  exact={true}/>

    </div>
  )
}
export default App