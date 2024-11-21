import React from 'react';
import './home.css'

import HelpPage from './HelpPage'
import SearchPage from './SearchPage'

function HomePage(change) {
    return (
    <div>

    <button onClick={() => change("search")}>Navigate</button>
    <button>See Maps</button>
    <button className="top-right" id="help-btn"
    onClick={() => change("help")}>?</button>
    {// <!--https://www.wikihow.com/Run-a-HTML-File-in-Visual-Studio-Code; from Mary T-->
}

    </div>)
}

export default HomePage