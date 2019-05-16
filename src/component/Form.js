import React from 'react'

class form extends React.Component{
  state = {
    name: '',
    calories: '',
    image: '',
    // num: '2',
    ingridient: '',
  }
  handleNameInput = (event) => {
    this.setState({ name: event.target.value })
  }  
  handleCaloriesInput = (event) => {
    this.setState({ calories: event.target.value })
  } 
   handleImageInput = (event) => {
    this.setState({ image: event.target.value })
  }
  handleSubmit = ()=>{
    const {name, calories, image} = this.state
    // const { addFood } =this.props
    this.props.addFood(name, calories, image)
  }
  // handleSubmitNumber = () => {
  //   this.props.getnum(this.state.num)
  // }

  render(){
    const {name, calories, image} = this.state
    return (
      <div>
      <input type="text" placeholder="name" value={name} onChange={this.handleNameInput}/>
      <input type="text" placeholder="number of calories" value={calories} onChange={this.handleCaloriesInput}/>
      <input type="text" placeholder="image" value={image} onChange={this.handleImageInput}/>
      <button onClick={this.handleSubmit}>submit</button>
      {/* <button onClick={this.handleSubmitNumber}>num</button> */}
    </div>
    )
  }
}

export default form;


