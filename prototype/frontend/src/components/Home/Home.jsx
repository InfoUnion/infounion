import { Routes, Route, Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import './Home.css'


function Home() {
    return (

        <main className="home-main">
            <div className="home-top-container">
                <div className="carousel-container">
                    <Carousel>
                        <Carousel.Item>
                            <a className="carousel-link" target="_blank" rel="noreferrer" href="https://www.politico.com/news/2021/11/29/amazon-union-election-alabama-nlrb-523460">
                                <img alt="Amazon facility" className="carousel-box"
                                    src="https://static.politico.com/dims4/default/589e930/2147483647/resize/1920x/quality/90/?url=https%3A%2F%2Fstatic.politico.com%2Fba%2F9a%2F8045de964fb082003835fa8bbd24%2F211129-amazon-alabama-union-ap-773.jpg">
                                </img>
                            </a>
                            <Carousel.Caption>
                                <h3 className="big-caption">First News Article</h3>
                                <p className="small-caption">Amazon ordered to hold new union election at Alabama facility.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <a className="carousel-link" target="_blank" rel="noreferrer" href="https://www.npr.org/2022/01/28/1075803876/unions-have-enthusiasm-media-spotlight-but-membership-numbers-lag">
                                <img alt="Back of a large man" className="carousel-box"
                                    src="https://media.npr.org/assets/img/2022/01/27/photo-1_custom-13ec0fb5d5624b3fa68273695cf7b79a7dcbe70a-s1600-c85.webp">
                                </img>
                            </a>                            <Carousel.Caption>
                                <h3 className="big-caption">Second News Article</h3>
                                <p className="small-caption">Unions have enthusiasm, media spotlight. But membership numbers lag.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <a className="carousel-link" target="_blank" rel="noreferrer" href="https://www.cnbc.com/2022/03/10/mlb-owners-and-players-reach-tentative-labor-deal-reports-say-clearing-the-way-for-start-to-spring-training.html">
                                <img alt="Man at podium" className="carousel-box"
                                    src="https://image.cnbcfm.com/api/v1/image/107028692-1646944276575-gettyimages-1369787105-ja5_7450_31cbb46a-b93a-4335-93af-5cf609301c6d.jpeg?v=1646944336&w=1260&h=630&vtcrop=y">
                                </img>
                            </a>                            <Carousel.Caption>
                                <h3 className="big-caption">Third News Article</h3>
                                <p className="small-caption">Despite labor movement popularity, U.S. union membership is as low as it's ever been.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="announcements-container">
                    <h1 className="announcements-title">ANNOUNCEMENTS</h1>
                    <p className="announcements-body">
                        This is where all the relevant news, annoucements, and information regarding unions, labor laws, etc. will be.
                        It will also includ information on what articles might be relevant to check out, law changes that people should keep an eye on, and new resources or channels to look into.
                        <pre></pre>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        <pre></pre>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>
            <div className="news-box-container">
                <img className="news-box" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnwbOEwZxCM-ZSGb2G1PSOUKqya72_Ifnhqw&usqp=CAU"></img>
                <img className="news-box" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWPIC3TScS2eqX_VUx5Vwn0L7EONSpbdzjTw&usqp=CAU"></img>
                <img className="news-box" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa0I_5b1gLyg0hJ95kVea_4E8mGEMAhVYmgw&usqp=CAU"></img>
                <img className="news-box" src="https://cdn.dribbble.com/users/617587/screenshots/13955768/media/9b30c56bc7c0e36ae86bad4d3c5ddcba.png?compress=1&resize=400x300&vertical=top"></img>
                <img className="news-box" src="https://www.cta.org/wp-content/uploads/2020/04/Social-Share-1-1.png"></img>
            </div>
            <div className="featured-content-container">
                <div className="featured-content">
                    <h5 className="featured-content-title">Featured Article</h5>
                    <p className="featured-content-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        <pre></pre>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
            <div className="featured-content-container">
                <div className="featured-content">
                    <h5 className="featured-content-title">New Informational Article - By Author</h5>
                    <p className="featured-content-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        <pre></pre>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
            <div className="featured-content-container">
                <div className="featured-content">
                    <h5 className="featured-content-title">Popular Forum Post</h5>
                    <p className="featured-content-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        <pre></pre>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </main>

    );
}

export default Home;