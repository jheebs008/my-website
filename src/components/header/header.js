import React from 'react';

import './header.scss';

const Header = () => (
    <div className="header">
        <div className="header__box">
            <div className="header__image-shape">
                <img src="img/bible.jpg" alt="Profile" className="header__profile-img" />
            </div>
        </div>

        <div className="header__text-box">
            <h1 className="heading__primary">
                <span className="heading__name">Joshua Peter Arhebamen</span>
                <span className="heading__email">josharheb@gmail.com</span>
            </h1>
        </div>
    </div>
);

export default Header;