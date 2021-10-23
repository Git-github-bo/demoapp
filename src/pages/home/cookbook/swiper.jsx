import React, { Component } from 'react'
import {Carousel} from "antd-mobile"

import {SwiperWrap} from "./styledCookbook"

import { connect } from 'react-redux'


const mapState=state=>({
  list:state.list
})
 class Swiper extends Component {
  render() {
    return (
        <SwiperWrap>
      <Carousel
      autoplay={false}
      infinite
      beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
      afterChange={index => console.log(`slide to`,index)}
      >
       {
           this.props.list.slice(0.5).map((value)=> <img key={value.id} src={value.img} />)
       }
      </Carousel>
      </SwiperWrap>
    )
  }
}
export default connect(mapState)(Swiper)
