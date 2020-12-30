import React from 'react';

class ImageCard extends React.Component{
    constructor(props){
        super(props);
        this.state = { spans:0}
        this.imageRef = React.createRef();
    }
    componentDidMount(){
        // console.log(this.imageRef); // shows on inspect as chrome 
        //                             // pulls the details at that particular instace
        // console.log(this.imageRef.current.clientHeight); // shows zero as image is actually not yet downloaded

        this.imageRef.current.addEventListener('load',this.setSpans);
    }
    setSpans = ()=>{
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height/10);
        this.setState({spans})
    }
    render(){
        const { description, urls} = this.props.image;
        return(
            <div style={{gridRowEnd:`span ${this.state.spans}`}}>
                <img ref={this.imageRef} src={urls.regular} alt={description}/>
            </div>
        )
    }
}

export default ImageCard;