import './App.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Page from './Page';
import requests from './requests';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="app__page">
        <Sidebar />
        <Page
          title="NepTune Originals"
          fetchUrl={requests.fetchNetflixOriginals}
        />
      </div>
    </div>
  );
}

export default App;
