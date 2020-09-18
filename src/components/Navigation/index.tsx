import React, { FC } from 'react'
import './index.scss'

import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import LinkIcon from '@material-ui/icons/Link';

export type NavigationLink = | 'main' | 'about' | 'profiles';

interface NavigationProps {
    onSelect: (v: NavigationLink) => void
    selectedLink: NavigationLink
}

const Navigation: FC<NavigationProps> = ({ onSelect, selectedLink }) => {

    const handleLinkSelection = (link: NavigationLink) => {
        onSelect(link);
    }

    const isSelected = (link: NavigationLink) => {
        return selectedLink === link ? "navigation__link navigation__link--selected" : "navigation__link";
    }

    return (
        <nav className="navigation">
            <ul className="navigation__links">
                <li className={isSelected('main')} onClick={() => handleLinkSelection('main')}>
                    <HomeIcon>Filled</HomeIcon>
                    Main
                </li>
                <li className={isSelected('about')} onClick={() => handleLinkSelection('about')}>
                    <InfoIcon>Filled</InfoIcon>
                    About me
                </li>
                <li className={isSelected('profiles')}>
                    <LinkIcon>Filled</LinkIcon>
                    Profiles
                </li>
            </ul>
        </nav>
    )
}

export default Navigation
