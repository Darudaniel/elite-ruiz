import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import Layout from './components/Layout';
import Home from './containers/Home'
import ContactUs from './containers/ContactUs'
import Blog from './containers/Blog'

const App = () => {
  return (
      <Layout>
        <Routes>
          <Route exact element={<Home/>} />
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/home" element={<Home/>} />
          <Route exact path="/elite-ruiz" element={<Home/>} />
          <Route exact path="/contact" element={<ContactUs/>} />
          <Route exact path="/blog" element={<Blog/>} />
        </Routes>
      </Layout>
  );
}

export default App;