import React from "react"
import header  from "./Header.module.css"

const Header = () => {
    return(
        <header className={ header.header }>
            {/* <div className="container">   */}
                <div className={ header.navbar }>
                    <div> 
                        <img src="../../logo.png" alt="img" className={ header.header__img } />
                    </div>
                    <div className={ header.navbar__menu }>
                        <ul className={ header.navbar__list }>
                            <li className={ ` ${header.navbar__item_active}` }>Home</li>
                            <li className={ header.navbar__item }>Page</li>
                            <li className={ header.navbar__item }>Contacns</li>
                            <li className={ header.navbar__item_active }>Products</li>
                            <li className={ header.navbar__item }>Cart</li>
                        </ul>
                    </div>
                </div>
            {/* </div> */}
        </header>
    )
}

export default Header