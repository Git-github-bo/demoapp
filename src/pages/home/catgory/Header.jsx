import React, { Component } from 'react'
import {HeaderWrap} from "./styledCategory"
export default class Header extends Component {
  state={
    dir:"left"
  }
  hanleClick=dir=>{
    return ()=>{
      this.setState({
        dir
      })
    }
  }
  render() {
    return (
      <HeaderWrap>
        <ul>
          <li onClick={this.hanleClick("left")}  className={this.state.dir==="left"?"active":""}>分类</li>
          <li onClick={this.hanleClick("right")} className="active" className= {this.state.dir==="right"?"active":""}>食材</li>
          <li className={`silder ${this.state.dir==="right"?"right":""}`}></li>
        </ul>
      </HeaderWrap>
    )
  }
}