import { Fragment } from "react";
import "./App.css";
import Feed from "./Feed/Feed";
import Header from "./Header/Header";
import Login from "./Login/Login";
import Sidebar from "./Sidebar/Sidebar";
import { useStateValue } from "./Context/StateProvider";
import Widgets from "./Widgets/Widgets";

function App() {
  const [{ user }, dispatch] = useStateValue();

  console.log(user);

  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <Fragment>
          <Header />
          <div className="app_body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </Fragment>
      )}
    </div>
  );
}

export default App;
