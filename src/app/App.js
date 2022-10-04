import { Provider } from 'react-redux';
import { store } from "./store/Store";
import "./styles/App.module.css";
import HomeView from "./Views/HomeView";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <HomeView/>
      </Provider>
    </>
  );
}

export default App;
