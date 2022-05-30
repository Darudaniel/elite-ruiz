import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import Layout from './components/Layout';
import Home from './containers/Home'

const App = () => {
  return (
      <Layout>
        <Routes>
          <Route exact element={<Home/>} />
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/home" element={<Home/>} />
        </Routes>
      </Layout>
  );
}

export default App;
