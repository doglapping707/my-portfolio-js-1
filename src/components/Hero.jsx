import {Scroll} from '../scripts/scrollReveal.js';
import Typewriter from "typewriter-effect";

const Hero = () => {
    return (
        <section id="hero" class="jumbotron">
            <div class="container">
                <Scroll delay={500} origin={window.innerWidth > 768 ? "left" : "bottom"}>
                    <h1 class="hero-title">
                        Hi, my name is <span class="text-color-main">Yuji Tsuboi</span>
                        <br />
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .pauseFor(1300)
                                    .typeString("I'm the Front En")
                                    .pauseFor(300)
                                    .deleteChars(8)
                                    .typeString('<strong>Back End</strong> Developer.')
                                    .pauseFor(1000)
                                    .start();
                            }}
                        />
                    </h1>
                </Scroll>
                <Scroll delay={1000} origin={window.innerWidth > 768 ? "left" : "bottom"}>
                    <p class="hero-cta">
                        <a rel="noreferrer" class="cta-btn cta-btn--hero" href="#about">
                            Know more
                        </a>
                    </p>
                </Scroll>
            </div>
        </section>
    );
};

export default Hero;
