import { Provider } from "react-redux";
import Body from "./components/Body";
import store from "./utils/store";

function App() {
  return (
    <Provider store={store}>
      <Body />
    </Provider>
  );
}

export default App;
