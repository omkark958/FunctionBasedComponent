import React from "react";
import {createRoot} from "react-dom/client"
import Nav from "./Nav";
import Menu from './Menu';
import Footer from './Footer';
import Movies from "./Movies";
import Questions from './Questions';
import ReadytoWatch from "./ReadytoWatch";
import Tv from "./Tv";
import Subscription from "./Subscription";
import Download from "./Download";
import Logout from './Logout';


createRoot(document.getElementById('root')).render(<Nav/>);
createRoot(document.getElementById('menu')).render(<Menu/>);
createRoot(document.getElementById("movies")).render(<Movies/>)
createRoot(document.getElementById('ready')).render(<ReadytoWatch/>)
createRoot(document.getElementById('questions')).render(<Questions/>);
createRoot(document.getElementById('footer')).render(<Footer/>);
createRoot(document.getElementById('TV')).render(<Tv/>)
createRoot(document.getElementById('subscribe')).render(<Subscription/>)
createRoot(document.getElementById('download')).render(<Download/>)
createRoot(document.getElementById('logout')).render(<Logout/>)