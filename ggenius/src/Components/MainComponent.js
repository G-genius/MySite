import {Link} from "react-router-dom";

function Main() {
    return (
        <div>
            <h3 className="info">Немного из моих последних работ</h3>
            <div className="main">
                <div>
                    <ul className="blocks">
                        <li className="block">
                            <Link to="/whattowear">
                                <img className="image" src="/img/ru.png" alt="hz" width="200px"/>
                            </Link>
                            <div className="description">
                                <p>WhatToWear</p>
                                <h4>Погодное мобильное приложение</h4>
                                <Link to="/whattowear">Подробнее</Link>
                            </div>
                        </li>
                        <li className="block">
                            <Link to="/whattowear">
                                <img className="image" src="/img/ru.png" alt="hz" width="200px"/>
                            </Link>
                            <div className="description">
                                <p>WhatToWear</p>
                                <h4>Погодное мобильное приложение</h4>
                                <Link to="/whattowear">Подробнее</Link>
                            </div>
                        </li>
                        <li className="block">
                            <Link to="/whattowear">
                                <img className="image" src="/img/ru.png" alt="hz" width="200px"/>
                            </Link>
                            <div className="description">
                                <p>WhatToWear</p>
                                <h4>Погодное мобильное приложение</h4>
                                <Link to="/whattowear">Подробнее</Link>
                            </div>
                        </li>



                    </ul>
                </div>
            </div>
        </div>
)
}
export default Main