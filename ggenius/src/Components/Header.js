import React, { createElement, useEffect, useState } from "react";
import {Link, Route, Routes} from "react-router-dom";
import MainComponent from "./MainComponent";
import AboutPage from "../Pages/About";
import PortfolioPage from "../Pages/Portfolio";
import BlogPage from "../Pages/Blog";
import ContactsPage from "../Pages/Contacts";
function Header() {
    return(
        <div>
            <header className="header">
                <div className="logo">
                    <Link to="/">
                        <img src="/img/Logo.png" id="logo" alt="ggenius"/>
                    </Link>
                </div>
                <div className="buttons">
                    <Link to="/about" className="headerBtn">Обо мне</Link>
                    <Link to="/portfolio" className="headerBtn">Портфолио</Link>
                    <Link to="/blog" className="headerBtn">Блог</Link>
                    <Link to="/contacts" className="headerBtn">Контакты</Link>
                </div>

                <a href="https://vk.com/public207258080"> <img src="/img/VK.svg" alt="VK" id="vk"/></a>
                <a href="https://t.me/iSplit_25"> <img src="/img/Telegram.svg" alt="Telegram" id="telegram"/></a>
                <a href="https://www.youtube.com/channel/UCTVHjlTMVEyUYIiJpfJ5N0A/featured"> <img src="/img/YouTube.svg" alt="YouTube" id="youtube"/></a>
            </header>

            <Routes>
                <Route path="/" element={<MainComponent />}></Route>
                <Route path="/about" element={<AboutPage />} ></Route>
                <Route path="/portfolio" element={<PortfolioPage />} ></Route>
                <Route path="/blog" element={<BlogPage />} ></Route>
                <Route path="/contacts" element={<ContactsPage />} ></Route>
            </Routes>
        </div>
    )
}
export default Header