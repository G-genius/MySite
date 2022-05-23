import React, { createElement, useEffect, useState } from "react";
import {Link, Route, Routes} from "react-router-dom";
function Portfolio() {
    return(
        <div>
            <div>
                <h3 className="info">Портфолио</h3>
            </div>
            <div>
                <ul className="blocks">
                    <li className="block1">
                        <a href="/whattowear">
                            <img className="whattowear" src="/img/ru.png" alt="hz" width="200px"/>
                        </a>
                        <div className="description">
                            <h4>Не знаете, как правильно одеться чтобы было комфортно? Это приложение - решение!</h4>
                            <p>WhatToWear</p>
                            <a href="/whattowear">Подробнее</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Portfolio