import {Link} from "react-router-dom";

function Main() {
    return (
        <div>
            <h3 className="info">Немного из моих последних работ</h3>
            <div className="main">
                <div>
                    <ul className="blocks">
                        <Link to="/whattowear">
                            <li className="block">

                                <div className="blockImage">
                                    <img className="image" src="/img/whatToWear.png" alt="hz" width="400px"/>
                                </div>


                                <div className="description">
                                    <p>Первое мобильное приложение "WhatToWear"</p>
                                    <h4>Kotlin + API</h4>
                                </div>
                            </li>
                        </Link>
                        <li className="block">
                            <a href="https://nitochkaigolochka40.ru">
                                <img className="image" src="/img/nitochkaigolochka.png" alt="hz" width="400px"/>
                            </a>
                            <div className="description">
                                <p>Интернет-магазин "Ниточка & Иголочка 40"</p>
                                <h4>ASP.NET, React</h4>
                                <a href="https://nitochkaigolochka40.ru">Подробнее</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Main