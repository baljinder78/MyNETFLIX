import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Appmain from "./Components/index"
import "./CSS/index.css";

function App() {
  return (
    <div className="App">
      <Appmain/>
      
    </div>
  );
}

export default App;

// import axios from 'axios';
// import { useState } from 'react';
// export default function App() {
//   const [data, setdata] = useState({});

//   async function handleclickji() {
//     let v = {
//       comment: 'the comment ji',
//     };
//     let c = await axios.post(
//       'https://reddit-clone-backend-gb10.herokuapp.com/ken_kaneki/post/2/comment/create',
//       v
//     );
//     setdata(c.data);
//   }

//   return (
//     <div className='App'>
//       <button onClick={handleclickji}>dabooooooo</button>
//     </div>
//   );
// }
