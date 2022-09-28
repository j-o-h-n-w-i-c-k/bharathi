import React, { Component } from 'react';
import './style.css';

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
  return <div>hello</div>;
}
export default class elaya extends Component {
  render() {
    return (
      <div>
        <h1
          style={{ color: 'white', backgroundColor: 'grey', borderRadius: 5 }}
        >
          {' '}
          hello stackblits
        </h1>
        <p>Start editing to see some magic happen :) </p>
        <Hello arr={[1, 2, 3, 4]} name={'elayabharathi'} number={1} />
      </div>
    );
  }
}
// export default class App extends Component
// {
//   constructor(props) {
//     super(props)
//     this.state = {
//       name: "elayabharathi",
//       data_set: [],
//       loadState: false

//     }
// }

//   async componentDidMount() {
//     let data = await axios.get('https://api.github.com/users/hadley/orgs')
//     this.setState({data_set: data.data, loadState: true})

//   }
//   demo = (data) => {
//       alert(data.name+" "+"dfsdgfs")

//     }

//     render () {

//       const {name} = this.state
//       if(this.state.loadState)
//       {
//       return (
//         <div>
//           <h1 style={{color: 'white', backgroundColor: 'grey', borderRadius: 10}} className="ssdf" id="asafc">Hello StackBlitz!</h1>
//           <p>Start editing to see some magic happen :)</p>
//           <Hello arr={[1,2,3,4]} name={this.state.name + " || "+name} number={2} onClick={this.demo} label="save it" {...this.state} {...this.props}/>
// <Hello arr={[1,2,3,4]} name={"yogi"} number={2} onClick={(data) => {
//             console.log("test")
//           }} label="close"/>
//           <Test />
//           {
//             (this.state.data_set.length > 0) &&
//             this.state.data_set.map((data,indx) => {
//                if(data.login == "RConsortium")
//               {
//                 return <div key={indx}>{data.description}
//                 <h1>adsgfvdsvfsdgvd</h1>
//                 <img style={{width: 50, height: 50, margin: 10}} src={data.avatar_url}/>
//                 </div>
//               }
//               else
//               {
//               return <div key={indx}>{data.description}
//               <img style={{width: 50, height: 50, margin: 10}} src={data.avatar_url}/>
//               </div>
//               }
//             })
//           }
//           {
//             (this.state.data_set.length <= 0) ? "test":""
//           }
//         </div>
//       );
//         }
//         else
//         {
//           return <div> loading...</div>
//         }
//     }
// }
