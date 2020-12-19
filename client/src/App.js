import "./scss/style.scss";
//components
import Header from "./components/Header/Header";
import News from "./components/News/News";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import AddNews from "./components/AddNews/AddNews";
import NewsInfo from "./components/NewsInfo/NewsInfo";
import Category from "./components/Category/Category";
//
//lib
import { Route, Switch } from "react-router-dom";
import Contact from "./components/Contact/Contact";

//
function App(props) {
  console.log(props);
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={News} />
        <Route exact path="/about" component={About} />
        {localStorage.length ? (
          <Route path="/addnews" component={AddNews} />
        ) : null}
        <Route path="/news/:id" component={NewsInfo} />
        <Route path="/category/:name" component={Category} />
        <Route path="/contacts" component={Contact} />
        <Route path="/:page_number" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
