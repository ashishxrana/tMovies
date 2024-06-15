import React from "react";
import "swiper/swiper.min.css";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./App.scss";
import "./App.css";
import { BrowserRouter, Route,Switch } from "react-router-dom";
import { useUserContext } from "./context/userContext";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Detail from "./pages/detail/Detail";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import UserCheck from "./components/User";
import ForgetPsd from "./components/ForgetPsd";
function App() {
  const { user} = useUserContext();
  console.log(user)
  return (
    <div className="App">
      <BrowserRouter>
        <Route
          path="/"
          render={(props) => (
            <>
              {user?
              <>
              <Header {...props} />
              <Switch>
                <Route path={["/home", "/", "/signup"]} exact component={Home} />
                <Route path="/user" exact component={UserCheck} />
                <Route path="/:category/search/:keyword" component={Catalog} />
                <Route path="/:category/:id" component={Detail} />
                <Route path="/:category" component={Catalog} />
              </Switch>
              <Footer />
              </>:
              <Switch>
                <Route path="/signup" exact component={Signup} />
                <Route path="/forgetpsd" exact component={ForgetPsd} />
                <Route path={["/user","/"]} exact component={Signin} />
              </Switch>
              }
            </>
          )}
        />
      </BrowserRouter>
    </div>
  );
}
export default App;
