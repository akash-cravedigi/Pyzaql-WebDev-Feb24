import './styles/App.css';
import ClassComponent from './components/ClassComponent';
import FuncComponent from './components/FuncComponent';
import JsxComponent from './components/JsxComponent';
import Styling from './components/Styling';
import ConditionalRendering from './components/ConditionalRendering';

function App() {

  let username = "Nitu Mishra";
  let canGreet = true;

  return (
    <div className="App">
      Hello World
      <ClassComponent name={username} canGreet={canGreet} />
      <FuncComponent />
      <JsxComponent name={username} canGreet={canGreet} />
      <Styling />
      <ConditionalRendering isLoggedIn={false} userName={username} />
    </div>
  );
}

export default App;
