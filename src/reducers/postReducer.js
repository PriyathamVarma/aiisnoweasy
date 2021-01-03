const postReducer = (state=[],action) =>{

switch(action.type){

	case 'Add_Post':

	 return state.concat([action.data]);

	case 'Delete_Post':
	
	 return state.filter((post) => post.id !== action.id); 

	case 'default':

	 return state;


}

}

export default postReducer;