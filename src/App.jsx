import "./App.css";
import Currentweather from "./components/Currentweather";
import Navbar from "./components/Navbar";
import Nextweather from "./components/Nextweather";
import Axios from "./utils/Axios";

function App() {
  return (
    <div className="px-10">
      <Navbar />
      <Currentweather />
      <Nextweather />
      <Axios />
    </div>
  );
}

export default App;
