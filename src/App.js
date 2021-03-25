import logo from "./logo.svg";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import MuffinsContainer from "./components/MuffinsContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksCakeContainer from "./components/HooksCakeContainer";
import CookiesContainer from "./components/Cookiesontainer";
import CroissantContainer from "./components/CroissantCointainer";
import AlfajoresContainer from "./components/AlfajoresContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer />
        <CakeContainer />
        <IceCreamContainer />
        <MuffinsContainer />
        <CookiesContainer />
        <CroissantContainer />
        <AlfajoresContainer />
      </div>
    </Provider>
  );
}

export default App;
