import React from 'react'

export default function Navbar(props){
    return(
        <div id="header-container">
            <div id='sub-div' ></div>
            <div id='head-title' >
                <h1>FilmStash</h1>
            </div>
            <div id='switch-list' >
                {props.pageState === true ?
                <h2 className="page-link" onClick={props.handleClick}>Search Films</h2>  
                : <h2 className="page-link" onClick={props.handleClick}>My Watchlist</h2> }
            </div>
        </div>
    )
}