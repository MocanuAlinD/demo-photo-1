import React, { Component } from 'react';
import style from './Burger.module.css'

class Burger extends Component {
    render() {
        return (
            <div className={style.toggleButton} onClick={() => this.props.data.changeActive(!this.props.data.active)}>
                <div className={style.line1}></div>
                <div className={style.line2}></div>
                <div className={style.line3}></div>
            </div>
        );
    }
}

export default Burger;


{/* <div className={style.toggleButton} onClick={() => this.props.data.changeUnit(!this.props.data.unit)}></div> */}