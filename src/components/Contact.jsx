import {Scroll} from '../scripts/scrollReveal.js'

const Contact = () => {
    return (
        <section id="contact">
            <div class="container">
                <h2 class="section-title">Contact</h2>
                <Scroll delay={800} origin={"bottom"}>
                    <div class="contact-wrapper">
                        <p class="contact-wrapper__text">[Put your call to action here]</p>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            class="cta-btn cta-btn--resume"
                            href="mailto:doglapping707@gmail.com"
                        >
                            Call to Action
                        </a>
                    </div>
                </Scroll>
            </div>
        </section>
    );
};

export default Contact;
