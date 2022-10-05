import React, { Component,Setname } from 'react';
import * as ReactDOM from 'react-dom/client';
import './style.css';
// import './index.html';

// export default function App() {
//   return (
//     <div>
//       <h1>Hello StackBlitz!</h1>
//       <p>Start editing to see some magic happen :)</p>
//     </div>
//   );
// }
function Hello(props) {
  console.log(props);
  return (
    <div id ="root">
      {/* hello {props.number}
      <button onClick={props.onClick}> click it</button>
      <br></br> */}
      hello {props.name}
      <button
        onClick={() => {
          setTimeout(() => {
            props.onClick({ name: 'ok' });
          }, 2000);
        }}
      >
        {props.label}{' '}
      </button>
    </div>
  );
}
export default class Test extends React.Component {
  render() {
    return (
      <div>
        <h1
          style={{ color: 'white', backgroundColor: 'grey', borderRadius: 5 }}
        >
          {' '}
          hello StackBlitz
        </h1>
        <p>Start editing to see some magic happen :) </p>
     
      </div>
    );
  }
}
export default class App extends React.Component{
  
    // state={       // global declaration
    //   name : " test"
    // }
  
  constructor(props){     //constructor declaration
    super(props)
    this.state={
           name:"elaya"
    }
  }
  render() {
    return (
      <div>
        <h1
          style={{ color: 'white', backgroundColor: 'grey', borderRadius: 5 }}
        >
          {' '}
          hello StackBlitz
        </h1>
        <p>Start editing to see some magic happen :) </p>
        <Hello
          arr={[1, 2, 3, 4]}
          name={this.state.name}
          number={1}
          onClick={(data) => {
            alert(data.name);
          }}
          label="save it"
        />
        <Hello
          arr={[1, 2, 3, 4]}
          name={'yogi'}
          number={2}
          onClick={(data) => {
            console.log('clear');
          }}
          label="close it"
        /> <Test/>
      </div>
    );
  }
}

