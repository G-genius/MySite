import {Link} from "react-router-dom";

function WhatToWear() {
    return (
        <div>
            <h2 className="info">What To Wear - Одевайся правильно</h2>
            <div>
                <img className="wtw1" src="/img/wtw.png"/>
            </div>
            <div className="infoWtw">
                <p>Не знаете, как правильно одеться чтобы было комфортно? Это приложение - решение!</p>
                <p>Сталкивались с тем, что трудно решить, что надеть сегодня по погоде? Или же вам очень жарко или очень
                    холодно, когда выходите на улицу? Это приложение является решением вашей проблемы.
                    Смешанный климат погоды, приложение с помощью специального алгоритма сможет подобрать для вас
                    идеальное сочетание одежды, чтобы вам было комфортно.</p>
            </div>
            <div className="functionsWtw">
                <ul>
                    <strong>Функции приложения:</strong>
                    <p/>
                    <li>Узнай, какую одежду одеть, чтобы было комфортно</li>
                    <li>Текущая погода, осадки, сила ветра, облачность, влажность</li>
                    <li>Предложения одежды по гендеру</li>
                    <li>Различные виды одежды, обуви, аксессуаров</li>
                    <li>Получение уведомление, как правильно одеться</li>
                    <li>Единицы измерения погоды по Цельсию и Фаренгейту</li>
                    <li>Многообразие тем приложения</li>
                </ul>
                <div>
                    <a href="" ><img className="googleplaylogo" src="/img/googleplaylogo.png"/></a>
                    <a href="https://store.nashstore.ru/store/6288e912fb3ed37134187a0f" ><img className="nashstorelogo" src="/img/nashstorelogo.svg"/></a>
                </div>
            </div>
            <div className="termsWtw">
                <Link to="/whattowear-terms">Политика конфиденциальности</Link>
            </div>
        </div>
    )
}

export default WhatToWear