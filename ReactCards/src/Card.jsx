import React from "react";
import './Card.css';

export default function Card(props){
    const image="https://okdiario.com/img/2022/09/13/por-que-las-nutrias-marinas-se-sujetan-de-las-manos-cuando-duermen-655x368.jpg";
    return (
        <div class="container">
            <div class="name">
                <img src={props.img} alt="nutrias" width="60%" class="img"></img>
                <h1>{props.name}</h1>
            </div>
            <div class="info">
                <p>Phone: <b>{props.phone}</b></p>
                <a href="http://www.gmail.com"><p>Email: <b>{props.email}</b></p></a>
            </div>
        </div>
    );
}