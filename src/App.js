import './components/PageNavbar';
import './App.css';
import PageNavbar from './components/PageNavbar';
import PageFooter from './components/PageFooter';
import ImageGrid from './components/ImageGrid';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <PageNavbar />
      </header>
      <h1 className="tituloDoGrid">Modelos 3D</h1>
      <ImageGrid />
      <PageFooter />
    </div>
  );
}

export default App;
