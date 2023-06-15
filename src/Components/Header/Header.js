import React from 'react'
import './Header.css'

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--icon">
                <a href='/'>
                    <img className="icon--netflix" src="https://64.media.tumblr.com/4e5526a72883cd2b23687ace7577868f/f69bcf8ec395bbc6-67/s1280x1920/898e043ad0ce7b31812f192966aa615c0032821e.pnj" />
                </a>
            </div>

            <div className="header--user">
                <a href='/'>
                    <img className="icon--user" src="https://64.media.tumblr.com/1642eadda6c269b8b2dc0cd398d7464b/8510a58e266bc0e2-dc/s400x600/fdfa827174059075c993fc8be4fa42ae00ee1d99.pnj" />
                </a>
            </div>
        </header>
    )
}