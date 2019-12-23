import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';

function Home(props) {
  return <h3>This is Home</h3>
}
function Blog(props){
  const { push } = props.history;
  return <>
          <h3>My blog noone reads</h3> 
          <button onClick={() => push("/")}>back home</button>
        </>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Router>
         <Link to='/'>Home</Link>
         <Link to='/blog'>Blog</Link>

         <Route exact path='/' component={Home} />
         <Route path='/blog' component={Blog} />
       </Router>
      </header>
    </div>
  );
}

export default App;
