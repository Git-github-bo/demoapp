import React, { Component } from 'react'
import { HotListWrap } from './styledCookbook'
import {connect} from "react-redux";

@connect((state) =>({
    hotlist:state.home.list
}))
 class HotList extends Component {
    render() {
        return (
            <HotListWrap>
                <header>精品好菜</header>
                <div>
                   {
                       this.props.hotlist.map(value =>(
                        <figure>
                        <img src={value.img} alt=""/>
                        <figcaption>
                            <h3>{value.name}</h3>
                            <h3>{value.all_click}</h3>
                        </figcaption>
                    </figure>

                       ))
                   }
                </div>
            </HotListWrap>
        )
    }
}
export default HotList
