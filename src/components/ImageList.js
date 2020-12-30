import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = (props) =>{
    // const images = props.images.map(image => {
    //     return <img key={image.id} src={image.urls.regular}/>
    // })
    //Destructuring
    // const images = props.images.map(({id,description,urls}) => {
    //     return <img alt={description} key={id} src={urls.regular}/>
    // })
    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image}/>
    })
    return <div className="image-list">{images}</div>;
}

export default ImageList;