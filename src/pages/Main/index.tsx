import React from 'react'
import './index.scss'

import Video from '../../mountain.mp4'
import Navigation from '../../components/Navigation'

const Main = () => {
    return (
        <main className="main">
            <section className="main__landing">
                <video src={Video} autoPlay={true} loop={true} className="main__landing__video"></video>
                <div className="main__landing__content">
                    <div className="main__landing__person">
                        <h1 className="main__landing__hello">
                            Hello, I'm
                        </h1>
                        <h2 className="main__landing__fullname">
                            Joseph Harris
                        </h2>
                    </div>
                    <Navigation />
                </div>
            </section>
            <section className="main__about">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem labore obcaecati laborum nostrum aperiam libero voluptates neque dicta repudiandae soluta quasi, necessitatibus ea porro tenetur officiis magni explicabo eligendi iste.</p>
            </section>
        </main>
    )
}

export default Main
