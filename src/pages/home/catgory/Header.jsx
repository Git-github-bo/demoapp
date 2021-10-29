import React, { Component } from 'react'
import {HeaderWrap} from "./styledCategory"
import { withRouter } from "react-router-dom"

class Header extends Component {
  state={
    dir:"category"
  }
  hanleClick=dir=>{
    return ()=>{
      this.setState({
        dir
      })
      this.props.history.push(`/${dir}`)
    }
  }
  render() {
    return (
      <HeaderWrap>
        <ul>
          <li onClick={this.hanleClick("category")}  className={this.state.dir==="category"?"active":""}>分类</li>
          <li onClick={this.hanleClick("material")} className="active" className= {this.state.dir==="material"?"active":""}>食材</li>
          <li className={`silder ${this.state.dir==="material"?"right":""}`}></li>
        </ul>
      </HeaderWrap>
    )
  }
}
export default withRouter(Header)