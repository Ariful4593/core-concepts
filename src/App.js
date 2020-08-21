import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  var name = {
    myName: "Ariful ISLAM",
  }
  var style = {
    color: "lightSalmon",
   
  }
  // const roll = [1,2,3,4]
  const products = [
    {name: 'Photoshop', price: '$90.99'},
    {name: 'Illustrator', price: '$60.45'},
    {name: 'PDF Reader', price: '$40.23'},
    {name: 'Adove XD', price: '$40.23'},
    {name: 'Adove Recorder', price: '$40.23'},
  ]
  const productName = products.map(x => x);
  console.log(productName)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style={style}> My name is: {name.myName}</p>
        
        {/* Dynamically content updated... */}
        {/* <ul>
          {
            productName.map(x => <li>{x.name} price is: {x.price}</li>)
          }
          
        </ul> */}
        {/* <Product name={products[0].name} price={products[0].price} ></Product> */}

        {/* {
          products.map(x => <Product product={x}></Product>)
        } */}
        
        
        {/* Statically content updated.... */}
        {/* <Product product={products[0]} ></Product>
        <Product product={products[1]}  ></Product>
        <Product product={products[2]}  ></Product> */}
        {/* <Person name="Ariful Islam" id={roll[0]}></Person>
        <Person name="Shorif Islam" id={roll[1]}></Person>
        <Person name="Kalim Islam" id={roll[2]}></Person>
        <Person name="Solim Islam" id={roll[3]}></Person> */}


      {/* <Counter></Counter> */}
        <User></User>

      </header>
    </div>
  );
}

function User(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return(
    <div>
      <h3>Dynamic User: {users.length}</h3>
      <ul>
        {
          users.map(x => <li>{x.name}</li>)
        }
      </ul>
      
    </div>
  )
}


// function Counter(){
//   const [count, setCount] = useState(0);
//   // const handleIncrease = () => setCount(count + 1);
//   // {
//   //   const newCount = count + 1;
//   //   setCount(newCount);
//   // }
//   return(
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={() => setCount(count - 1)}>Decrease</button>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//     </div>
//   )
// }


// function Product(props){
//   // console.log(props)

//   const productStyle = {
//     border: '1px solid gray',
//     backgroundColor: 'lightgray',
//     borderRadius: '5px',
//     width: '500px',
//     height: 'auto',
//     float: 'left'
//   }
//   const {name, price} = props.product;
//   return(
//     <div style={productStyle}>
//       <h2>{name}</h2>
//       <h1>{price}</h1>
//       <button>Buy Now</button>
//     </div>
//   )
// }

// function Person(props){
//   const personStyle = {
//     border: '2px solid yellow',
//     margin: '10px',
//   }
//   return(
//     <div style={personStyle}>
//       <h1>Name: {props.name} </h1>
//       <h3>Roll: {props.id}</h3>
//     </div>
//   )
// }

export default App;
