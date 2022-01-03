import "./App.css";

import Search from "./Search";
import Body from "./Body";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <Body />
        <Footer />
      </div>
    </div>
  );
}
