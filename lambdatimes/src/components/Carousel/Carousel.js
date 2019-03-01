import React, { Component } from 'react';
import { carouselData } from '../../data'
import styled from 'styled-components'
// Complete this Carousel 
const CarouselImage = styled.img`
  display: block !important;
`;

export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      images: [],
      current: 0
    }
  }
  componentDidMount(){
    this.setState({
      images: carouselData,
    })
  }

  leftClick = () => (this.state.current - 1 < 0 ) ? this.setState({current: this.state.images.length - 1 }):this.setState({current: this.state.current - 1})
  // Readable Form
  // {
  //   const newImage = this.state.current - 1;
  //   if(newImage < 0){
  //     this.setState({
  //       current: this.state.images.length - 1,
  //     })
  //   }
  //   else {
  //     this.setState({
  //       current: newImage
  //     })
  //   }
  // }

  rightClick = () => (this.state.current + 1 > this.state.images.length - 1) ? this.setState({ current: 0}) : this.setState({ current: this.state.current + 1 })
  // Readable Form
  // {
  //   const newImage = this.state.current + 1;
  //   if(newImage > this.state.images.length - 1){
  //     this.setState({
  //       current: 0,
  //     })
  //   }
  //   else {
  //     this.setState({
  //       current: newImage
  //     })
  //   }
  // }

  selectedImage = () => {
    return <CarouselImage src={this.state.images[this.state.current]} />
  }
  
  render(){
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        {this.selectedImage()}
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}