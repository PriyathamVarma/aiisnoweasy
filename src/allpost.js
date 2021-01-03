import './App.css';
import {connect}  from 'react-redux';
import React, {Component} from 'react';
import Post from './Post';


class AllPost extends Component{



	render(){



		if(this.props.posts){


			return (

				<div className="App">

				<p>{this.props.posts.map((post)=><Post key={post.id} post={post}/>)}</p>	
					

				</div>

				);
		}


		else{


			return (

<p>No Data</p>

			);
		}
	}
}


const mapStateToProps =(state) =>{

return {


	posts:state  

}


}


export default connect(mapStateToProps) (AllPost);
