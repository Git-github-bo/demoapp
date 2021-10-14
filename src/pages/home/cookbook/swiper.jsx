import React, { Component } from 'react'
import {Carousel} from "antd-mobile"
import swiper from "assets/swiper-1.png"
import {SwiperWrap} from "./styledCookbook"

export default class Swiper extends Component {
  render() {
    return (
        <SwiperWrap>
      <Carousel
      autoplay={false}
      infinite
      beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
      afterChange={index => console.log(`slide to`,index)}
      >
    <img src={swiper}/>
      </Carousel>
      </SwiperWrap>
    )
  }
}
