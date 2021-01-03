import './App.css';
import React,{Component} from 'react';
import { connect } from 'react-redux';

class PostForm extends Component {

    handleSubmit = (e) => {
    e.preventDefault();
    const title = this.getTitle.value;
    const message =  this.getMessage.value;
    const data = {
      id: new Date(),
      title,
      message
    }

    this.props.dispatch({

type: 'Add_Post',data

    });

    this.getTitle.value='';
    this.getMessage.value='';
  }

render(){


return (


<div className="App">

<form onSubmit={this.handleSubmit}>

<input type="text" placeholder="title" ref={(input)=>this.getTitle = input} required/><br/><br/>


<textarea col="5" rows="5"  placeholder="msg here"  ref={(input)=>this.getMessage = input}> </textarea><br/>

<button>POST</button>

</form>


</div>


  );

}


}

export default connect() (PostForm);
