import React, {createElement, useEffect, useState} from "react";

function Main() {
    return (
        <div>
            <h3 className="info">Немного из моих последних работ</h3>
            <div className="main">
                <div>
                    <ul className="blocks">
                        <li className="block1">
                            <a href="">
                                <img src="https://picsum.photos/200/300" alt="hz"/>
                            </a>
                            <div className="description">
                                <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, praesentium.</h4>
                                <p>Mobile</p>
                            </div>
                        </li>

                        <li className="block2">
                            <a href="">
                                <img src="https://picsum.photos/200/300" alt="hz"/>
                            </a>
                            <div className="description">
                                <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, vero.</h4>
                                <p>Mobile</p>
                            </div>
                        </li>
                        <li className="block3">
                            <a href="">
                                <img src="https://picsum.photos/200/300" alt="hz"/>
                            </a>
                            <div className="description">
                                <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, aut.</h4>
                                <p>Mobile</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
)
}
export default Main