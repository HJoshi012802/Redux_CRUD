import {BrowserRouter as Router} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { store } from "./redux/store";
import ErrorBoundary from "./Error.Boundary";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router>
    <Provider store={store}>
    <ErrorBoundary>
     <App/>
    </ErrorBoundary>
    </Provider>
  </Router>
);
