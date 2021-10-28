import React, { Component } from 'react'
import Header from "./Header.jsx"
import Classify from "../../../components/Category/Category.jsx"
import Search from "../../../components/search/Search.jsx"
import { CateWrap } from "./styledCategory"

export default class Category extends Component {
    render() {
        return (
            <CateWrap>
                <Header />
                <Search />
                <Classify />
            </CateWrap>
        )
    }
}
