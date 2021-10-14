import React, { Component } from 'react'
import Header from './Header'
import HotCate from './HotCate'
import Swiper from "./swiper"
import Search from "@/search/Search"
export default class Cookbook extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Swiper/>
        <Search/>
        <HotCate/>
      </div>
    )
  }
}
