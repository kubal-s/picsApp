import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from'./SearchBar';
import ImageList from './ImageList';

class App extends React.Component{
    state = { images :[]}
    //async and await is easlier then the .then used after axios
    //alternative
    //axios.get('https://api.unsplash.com/search/photos',{
    //     params: {
    //         query: term
    //     },
    //     headers:{
    //         Authorization: 'Client-ID A0LajO_BL1lmSvkwT6MlsFD620CsB-8mCUKtiXr0cdY'
    //     }
    // }).then((response)=>console.log(response))
    onSearchSubmit = async (term) => {
       const response = await unsplash.get('/search/photos',{
            params: {
                query: term
            }
        });
        console.log(this); //when onSearchSubmit is not an arrow function onSearchSubmit is callback function and the this becomes 
                           // onSearchBarSubmit which is the props    
        this.setState({images:response.data.results})
        // console.log(response)
    }
    render(){
        return (
            <div className="ui container" style={{marginTop:'20px'}}>
                <SearchBar onSearchBarSubmit={this.onSearchSubmit} />
                Found : {this.state.images.length}
                <ImageList images={this.state.images}/>
            </div>
        )
    }
}

export default App;