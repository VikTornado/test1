import React from "react"
import sidebar from "./Sidebar.module.css"
import app from "../../App.css"

const Sidebar = (props) => {
    return(
        <div className={ sidebar.sidebar}>
            <div className="container">
                <ul className={ sidebar.sidebar__list }>
                    <li className={ sidebar.item }>sidebar111</li>
                    <li className= { sidebar.sidebar__item }>sidebar</li>
                    <li className={ sidebar.sidebar__item }>sidebar</li>
                    <li className={ sidebar.sidebar__item }>sidebar</li>
                    <li className={ sidebar.sidebar__item }>sidebar</li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar