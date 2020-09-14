import React, { useState } from 'react'
import './index.scss'

import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

type NavigationLink = | 'main' | 'about' | 'profiles';

const Navigation = () => {
    const [selectedLink, setSelectedLink] = useState<NavigationLink>('main');

    const isSelected = (link: NavigationLink) => {
        return selectedLink === link ? "navigation__link navigation__link--selected" : "navigation__link";
    }

    return (
        <nav className="navigation">
            <ul className="navigation__links">
                <li className={isSelected('main')}>
                    <HomeIcon>Filled</HomeIcon>
                    Main
                </li>
                <li className={isSelected('about')}>
                    <InfoIcon>Filled</InfoIcon>
                    About me
                </li>
                <li className={isSelected('profiles')}>
                    <SupervisorAccountIcon>Filled</SupervisorAccountIcon>
                    Profiles
                </li>
            </ul>
        </nav>
    )
}

export default Navigation
