import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title="TextUtils" />
    <div className="container my-5">
      <TextForm heading="Please enter the text to analyze" />
    </div>
    </>
  );
}

export default App;
