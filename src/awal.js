import React, { Component } from 'react';
import './squarec.css'; //css table dan yang lain

function awal(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
        
    );
}

export default awal; //penutup atau bisa di sebut pengeksekusi