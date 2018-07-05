import React from "react";
import ReactDOM from "react-dom";
import './App.css';
// import style from "./index.css";

var str = '{"languageDetection": {"documents": [{"id": "54345597-3cfc-4958-ae06-17e9072af392","detectedLanguages": [ {  "name": "English",  "iso6391Name": "en",  "score": 1.0  }  ]  }  ],  "errors": []  },"sentiment": {  "documents": [{  "id": "54345597-3cfc-4958-ae06-17e9072af392",    "score": 0.90802371501922607  }],  "errors": []},"entities": {  "documents": [  {  "id": "54345597-3cfc-4958-ae06-17e9072af392","entities": []  }],  "errors": []}}'
try {
  var obj = JSON.parse(str);
console.log('languageDetection obj:', obj.languageDetection.documents[0])
console.log('sentiment obj:', obj.sentiment.documents[0])
 console.log('entities obj:' , obj.entities.documents);
  console.log('getting error obj for example:' , obj.entities.errors);
var text = '{ "name":"Aimee", "birth":"1990-12-22T11:11:11.011", "city":"Boston", "phone":"401-269-1640"}';
var obj2 = JSON.parse(text);
obj2.birth = new Date(obj2.birth);
console.log(obj2);

} catch (ex) {
  console.error(ex);
}

const App = () => {
  return (
    <div>
      <p>React here!</p>
    </div>
  );
};
export default App;
ReactDOM.render(<App />, document.getElementById("app"));
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Note:Not to Optimized yet as still building.</h1>
//         </header>
//         <p className="App-intro">
//         checkout dev tools to see <code>alt+cmd+I</code> node.
//         </p>
//       </div>
//     );
//   }
// }
//
//
// export default App;
