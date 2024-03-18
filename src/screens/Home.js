import React from "react";
import Header from "../components/Header";
import ContactForm from "../forms/ContactForm";

export default function Home() {

    return (
        <Header>
            {/* Hero */}
            <div className={"page-hero"}>
                <div className={"-hero"}>
                    <h1>Garry ALMEIDA</h1>
                    <p>And I am a Fullstack Developer</p>
                    <div>
                        <a className={"btn btn-download"} href={"/#"} target={"_blank"} download={true} rel={"noreferrer"}>Download CV</a>
                    </div>
                    <div className={"social-links"}>
                        <a href={"/#"} target={"_blank"} rel={"noreferrer"}>
                            <img src={`${window.location.origin}/content/svg/facebook.svg`} alt={"facebook"} />
                        </a>
                        <a href={"/#"} target={"_blank"} rel={"noreferrer"}>
                            <img src={`${window.location.origin}/content/svg/twitter.svg`} alt={"twitter"} />
                        </a>
                        <a href={"/#"} target={"_blank"} rel={"noreferrer"}>
                            <img src={`${window.location.origin}/content/svg/instagram.svg`} alt={"instagram"} />
                        </a>
                        <a href={"/#"} target={"_blank"} rel={"noreferrer"}>
                            <img src={`${window.location.origin}/content/svg/linkedin.svg`} alt={"linkedin"} />
                        </a>
                        <a href={"/#"} target={"_blank"} rel={"noreferrer"}>
                            <img src={`${window.location.origin}/content/svg/github.svg`} alt={"github"} />
                        </a>
                    </div>
                </div>
            </div>

            {/* About */}
            <div id={"about"} className={"page-section"}>
                <h2 className={"section-title"}><span className={"c-green"}>About</span> me</h2>
                <div className={"d-grid -col-2"}>
                    <div className={"-item"}>
                        <div className={"d-grid -col-2"}>
                            <div className={"card"}>
                                <div className={"-header"}>
                                    <h3>2+</h3>
                                </div>
                                <div className={"-content"}>
                                    <p>Years of Experience</p>
                                </div>
                            </div>
                            <div className={"card"}>
                                <div className={"-header"}>
                                    <h3>450+</h3>
                                </div>
                                <div className={"-content"}>
                                    <p>Projects done</p>
                                </div>
                            </div>
                            <div className={"card"}>
                                <div className={"-header"}>
                                    <h3>200+</h3>
                                </div>
                                <div className={"-content"}>
                                    <p>Satisfied Clients</p>
                                </div>
                            </div>
                            <div className={"card"}>
                                <div className={"-header"}>
                                    <h3>10+</h3>
                                </div>
                                <div className={"-content"}>
                                    <p>Awards Won</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"-item about-me"}>
                        <div className={"about-me-widget"}>
                            <label>My name is Garry ALMEIDA</label>
                            <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
                            <div>
                                <a className={"btn btn-white"} href={"/#contact"}>Contact me</a>
                            </div>
                        </div>
                    </div>
                    <div className={"-item"}>
                        <div className={"skills"}>
                            <div className={"skill"}>
                                <div className={"-desc"}>
                                    <label>Web designer</label>
                                    <span>80%</span>
                                </div>
                                <progress id="file" max="100" value="80">80%</progress>
                            </div>
                            <div className={"skill"}>
                                <div className={"-desc"}>
                                    <label>Graphic designer</label>
                                    <span>75%</span>
                                </div>
                                <progress id="file" max="100" value="75">75%</progress>
                            </div>
                            <div className={"skill"}>
                                <div className={"-desc"}>
                                    <label>UI designer</label>
                                    <span>80%</span>
                                </div>
                                <progress id="file" max="100" value="80">80%</progress>
                            </div>
                        </div>
                    </div>
                    <div className={"-item"}>
                        <div className={"skills"}>
                            <div className={"skill"}>
                                <div className={"-desc"}>
                                    <label>HTML</label>
                                    <span>95%</span>
                                </div>
                                <progress id="file" max="100" value="95">95%</progress>
                            </div>
                            <div className={"skill"}>
                                <div className={"-desc"}>
                                    <label>CSS / SASS (SCSS)</label>
                                    <span>80%</span>
                                </div>
                                <progress id="file" max="100" value="80">80%</progress>
                            </div>
                            <div className={"skill"}>
                                <div className={"-desc"}>
                                    <label>JavaScript</label>
                                    <span>65%</span>
                                </div>
                                <progress id="file" max="100" value="65">65%</progress>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Services */}
            <div id={"services"} className={"page-section"}>
                <h2 className={"section-title"}>My <span className={"c-green"}>services</span></h2>

                <div className={"d-grid -col-3"}>
                    <div className={"card-service"}>
                        <div className={"-header"}>
                            <img src={`${window.location.origin}/content/svg/code.svg`} alt={""} />
                        </div>
                        <div className={"-content"}>
                            <label>Web design</label>
                            <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
                        </div>
                    </div>
                    <div className={"card-service"}>
                        <div className={"-header"}>
                            <img src={`${window.location.origin}/content/svg/pencil.svg`} alt={""} />
                        </div>
                        <div className={"-content"}>
                            <label>Graphic design</label>
                            <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
                        </div>
                    </div>
                    <div className={"card-service"}>
                        <div className={"-header"}>
                            <img src={`${window.location.origin}/content/svg/mobile.svg`} alt={""} />
                        </div>
                        <div className={"-content"}>
                            <label>Responsive design</label>
                            <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
                        </div>
                    </div>
                    <div className={"card-service"}>
                        <div className={"-header"}>
                            <img src={`${window.location.origin}/content/svg/megaphone.svg`} alt={""} />
                        </div>
                        <div className={"-content"}>
                            <label>Digital marketing</label>
                            <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
                        </div>
                    </div>
                    <div className={"card-service"}>
                        <div className={"-header"}>
                            <img src={`${window.location.origin}/content/svg/glass.svg`} alt={""} />
                        </div>
                        <div className={"-content"}>
                            <label>SEO marketing</label>
                            <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
                        </div>
                    </div>
                    <div className={"card-service"}>
                        <div className={"-header"}>
                            <img src={`${window.location.origin}/content/svg/wordpress.svg`} alt={""} />
                        </div>
                        <div className={"-content"}>
                            <label>Wordpress</label>
                            <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Portfolio */}
            <div id={"portfolio"} className={"page-section"}>
                <h2 className={"section-title"}>My <span className={"c-green"}>portfolio</span></h2>

                <div className={"d-grid -col-3"}>
                    <div className={"card-portfolio"}>
                        <div className={"-header"}>
                            <img src={`${window.location.origin}/content/img/portfolio.png`} alt={""} />
                        </div>
                        <div className={"-content"} hidden></div>
                    </div>
                    <div className={"card-portfolio"}>
                        <div className={"-header"}>
                            <img src={`${window.location.origin}/content/img/portfolio.png`} alt={""} />
                        </div>
                        <div className={"-content"} hidden></div>
                    </div>
                    <div className={"card-portfolio"}>
                        <div className={"-header"}>
                            <img src={`${window.location.origin}/content/img/portfolio.png`} alt={""} />
                        </div>
                        <div className={"-content"} hidden></div>
                    </div>
                    <div className={"card-portfolio"}>
                        <div className={"-header"}>
                            <img src={`${window.location.origin}/content/img/portfolio.png`} alt={""} />
                        </div>
                        <div className={"-content"} hidden></div>
                    </div>
                    <div className={"card-portfolio"}>
                        <div className={"-header"}>
                            <img src={`${window.location.origin}/content/img/portfolio.png`} alt={""} />
                        </div>
                        <div className={"-content"} hidden></div>
                    </div>
                    <div className={"card-portfolio"}>
                        <div className={"-header"}>
                            <img src={`${window.location.origin}/content/img/portfolio.png`} alt={""} />
                        </div>
                        <div className={"-content"} hidden></div>
                    </div>
                </div>
            </div>
            
            {/* Contact */}
            <div id={"contact"} className={"page-section"}>
                <h2 className={"section-title"}><span className={"c-green"}>Contact</span> me</h2>

                <div className={"card"}>
                    <div className={"-content"}>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </Header>
    )
}