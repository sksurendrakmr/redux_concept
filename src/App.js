import logo from "./logo.svg";
import "./App.css";
import { CakeContainer } from "./components/CakeContainer";
import store from "./redux/store";
import { Provider } from "react-redux";
import IceCreamContainer from "./components/IceCreamContainer";
import ItemContainer from "./components/ItemContainer";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ItemContainer />
        <ItemContainer cake />
        <CakeContainer />
        <IceCreamContainer />
      </Provider>
    </div>
  );
}

export default App;
