import './App.css';
import Layout from './pages/home/Layout'
import "assets/style/reset.css"
import {Provider} from "react-redux"
import store from "./store/"

function App() {
  return (
    <Provider store={store}>
    <div className="App">
       <Layout/>
    </div>
    </Provider>
  );
}

export default App;
