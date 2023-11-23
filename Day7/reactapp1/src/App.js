import './App.css';
import AxiosDelete from './components/Axios.Delete';
import AxiosGet from './components/AxiosGet';
import AxiosPost from './components/AxiosPost';
import AxiosPut from './components/AxiosPut';

function App() {
  return (
    <div className="App">
      <h1>AxiosGet</h1>
      <AxiosGet/>
      <h1>AxiosPost</h1>
      <AxiosPost/>
      <h1>AxiosPut</h1>
      <AxiosPut/>
      <h1>AxiosDelete</h1>
      <AxiosDelete/>
    </div>
  );
}

export default App;
