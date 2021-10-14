import React, { Component } from 'react'
import searchImg from "assets/search.png"
import  {SearchWarp}  from "./styledSearch"
export default class Search extends Component {
  render() {
    return (
        <SearchWarp width ="0px">
         <div>
        <img src={searchImg} alt="" />
        <span>想吃什么搜索这里，如川菜</span>
        </div>
        </SearchWarp>  
    )
  }
}
