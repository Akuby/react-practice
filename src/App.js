import './App.css';
import Header from './components/Header.js';
//Header.js파일에서 Header컴포넌트를 가져온다.
import Slide from './components/Slide.js';
//함수형 컴포넌트
//App.jsx인데-javaScript Extension
function App() {
  return (
    <div className="App">
        <Header/>
        <Slide/>
    </div>
  );
}
export default App;
