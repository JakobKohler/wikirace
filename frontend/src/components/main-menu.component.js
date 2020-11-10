import React from 'react';

export default function mainMenu(){
    return(
        <div className="wrapper">
            <div className="startPageTitle">
                <h1>WIKIRACE</h1>
                <h2 className="serif">Wikipedia race using WikiAPI</h2>
            </div>
            <div className="startPageButtons">
                <button className="btn" onClick={() => window.location="/ranRace"}>Random Race</button>
                <button className="btn" onClick={() => window.location="/customRace"}>Custom Race</button>
            </div>
        </div>
    );
}