import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import Layout from './components/Layout';
import Home from './containers/Home'
import ContactUs from './containers/ContactUs'

const App = () => {
  return (
      <Layout>
        <Routes>
          <Route exact element={<Home/>} />
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/home" element={<Home/>} />
          <Route exact path="/elite-ruiz" element={<Home/>} />
          <Route exact path="/contact" element={<ContactUs/>} />
        </Routes>
      </Layout>
  );
}

export default App;
