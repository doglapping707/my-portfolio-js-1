import GitHubButton from 'react-github-btn'

const Footer = () => {
    return (
        <footer class="footer navbar-static-bottom">
            <div class="container">
                <a rel="noreferrer" href="#top" class="back-to-top">
                    <i class="fa fa-angle-up fa-2x" aria-hidden="true"></i>
                </a>
                <div class="social-links">
                    <a rel="noreferrer" href="#!" target="_blank">
                        <i class="fa fa-twitter fa-inverse"></i>
                    </a>
                    <a rel="noreferrer" href="#!" target="_blank">
                        <i class="fa fa-linkedin fa-inverse"></i>
                    </a>
                    <a rel="noreferrer" href="https://github.com/doglapping707" target="_blank">
                        <i class="fa fa-github fa-inverse"></i>
                    </a>
                </div>

                <hr />

                {/* Notice: if you want to give me some credit, it will be huge for me! if not, put your data on it */}
                <p class="footer__text">
                    © 2024 - Portfolio developed by&nbsp;
                    <a rel="noreferrer" href="https://github.com/doglapping707" target="_blank">
                        Yuji Tsuboi
                    </a>
                </p>
             
                {/* TO DO: remove this entire paragraph once you finish your portfolio */}
                <p class="mt-3 pt-3">
                    <GitHubButton 
                        href="https://github.com/doglapping707/my-portfolio_v1/fork"
                        data-icon="octicon-repo-forked" 
                        data-size="large" 
                        data-show-count="true" 
                        aria-label="Fork buttons/github-buttons on GitHub"
                    >
                        Fork
                    </GitHubButton>
                    &nbsp;
                    <GitHubButton 
                        href="https://github.com/doglapping707/my-portfolio_v1" 
                        data-icon="octicon-star" 
                        data-size="large" 
                        data-show-count="true" 
                        aria-label="Star buttons/github-buttons on GitHub"
                    >
                        Star
                    </GitHubButton>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
