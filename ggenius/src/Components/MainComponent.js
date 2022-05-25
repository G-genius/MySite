import {Link} from "react-router-dom";

function Main() {
    return (
        <div>
            <h3 className="info">Немного из моих последних работ</h3>
            <div className="main">
                <div>
                    <ul className="blocks">
                        <li className="block1">
                            <Link to="/whattowear">
                                <img className="whattowear" src="/img/ru.png" alt="hz" width="200px"/>
                            </Link>
                            <div className="description">
                                <h4>Не знаете, как правильно одеться чтобы было комфортно? Это приложение - решение!</h4>
                                <p>WhatToWear</p>
                                <Link to="/whattowear">Подробнее</Link>
                            </div>
                        </li>
                    </ul>
                    <br/><br/><br/><br/><br/><br/>


                </div>
            </div>
        </div>
)
}
export default Main