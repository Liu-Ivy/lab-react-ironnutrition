import React, { Component } from 'react';
import './App.css';
import FoodBox from './component/FoodBox';
import foods from './data/foods.json';
import Form from './component/Form';
import Search from './component/Search';
// import ListBox from './component/ListBox'



class App extends Component {
  state = {
    foods: foods,
    isVisible: false,
    newInput: '',
    foodList: [],
  }
  handleForm=(name, calories, image)=>{
    if(this.state.isVisible) {
      const newFood = {name, calories, image}
      const {foods} = this.state
      const newFoods = [...foods,newFood]
      console.log('name', newFoods)
      this.setState({
        foods: newFoods,
        isVisible: false
      })

    } else {
      this.setState({isVisible: true})
    }
  }
  handleSearchBar = (input)=>{
    console.log('input', input)
    this.setState({newInput:input})
  }

  
  
  render() {
    const { foods, isVisible , newInput, foodList} = this.state
    const sum = foodList.reduce((accu,current) => { return accu+current.calories*current.quantity},0)
    // let sum = 0
    //   for (let i = 0; i < foodList.length; i++){
    //     sum += foodList[i].quantity * foodList[i].calories;
    //   }
    
    return (
      <div className="App">
        <Search searchInput={this.handleSearchBar}/>
        {isVisible ? <Form addFood={this.handleForm}  getnum={this.getnumber}/> : <button onClick={this.handleForm}>Add Food</button> }
        <div className="columns">
          <div className="column">
        {
          foods.map((food,index)=>{
            if(food.name.toLowerCase().includes(newInput.toLowerCase())){
            return <FoodBox
                    food={food}
                    index={index}
                    key={index}
                    showIndex={(idx,quantity)=>{
                      const newFood= Object.assign({},foods[idx])
                      newFood.quantity=quantity;
                      const newFoodList= [...foodList, newFood];
                      console.log(idx)
                      this.setState({foodList: newFoodList})
                      console.log(foodList)
                    }}
                    />            
            }else {
             return null;
            }
          })
        }
          </div>
          <div className="column">
            <header>Today's Foods</header>
             <ul>
               {foodList.map((food) => {
                 return (
                   <li>
                    <p> {food.quantity} {food.name} = {food.quantity * food.calories} cal</p>
                   </li>
                   )
               })}
             </ul>
              
             <h3>Total {sum}</h3>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
