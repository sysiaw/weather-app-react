import "./App.css";

import Body from "./Body";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Body defaultCity="Malacca" />
        <Footer />
      </div>
    </div>
  );
}
