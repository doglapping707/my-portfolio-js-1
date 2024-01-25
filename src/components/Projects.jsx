import ProjectImg from "../assets/project.jpg";
import {Scroll} from '../scripts/scrollReveal.js'

const Projects = () => {
    return (
        <section id="projects">
            <div class="container">
                <div class="project-wrapper">
                    <h2 class="section-title dark-blue-text">Projects</h2>

                    {/* Notice: each .row is a project */}
                    <div class="row">
                        <div class="col-lg-4 col-sm-12">
                            <Scroll delay={600} origin={window.innerWidth > 768 ? "left" : "bottom"}>
                                <div class="project-wrapper__text">
                                    <h3 class="project-wrapper__text-title">Project Title 0</h3>
                                    <div>
                                        <p class="mb-4">
                                            Describe the project being very specific, you can use the Twitter standard: no more than 280 characters: 
                                            complement the information: the skills learned or reinforced in its realization and how you faced it, 
                                            prove to be proactive in the search for solutions.
                                        </p>
                                    </div>
                                    <a
                                    rel="noreferrer"
                                    target="_blank"
                                    class="cta-btn cta-btn--hero"
                                    href="#!"
                                    >
                                    See Live
                                    </a>
                                    <a
                                    rel="noreferrer"
                                    target="_blank"
                                    class="cta-btn text-color-main"
                                    href="#!"
                                    >
                                    Source Code
                                    </a>
                                </div>
                            </Scroll>
                        </div>
                        <div class="col-lg-8 col-sm-12">
                            <Scroll delay={1000} origin={window.innerWidth > 768 ? "right" : "bottom"}>
                                <div class="project-wrapper__image">
                                    <a rel="noreferrer" href="#!" target="_blank">
                                        <div
                                            data-tilt
                                            data-tilt-max="4"
                                            data-tilt-glare="true"
                                            data-tilt-max-glare="0.5"
                                            class="thumbnail rounded js-tilt"
                                        >
                                            <img
                                            alt="Project"
                                            class="img-fluid"
                                            src={ProjectImg}
                                            />
                                        </div>
                                    </a>
                                </div>
                            </Scroll>
                        </div>
                    </div>
                    {/* END Project */}

                    {/* Notice: each .row is a project */}
                    <div class="row">
                        <div class="col-lg-4 col-sm-12">
                            <Scroll delay={600} origin={window.innerWidth > 768 ? "left" : "bottom"}>
                                <div class="project-wrapper__text">
                                    <h3 class="project-wrapper__text-title">Project Title 1</h3>
                                    <div>
                                        <p class="mb-4">
                                            Demonstrate in this description the skills of a programmer: such as having commitment, 
                                            having perseverance and accepting alternative solutions. Remember that being a portfolio you are not selling the project, 
                                            you are selling yourself, it reflects the resources used: Frameworks, libraries, platforms, etc.
                                        </p>
                                    </div>
                                    <a
                                    rel="noreferrer"
                                    target="_blank"
                                    class="cta-btn cta-btn--hero"
                                    href="#!"
                                    >
                                    See Live
                                    </a>
                                    <a
                                    rel="noreferrer"
                                    target="_blank"
                                    class="cta-btn text-color-main"
                                    href="#!"
                                    >
                                    Source Code
                                    </a>
                                </div>
                            </Scroll>
                        </div>
                        <div class="col-lg-8 col-sm-12">
                            <Scroll delay={1000} origin={window.innerWidth > 768 ? "right" : "bottom"}>
                                <div class="project-wrapper__image">
                                    <a rel="noreferrer" href="#!" target="_blank">
                                        <div
                                            data-tilt
                                            data-tilt-max="4"
                                            data-tilt-glare="true"
                                            data-tilt-max-glare="0.5"
                                            class="thumbnail rounded js-tilt"
                                        >
                                            <img
                                            alt="Project"
                                            class="img-fluid"
                                            src={ProjectImg}
                                            />
                                        </div>
                                    </a>
                                </div>
                            </Scroll>
                        </div>
                    </div>
                    {/* END Project */}

                    {/* Notice: each .row is a project */}
                    <div class="row">
                        <div class="col-lg-4 col-sm-12">
                            <Scroll delay={600} origin={window.innerWidth > 768 ? "left" : "bottom"}>
                                <div class="project-wrapper__text">
                                    <h3 class="project-wrapper__text-title">Project Title 2</h3>
                                    <div>
                                        <p class="mb-4">
                                            If the project was collaborative, reflect it in this description, that will demonstrate communication and/or leadership skills. 
                                            Additionally, if you made use of the mastery of a second language, it will reflect on you professionalism.
                                        </p>
                                    </div>
                                    <a
                                    rel="noreferrer"
                                    target="_blank"
                                    class="cta-btn cta-btn--hero"
                                    href="#!"
                                    >
                                    See Live
                                    </a>
                                    <a
                                    rel="noreferrer"
                                    target="_blank"
                                    class="cta-btn text-color-main"
                                    href="#!"
                                    >
                                    Source Code
                                    </a>
                                </div>
                            </Scroll>
                        </div>
                        <div class="col-lg-8 col-sm-12">
                            <Scroll delay={1000} origin={window.innerWidth > 768 ? "right" : "bottom"}>
                                <div class="project-wrapper__image">
                                    <a rel="noreferrer" href="#!" target="_blank">
                                    <div
                                        data-tilt
                                        data-tilt-max="4"
                                        data-tilt-glare="true"
                                        data-tilt-max-glare="0.5"
                                        class="thumbnail rounded js-tilt"
                                    >
                                        <img
                                        alt="Project"
                                        class="img-fluid"
                                        src={ProjectImg}
                                        />
                                    </div>
                                    </a>
                                </div>
                            </Scroll>
                        </div>
                    </div>
                    {/* END Project */}

                </div>
            </div>
        </section>
    );
};

export default Projects;
