// Hello
let myElement = "Hello world";

// Basic rules
myElement = <img src="https://placehold.co/600x400" >; // wrong</img>
myElement = <img src="https://placehold.co/600x400" />; // correct

// Basic Rules
// myElement = (
//     <p>Learn Javascript</p>
//     <p>Learn React</p>
// ); // wrong
myElement = (
    <div>
        <p>Learn Javascript</p>
        <p>Learn React</p>
    </div>
); // correct

// Statement in JSX
let myText = "Learn React";
myElement = (
    <div>
        <h3>{myText}</h3>
    </div>
);

// Array Processing
let items = ["Table", "Handphone", "Computer"];
myElement = (
    <ul>
        {items.map((item, index) => <li>{item}</li>)}
    </ul>
);

const myApp = myElement;

ReactDOM.createRoot(document.getElementById('root')).render(myApp);