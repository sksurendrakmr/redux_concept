import logo from "./logo.svg";
import "./App.css";
import { CakeContainer } from "./components/CakeContainer";
import store from "./redux/store";
import { Provider } from "react-redux";
import IceCreamContainer from "./components/IceCreamContainer";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <CakeContainer />
        <IceCreamContainer />
      </Provider>
    </div>
  );
}

export default App;
