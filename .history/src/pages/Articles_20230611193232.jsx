import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useEffect, useRef } from "react";
import { Article, Footer, Logo, Navbar } from "../components";
import { INFO, articles } from "../data";
import "../styles/Articles.css";
const Articles = () => {
  useEffect(() => {
    document.title = `Articles | ${INFO.main.title}`;
    window.scrollTo(0, 0);
  }, []);
  const ref = useRef();

  return (
    <>
      <div className="articles-content">
        <Parallax pages={4} ref={ref}>
          <Navbar active="articles" />
          <div className="content-wrapper">

            <ParallaxLayer speed={1} offset={0}
              factor={2}
              style={{
                backgroundImage: `url(moon.png)`,
                backgroundSize: 'cover',
              }}>
              <div className="articles-logo-container">
                <div className="articles-logo">
                  <Logo width={46} />
                </div>
              </div>
            </ParallaxLayer>
            <ParallaxLayer
              sticky={{ start: 0.5, end: 2.9 }}
            >
              <div className="flex items-center justify-center ">
                <img src='cat.gif' className="h-40 w-30" />

              </div>

            </ParallaxLayer>
            <ParallaxLayer offset={1}
              speed={1}
              factor={5}
              style={{
                backgroundImage: `url(land.png)`,
                backgroundSize: 'cover',
              }}>
              <div className="articles-main-container">
                <div className="title articles-title text-white">
                  {INFO.articles.title}
                </div>

                <div className="subtitle articles-subtitle text-gray-500">
                  {INFO.articles.description}
                </div>
              </div>

            </ParallaxLayer>
            {/* <ParallaxLayer
              sticky={{ start: 0.5, end: 0.7 }}
            >
              <div className="flex items-center justify-center ">
                <img src='me.jpg' className="h-20 w-20 rounded-full" />
              </div>
            </ParallaxLayer> */}

            <ParallaxLayer
              offset={2}
              speed={0.05}
              onClick={() => ref.current.scrollTo(3)}
            >
              <div className="articles-container">
                <div className="articles-wrapper">
                  {articles.article.map((article, index) => (
                    <div
                      className="articles-article"
                      key={(index + 1).toString()}
                    >
                      <Article
                        key={(index + 1).toString()}
                        date={article.date}
                        title={article.title}
                        description={article.description}
                        // link={"/article/" + (index + 1)}
                        link={article.link}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </ParallaxLayer>
            {/* <ParallaxLayer
              sticky={{ start: 1.5, end: 2.1 }}
            >
              <div className="flex items-center justify-center ">
                {/* <img src='cat.gif' className="h-40 w-30" /> */}
                <img src='me.jpg' className="h-20 w-20 rounded-full" />
              </div>
            </ParallaxLayer> */}
            <ParallaxLayer offset={3}
              speed={2}
              factor={1}
              onClick={() => ref.current.scrollTo(0)}>
              <div className="articles-footer">
                <Footer />
              </div>
            </ParallaxLayer>
            <ParallaxLayer
              sticky={{ start: 3.0, end: 0 }}
            >
              <div className="flex items-center justify-center ">
                {/* <img src='cat.gif' className="h-40 w-30" /> */}
                <img src='me.jpg' className="h-20 w-20 rounded-full" />
              </div>

            </ParallaxLayer>
          </div>
        </Parallax >
      </div >
    </>
  );
};

export default Articles;
