import React from 'react'

export default function Navbar(props){
    return(
        <div id="header-container">
                <h1>FilmJournal</h1>
                {props.pageState === true ?
                 <a className="page-link" onClick={props.handleClick}>Search Movies</a>  
                 : <a className="page-link" onClick={props.handleClick}>My Watchlist</a> }
                
        </div>
        
    )
}