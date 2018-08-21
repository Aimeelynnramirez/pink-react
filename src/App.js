import React from "react";
import ReactDOM from "react-dom";
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import style from "./index.css";

var str = '{"languageDetection": {"documents": [{"id": "54345597-3cfc-4958-ae06-17e9072af392","detectedLanguages": [ {  "name": "English",  "iso6391Name": "en",  "score": 1.0  }  ]  }  ],  "errors": []  },"sentiment": {  "documents": [{  "id": "54345597-3cfc-4958-ae06-17e9072af392",    "score": 0.90802371501922607  }],  "errors": []},"entities": {  "documents": [  {  "id": "54345597-3cfc-4958-ae06-17e9072af392","entities": []  }],  "errors": []}}'
try {
  var obj = JSON.parse(str);
console.log('languageDetection obj:', obj.languageDetection.documents[0])
console.log('sentiment obj:', obj.sentiment.documents[0])
 console.log('entities obj:' , obj.entities.documents);
  console.log('getting error obj for example:' , obj.entities.errors);

} catch (ex) {
  console.error(ex);
}
//this is data for show-below
try {
var text = '{ "name":"Aimee", "birth":"1990-12-22T11:11:11.011", "city":"Boston", "phone":"401-269-1640"}';
var text1 ='hey there, this is some good tea!';
//this is data for show
//this is data for parsing
var example =  JSON.parse(text);
console.log(example.name,example.birth,example.city,example.phone,'this is example of parsed data from text');
//this is data for parsing passing the string

var duck = new Date(example.birth);
console.log(duck, 'this is example of text.birth now to example.birth of readable format');

} catch (ex) {
  console.error(ex);
}
//this is an example of function passing attributes through possible input of unset
function Data(name, birth, city , phone) {
  this.name = name;
  this.birth = birth;
  this.city = city;
  this.phone = phone;


}
// TODO:create an input area for data to go in setting
var data1 = new Data('Macky', '1990-12-22T11:11:11.011', 'North Providence', '100-000-2789');
console.log(data1, 'this is my puppys name set after this.name data');
// this now has been set to data1.name etc such as props without propstypes passing.
const App = () => {
  return (
    <div>
       <AppBar position="static" style={{backgroundColor:'pink'}}>
        <Toolbar>
          <Typography variant="title" color="inherit">
           Welcome to a Pink Navigation Bar.
          </Typography>
        </Toolbar>
      </AppBar>
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
