import React from "react"
import footer from "./Footer.module.css"

const Footer = () => {
    return(
        <div className={ footer.footer}>
            <div className="container">
                <ul className={ footer.footer__list }>
                    <li className={ footer.footer__item }>footer</li>
                    <li className={ footer.footer__item }>footer</li>
                    <li className={ footer.footer__item }>footer</li>
                    <li className={ footer.footer__item }>footer</li>
                    <li className={ footer.footer__item }>footer</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer