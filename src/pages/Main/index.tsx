import React, { useEffect, useRef, useState } from 'react'
import './index.scss'

import Video from '../../mountain.mp4'
import Navigation from '../../components/Navigation'
import About from '../../components/About'

type NavigationLink = | 'main' | 'about' | 'profiles';

const Main = () => {
    const [selectedLink, setSelectedLink] = useState<NavigationLink>('main');

    const mainRef = useRef<HTMLDivElement | null>(null);
    const aboutRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        
        document.addEventListener('scroll', detectSection);

        return () => {
            document.removeEventListener('scroll', detectSection);
        }

    }, []);

    const detectSection = (e: Event) => {

        //console.log(window.scrollY, mainRef.current?.offsetTop, aboutRef.current?.offsetTop)

        switch(window.scrollY)
        {
            case mainRef.current?.offsetTop:
                setSelectedLink('main')
            break;
            case aboutRef.current?.offsetTop:
                setSelectedLink('about')
            break;
        }
    }

    const handleNavSelection = (link: NavigationLink) => {

        setSelectedLink(link);

        switch(link) {
            case 'main':
                if(!mainRef) return;

                mainRef.current?.scrollIntoView({
                    behavior: 'smooth'
                });
            break;
            case 'about':
                if(!aboutRef) return;

                aboutRef.current?.scrollIntoView({
                    behavior: 'smooth'
                });
            break;
        }
    }

    return (
        <main className="main">
            <section className="main__landing" ref={mainRef}>
                <video src={Video} autoPlay={true} preload="auto" loop={true} className="main__landing__video"></video>
                <div className="main__landing__content">
                    <div className="main__landing__person">
                        <h1 className="main__landing__hello">
                            Hello, I'm
                        </h1>
                        <h2 className="main__landing__fullname">
                            Joseph Harris
                        </h2>
                    </div>
                    <Navigation onSelect={v => handleNavSelection(v)} selectedLink={selectedLink} />
                </div>
            </section>
            <About reference={aboutRef} />
        </main>
    )
}

export default Main
