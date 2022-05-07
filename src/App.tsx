import "./styles.css";
import RouterView from "./components/routerView";
import { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <RouterView />
        </Router>
      </Suspense>
    </div>
  );
}
