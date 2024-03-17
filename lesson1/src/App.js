import logo from './logo.svg';
import './App.css';
import StyleSheet from './components/part12/styleSheet';
import InlineStyle from './components/part13/inlineStyle';
import Forms from './components/part14/forms';
import IncrementSetState from './components/part15/incrementSetState';
import LifecycleA from './components/part16 - lifecyle/LifecycleA';
import FragmentDemo from './components/part17 - fragments/FragmentDemo';
import Table from './components/part17 - fragments/Table';
import ParentComponent from './components/part18 - pureComponents/ParentComponent';
import RefsDemo from './components/part20 - Refs/RefsDemo';
import ParentRef from './components/part21 - ChildParentRefs/ParentRef';
import PortalDemo from './components/part22 - Portal/PortalDemo';
import Hero from './components/part23 - Error Bondaries/Hero';
import ErrorBoundary from './components/part23 - Error Bondaries/ErrorBoundary';
import ClickCounter from './components/part24 - HOC/ClickCounter';
import HoverCounter from './components/part24 - HOC/HoverCounter';
import ClickCounterTwo from './components/part25 - RenderProps/ClickCounterTwo';
import HoverCounterTwo from './components/part25 - RenderProps/HoverCounterTwo';
import User from './components/part25 - RenderProps/User';


function App() {
  return (
    <div className="App">
      {/* <StyleSheet primary={true}/>
      <InlineStyle /> 
      <Forms />
      <IncrementSetState /> */}
      {/* <LifecycleA /> */}
      {/* <FragmentDemo /> */}
      {/* <Table /> */}
      {/* <ParentComponent /> */}
      {/* <RefsDemo /> */}
      {/* <ParentRef />  */}
      {/* <PortalDemo /> */}
      
      {/* <ErrorBoundary>
        <Hero Heroname="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero Heroname="Superman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero Heroname="Joker" />
      </ErrorBoundary> */}

      {/* <ClickCounter name='Jeleazar'/>
      <HoverCounter /> */}

      {/* <ClickCounterTwo /> part 25
      <HoverCounterTwo />
      <User render={(isLoggedIn) => isLoggedIn ? 'Jeleazar' : 'Guess'}/> */}
      <User render={(count, incrementCount) => (
        <ClickCounterTwo count={count} incrementCount={incrementCount}/>
        )}/>
      <User render={(count, incrementCount) => (
        <HoverCounterTwo count={count} incrementCount={incrementCount}/>
        ) }/>

    </div>
  );
}

export default App;
