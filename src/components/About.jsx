import ProfileImg from "../assets/profile.jpg";
import {Scroll} from '../scripts/scrollReveal.js'

const About = () => {
    return (
        <section id="about">
            <div class="container">
                <Scroll delay={300} origin={'bottom'}>
                    <h2 class="section-title">About me</h2>
                </Scroll>
                <div class="row about-wrapper">
                    <div class="col-md-6 col-sm-12">
                        <Scroll delay={600} origin={'bottom'}>
                            <div class="about-wrapper__image">
                                <img
                                    class="img-fluid rounded shadow-lg"
                                    height="auto"
                                    width="300px"
                                    src={ProfileImg}
                                    alt="Profile"
                                />
                            </div>
                        </Scroll>
                    </div>
                    <div class="col-md-6 col-sm-12">
                        <Scroll delay={1000} origin={window.innerWidth > 768 ? "left" : "bottom"}>
                            <div class="about-wrapper__info">
                                <p class="about-wrapper__info-text">
                                    こんにちは、坪井 優治と申します。<br />
                                    現在は主にPHPを使用したバックエンドエンジニアとして働いています。<br />
                                    スキルアップのため個人開発を進めています。<br />  
                                </p>
                                <p class="about-wrapper__info-text fw-bold">
                                    メンテナンス性の高いシステムを作ることを心掛けています。
                                </p>
                                <span class="d-flex mt-3">
                                    <a
                                    rel="noreferrer"
                                    target="_blank"
                                    class="cta-btn cta-btn--resume"
                                    href="assets/resume.pdf"
                                    >
                                    View Resume
                                    </a>
                                </span>
                            </div>
                        </Scroll>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
