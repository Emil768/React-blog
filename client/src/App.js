import emptyGif from "./empty.gif";
import "./scss/style.scss";
//components
import Header from "./components/Header/Header";
import News from "./components/News/News";
import Footer from "./components/Footer/Footer";
//
function App() {
  return (
    <div className="App">
      <Header />
      <News />
      <Footer />
    </div>
  );
}

export default App;
