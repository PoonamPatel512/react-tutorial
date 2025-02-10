import './App.css';
import React from 'react'
import Navbar from './components/1_Navbar';
import News from './components/2_News';
import { useState } from "react";
import LoadingBar from "react-top-loading-bar";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App(){
const [progress,setProgress] = useState(0)

  const handleprogress = (progress) =>{
    setProgress({progress : progress}) 
  }
  let pagesize = 10;
    return ( 
      <Router>
      <div>
        <Navbar/>
        <LoadingBar color="#f11946" progress={progress}
      />
        <Routes>
        <Route exact path='/' element={<News handleprogress={handleprogress}   key="1" pagesize={pagesize} country='us' category='general'/>} ></Route>
        <Route exact path='/business' element={<News handleprogress={handleprogress}   key="business" pagesize={pagesize} country='us' category='business'/>} ></Route>
        <Route exact path='/entertainment' element={<News handleprogress={handleprogress}   key="entertainment" pagesize={pagesize} country='us' category='entertainment'/>} ></Route>
        <Route exact path='/health' element={<News handleprogress={handleprogress}   key="health" pagesize={pagesize} country='us' category='health'/> }></Route>
        <Route exact path='/science' element={<News handleprogress={handleprogress}   key="science" pagesize={pagesize} country='us' category='science'/> }></Route>
        <Route exact path='/sports' element={<News handleprogress={handleprogress}   key="sports" pagesize={pagesize} country='us' category='sports'/> }></Route>
        <Route exact path='/technology' element={<News handleprogress={handleprogress}   key="technology" pagesize={pagesize} country='us' category='technology'/>} ></Route>

        </Routes>
      </div>
      </Router>
    )
}
export default App;

// class based component
// import './App.css';
// import React, { Component } from 'react'
// import Navbar from './components/1_Navbar';
// import News from './components/2_News';
// import { useState } from "react";
// import LoadingBar from "react-top-loading-bar";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

// export default class App extends Component {
//   state = {
//     progress : 0
//   }

//   handleprogress = (progress) =>{
//     this.setState({progress : progress}) 
//   }
//   pagesize = 10;
//   render() {
//     return ( 
//       <Router>
//       <div>
//         <Navbar/>
//         <LoadingBar color="#f11946" progress={this.state.progress}
//       />
//         <Routes>
//         <Route exact path='/' element={<News handleprogress={this.handleprogress}   key="1" pagesize={this.pagesize} country='us' category='general'/>} ></Route>
//         <Route exact path='/business' element={<News handleprogress={this.handleprogress}   key="business" pagesize={this.pagesize} country='us' category='business'/>} ></Route>
//         <Route exact path='/entertainment' element={<News handleprogress={this.handleprogress}   key="entertainment" pagesize={this.pagesize} country='us' category='entertainment'/>} ></Route>
//         <Route exact path='/health' element={<News handleprogress={this.handleprogress}   key="health" pagesize={this.pagesize} country='us' category='health'/> }></Route>
//         <Route exact path='/science' element={<News handleprogress={this.handleprogress}   key="science" pagesize={this.pagesize} country='us' category='science'/> }></Route>
//         <Route exact path='/sports' element={<News handleprogress={this.handleprogress}   key="sports" pagesize={this.pagesize} country='us' category='sports'/> }></Route>
//         <Route exact path='/technology' element={<News handleprogress={this.handleprogress}   key="technology" pagesize={this.pagesize} country='us' category='technology'/>} ></Route>

//         </Routes>
//       </div>
//       </Router>
//     )
//   }
// }
// export default App;
