import React from 'react'
import Styles from "../Input/Input.module.css"


function Input() {
    return (
        <div className={Styles.cont}>
            <div className={Styles.box}>
                <input type="text" placeholder='Put your links hear' className={Styles.search} />
                <button className={Styles.btn}> Check</button>
            </div>
            <div className={Styles.check}>This is good app</div>
        </div>
    )
}

export default Input