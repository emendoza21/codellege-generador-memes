// import React, { Component } from "react";
// import App from "./App";

// class Template extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       items: [],
//       isLoaded: false,
//     };
//   }

//   componentDidMount() {
//     fetch("https://api.imgflip.com/get_memes")
//       .then((res) => res.json())
//       .then((json) => {
//         this.setState({
//           items: json,
//         });
//       });
//   }

//     render() {
//         var { isLoaded, items } = this.state;
//         if (!isLoaded) {
//             return <div>Loading...</div>
//         }
//         else {
//             return (
//                 <div>
//                     <ul>
//                         {items.map(item => (
//                             <li key={item.id}>
//                                 { item.url}
//                             </li>
//                         ))};
//                     </ul>
//                 </div>
//             );
//         }

// export default App;
