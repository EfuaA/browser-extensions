import './css/App.css';
import TitleBar from './components/Title-Bar';
import Filter from './components/Filter';
import Extension from './components/Extension';

function App() {
  return (
    <>
      <TitleBar />
      <Filter />
      <Extension name={'Devlens'} />
    </>
  );
}

export default App;
