import Nav from '@/components/nav/Nav'
import LandingPage from '@/app/landing/page'
import {
    HashRouter as Router,
    Routes,
    Route,
} from "react-router-dom";



import './global.css'

function App() {
    return <>
        <Nav />
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />}></Route>
            </Routes>
        </Router>
    </>
}

export default App