import React, { FC } from 'react'

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

//https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png

interface AboutProps {
    reference: React.MutableRefObject<HTMLDivElement | null>
}

const About: FC<AboutProps> = ({ reference }) => {
    return (
        <section className="main__about" ref={reference}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" alt="" className="main__about__selfie" />
            <div className="main__about__content">
                <h2 className="main__about__header">
                    About me
                </h2>
                <p className="main__about__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem labore obcaecati laborum nostrum aperiam libero voluptates neque dicta repudiandae soluta quasi, necessitatibus ea porro tenetur officiis magni explicabo eligendi iste.</p>
                <div className="main__about__profiles">
                    <a href="#">
                        <GitHubIcon>Filled</GitHubIcon>
                    </a>
                    <a href="#">
                        <LinkedInIcon>Filled</LinkedInIcon>
                    </a>
                    <a href="#">
                        <FacebookIcon>Filled</FacebookIcon>
                    </a>
                    <a href="#">
                        <TwitterIcon>Filled</TwitterIcon>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About
