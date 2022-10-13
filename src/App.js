import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
// import './index.html';

// // export default function App() {
// //   return (
// //     <div>
// //       <h1>Hello StackBlitz!</h1>
// //       <p>Start editing to see some magic happen :)</p>
// //     </div>
// //   );
// // }
// function Hello(props) {
//   console.log(props);
//   return (
//     <div id ="root">
//       hello {props.number}
//       <button onClick={props.onClick}> click it</button>
//       <br></br>
//       hello {props.name}
//       <button
//         onClick={() => {
//           setTimeout(() => {
//             props.onClick({ name: 'ok' });
//           }, 2000);
//         }}
//       >
//         {props.label}{' '}
//       </button>
//     </div>
//   );
// }
// export default class Test extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1
//           style={{ color: 'white', backgroundColor: 'grey', borderRadius: 5 }}
//         >
//           {' '}
//           hello StackBlitz
//         </h1>
//         <p>Start editing to see some magic happen :) </p>

//       </div>
//     );
//   }
// }
// export default class App extends React.Component{

//     // state={       // global declaration
//     //   name : " test"
//     // }

//   constructor(props){     //constructor declaration
//     super(props)
//     this.state={
//            name:"elaya"
//     }
//   }
//   render() {
//     return (
//       <div>
//         <h1
//           style={{ color: 'white', backgroundColor: 'grey', borderRadius: 5 }}
//         >
//           {' '}
//           hello StackBlitz
//         </h1>
//         <p>Start editing to see some magic happen :) </p>
//         <Hello
//           arr={[1, 2, 3, 4]}
//           name={this.state.name}
//           number={1}
//           onClick={(data) => {
//             alert(data.name);
//           }}
//           label="save it"
//         />
//         <Hello
//           arr={[1, 2, 3, 4]}
//           name={'yogi'}
//           number={2}
//           onClick={(data) => {
//             console.log('clear');
//           }}
//           label="close it"
//         /> <Test/>
//       </div>
//     );
//   }
// }
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.updateSubmit = this.updateSubmit.bind(this);
//     this.input = React.createRef();
//     console.log(props);
//   }
//   updateSubmit() {
//     alert('You have entered the UserName and CompanyName successfully.');
//   }
//   render() {
//     return (
//       <body id="top">
//         <form onSubmit={this.updateSubmit}>
//           <h1>Uncontrolled Form Example</h1>
//           <label>
//             Name:
//             <input type="text" ref={this.input} />
//           </label>
//           <label>
//             Password:
//             <input type="password" ref={this.input} />
//           </label>
//           <input type="submit" value="Submit" />
//         </form>
//       </body>
//     );
//   }
// }
// export default App;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      data_set: [],
      loadState: false,
      label: 'stackblitz',
    };
  }
  handleChange = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({ value: event.target.value });
  };
  handleSubmit() {
    alert('login successfully');
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{ textAlign: 'center' }}>
        <div>
          Username
          <input type="text" name="Username :" onChange={this.handleChange} />
          <br />
          Password
          <input type="text" name="Password :" onChange={this.handleChange} />
          <div>
            <input type="submit" value="Submit" />
          </div>
          {/* <h4>{this.state.value}</h4> */}
        </div>
      </form>
    );
  }
}

export default App;
