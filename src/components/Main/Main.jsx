import React from "react"
import main from "./Main.module.css"
import Posts from "./Posts/MyPosts/Posts"

const Main = () => {
    return(
        <div className={ main.main}>
            <div className="container">
                <ul className={ main.list }>
                    <li className={ main.item }>1</li>
                    <li className={ main.item }>1</li>
                    <li className={ main.item }>1</li>
                    <li className={ main.item }>1</li>

                </ul>
                <textarea>wkjcbwkj</textarea>
                <span>Push me</span>
                <Posts message="jkdcalkdhclsk" likeCount=' 2'/>
                <Posts message="11111alkdhclsk" likeCount=' 25'/>
            </div>
        </div>
    )
}

export default Main