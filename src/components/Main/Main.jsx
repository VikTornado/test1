import React from "react"
import main from "./Main.module.css"

const Main = () => {
    return(
        <div className={ main.main}>
            <div className="container">
                <ul className={ main.main__list }>
                    <li className={ main.main }>1</li>
                    <li className={ main.main }>2</li>
                    <li className={ main.main }>3</li>
                    <li className={ main.main }>4</li>
                    <li className={ main.main }>5</li>
                </ul>
            </div>
        </div>
    )
}

export default Main