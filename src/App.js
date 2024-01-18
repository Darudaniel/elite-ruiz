import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import Layout from './components/Layout';
import Home from './containers/Home'
import ContactUs from './containers/ContactUs'
import Blog from './containers/Blog'
import EntryContainer from './containers/EntryContainer'
import NotFound from './containers/NotFound';
import { Helmet } from 'react-helmet';
import { HelmetProvider } from 'react-helmet-async';

const App = () => {

  return (
    <HelmetProvider>
      <Layout>
        <Routes>
          <Route exact element={<Home/>} />
          <Route exact path="*" element={<NotFound />} />
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/home" element={<Home/>} />
          <Route exact path="/elite-ruiz" element={<Home/>} />
          <Route exact path="/contact" element={<ContactUs/>} />
          <Route exact path="/blog" element={<Blog/>} />
          <Route path="/blog/:entryId" element={<EntryContainer />} />
        </Routes>
      </Layout>
    </HelmetProvider>
  );
}

export default App;
