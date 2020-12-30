import React from 'react';

class SearchBar extends React.Component{
    state ={
        term :''
    }

    //to resolve context problem on Form submit 
    //Method 1 
    // constructor(){
    //     super();
    //     this.onFormSubmit = this.onFormSubmit.bind(this);
    // }
    // Method 2 is to <form className="ui form" onSubmit={e=>this.onFormSubmit(e)}>
    // Method 3 change onFormSubmit as an arrow funtion 


    // onInputChange(event){
    //     console.log(event.target.value)
    // }

    onFormSubmit=(event)=>{
        // To prevent default page refresh on form submit or enter
        event.preventDefault();
        console.log(this)
        this.props.onSearchBarSubmit(this.state.term);
        // console.log(this.state.term)
    }
    render(){
        return(
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="ui field">
                        <label>Image Search</label>
                         {/* we can do below also on click, ie call a callback function */}
                        {/* <input type="text" onChange={this.onInputChange}/> */}
                       
                        <input type="text" 
                        value={this.state.term}
                        onChange={(e)=> this.setState({term:e.target.value})}/>

                        {/* <input type="text" 
                        value={this.state.term}
                        onChange={(e)=> this.setState({term:e.target.value.toUpperCase()})}/> */}
                        
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;