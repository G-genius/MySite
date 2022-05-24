import './App.css';
import {Route, Routes, Navigate} from "react-router-dom";
import MainComponent from "./Components/MainComponent";
import AboutPage from "./Pages/About";
import PortfolioPage from "./Pages/Portfolio";
import TutorialPage from "./Pages/Tutorial";
import ContactsPage from "./Pages/Contacts";
import WhatToWearPage from "./Pages/projects/WhatToWear";
import WhatToWearTermsPage from "./Pages/projects/WhatToWearTerms";
import NotFoundPage from "./Pages/NotFoundPage";

import Layout from "./Components/Layout";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<MainComponent/>}/>
                    <Route path="about" element={<AboutPage/>}/>
                    <Route path="portfolio" element={<PortfolioPage/>}/>
                    <Route path="Tutorial" element={<TutorialPage/>}/>
                    <Route path="contacts" element={<ContactsPage/>}/>
                    <Route path="whattowear" element={<WhatToWearPage/>}/>
                    <Route path="whattowear-terms" element={<WhatToWearTermsPage/>}/>
                    <Route path="whattowear-terms" element={<Navigate to="/whattowear-terms" replace />}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </div>

    );
}

export default App;
