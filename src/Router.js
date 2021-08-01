import { BrowserRouter, Route } from "react-router-dom"
import { Header } from "./components/Header";
import ContactUs from "./components/ContactUs";
import Home from "./Container/Home";
import Tac from "./components/Tac";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";

const Router = () => {
  return <>
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/contactus" component={ContactUs} />
      <Route exact path="/t&c" component={Tac} />
      <Route exact path="/privacyPolicy" component={PrivacyPolicy} />
      <Footer />
    </BrowserRouter>
  </>
}

export default Router;
