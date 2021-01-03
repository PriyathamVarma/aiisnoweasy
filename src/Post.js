import React, {Component} from 'react';
import {connect} from 'react-redux';


class Post extends Component{


	render(){

		return(

<div className="app">

<p>{this.props.post.title}|{this.props.post.message}|<button onClick={ () => this.props.dispatch({type:'Delete_Post',id:this.props.post.id})}>Delete</button></p>
	

</div>

			);
	}
}



export default connect()(Post);