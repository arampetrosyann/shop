import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styles from "./styles/App.module.css";
import { Header, Main, Footer } from "./components";
import { Home, NotFound, SignIn } from "./pages";
import UserContext from "./context/UserContext";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [currentUserId, setCurrentUserId] = useState("");

  return (
    <div className={styles.app}>
      <UserContext.Provider
        value={{ isAuth, setIsAuth, currentUserId, setCurrentUserId }}
      >
        <Router>
          <Header />
          <Main>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <PrivateRoute path="/sign-in" rend={!isAuth}>
                <SignIn />
              </PrivateRoute>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Main>
          <Footer />
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
