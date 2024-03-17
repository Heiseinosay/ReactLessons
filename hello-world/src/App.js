import logo from './logo.svg';
import './App.css';
import GreetComponent from './components/GreetPart1'
import Welcome from './components/WelcomePart2'
import Hello from './components/HelloPart3'
import Props from './components/props-part4'
import Message from './components/State-part5'
import Destructuring from './components/destructuringStateProps-part6'
import FunctionClick from './components/EventHandling-part7'
import ClassClick from './components/EventHandlingClass-part7'
import EventBind from './components/EventBind-part8'
import ParentComponent from './components/parentComponent-part9';
import ConditionalRendering from './components/conditionalRendering-part10';
import ListeRendering from './components/ListeRendering-part11';
import IndexAsKey from './components/indexAsKey';

function App() {
  return (
    <div className="App">
      {/* <GreetComponent />    
      <Welcome />
      <Hello />  */}
      {/* <Props name="Bruce" heroName="Batman">
        <p>This is children</p>
      </Props>
      <Props name="Clark" heroName="Superman">
        <button>Action</button>
      </Props>
      <Props name="Diana" heroName="Wonderwoman"/> */}

      {/* <Message /> */}
      {/* <Destructuring name="Diana" heroName="Wonderwoman"/> */}

      {/* <FunctionClick></FunctionClick>
      <ClassClick></ClassClick> */}
      {/* <EventBind /> */}
      {/* <ParentComponent /> */}
      {/* <ConditionalRendering /> */}
      {/* <ListeRendering /> */}
      <IndexAsKey />
    </div>
  );
}

export default App;
