import React from 'react';
import 'bulma/css/bulma.css';



class foodBox extends React.Component {
  state = {
    quantity: 1,
  }
  handleQuantityInput = (event) => {
    this.setState({ quantity: event.target.value })
  }
  handleAdd = ()=>{
    this.props.showIndex(this.props.index,this.state.quantity)
  }
  render() {
    // console.log('this.props foodbox', this.props)

    const {name, calories, image } = this.props.food;
    return (
     <div className="box">
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={image} alt={name}/>
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{name}</strong> <br />
          <small>{calories}</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
          <input
            className="input"
            type="number" 
            value={this.state.quantity}
            onChange={this.handleQuantityInput}
          />
        </div>
        <div className="control">
          <button className="button is-info" onClick={this.handleAdd}>
            +
          </button>
        </div>
      </div>
    </div>
  </article>
</div>
    )


  }
}

export default foodBox;
