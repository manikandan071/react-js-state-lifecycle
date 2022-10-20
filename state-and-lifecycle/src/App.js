
import './App.css';

import React, { Component } from 'react'
let arr=[];
export class App extends Component {
  constructor(){
    super();
    this.state={
      product:[{id:1,brand:"redmi",price:"12500",color:"black",qty:1},
      {id:2,brand:"realme",price:"12500",color:"black",qty:1},
      {id:3,brand:"oneplus",price:"12500",color:"black",qty:1},
      {id:4,brand:"oppo",price:"12500",color:"black",qty:1}
    ],
    cartItem:[]
    }
  }
  myFunction=(id)=>{
    console.log(id);
    let res=arr.find((item)=>item.id === id)
    if(res){
      var temp=arr.map(function(item){
        if(item.id === id){
          item.qty++;
          return item;
        }
        else {
          return item;
        }
      });
      arr=temp;
    }
    else{
      var temp1=this.state.product.find((item)=>item.id === id)
      arr.push(temp1);
    }
    // let x=this.state.product.find((item)=>item.id === id);
    // console.log(x);
    // arr.push(x);
    // arr.map((value))
    // console.log(arr);
    // let temp=arr.map((item)=>{
    //   if(item.id === id){
    //     return item.qty++;
    //   }
    //   else return 
    // })
    // this.state.cartItem.push({x});
    this.setState({cartItem:arr}); 
  }
  render() {
    return (
      <div>
        <h1>Product :</h1>
        <div className='card'>
        {
          this.state.product.map((item,i)=>{
            return(
              <div className='product' key={i}>
                <h1>{item.brand}</h1>
                <h1>{item.color}</h1>
                <h1>{item.price}</h1>
                <button onClick={()=>this.myFunction(item.id)}>click</button>
              </div>
            )
          })
        }
      </div>
      <h1>Add cart :</h1>
      <div className='card'>
      {
          this.state.cartItem.map((iteam,i)=>{
            return(
              <div className='product' key={i}>
                <h1>{iteam.brand}</h1>
                <h1>{iteam.color}</h1>
                <h1>{iteam.price}</h1>
                <h1>{iteam.qty}</h1>
              </div>
            )
          })
        }
      </div>
      </div>
    )
  }
}

export default App;
