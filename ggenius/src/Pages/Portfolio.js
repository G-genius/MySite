import React, { createElement, useEffect, useState } from "react";
function Portfolio() {
    return(
        <div>
            <div>
                <h3 className="info">Портфолио</h3>
            </div>
            <div>
                <ul className="blocks">
                    <li className="block1">
                        <a href="">
                            <img src="https://picsum.photos/200/300" alt="hz"/>
                        </a>
                        <div className="description">
                            <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, praesentium.</h4>
                            <p>Mobile</p>
                            <button>Подробнее</button>
                        </div>
                    </li>

                    <li className="block2">
                        <a href="">
                            <img src="https://picsum.photos/200/300" alt="hz"/>
                        </a>
                        <div className="description">
                            <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, vero.</h4>
                            <p>Mobile</p>
                            <button>Подробнее</button>
                        </div>
                    </li>
                    <li className="block3">
                        <a href="">
                            <img src="https://picsum.photos/200/300" alt="hz"/>
                        </a>
                        <div className="description">
                            <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, aut.</h4>
                            <p>Mobile</p>
                            <button>Подробнее</button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Portfolio