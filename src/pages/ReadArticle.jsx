import { useNavigate, useParams } from "react-router-dom";
import { INFO, articles } from "../data";
import { Footer, Logo, Navbar } from "../components";
import { useEffect } from "react";
import '../styles/ReadArticle.css';
import { styled } from "styled-components";
let ArticleStyle = styled.div``;
const ReadArticle = () => {
    const navigate = useNavigate();
    let { slug } = useParams();

    const article = articles[slug - 1];

    useEffect(() => {
        document.title = `${article().title} | ${INFO.main.title}`;
        window.scrollTo(0, 0);
    }, [article]);

    ArticleStyle = styled.div`
		${article().style}
	`;

    return (
        <><div className="page-content">
            <Navbar />

            <div className="content-wrapper">
                <div className="read-article-logo-container">
                    <div className="read-article-logo">
                        <Logo width={46} />
                    </div>
                </div>

                <div className="read-article-container">
                    <div className="read-article-back">
                        <img
                            src="../back-button.png"
                            alt="back"
                            className="read-article-back-button"
                            onClick={() => navigate(-1)}
                        />
                    </div>

                    <div className="read-article-wrapper">
                        <div className="read-article-date-container">
                            <div className="read-article-date">
                                {article().date}
                            </div>
                        </div><div className="title read-article-title">
                            {article().title}
                        </div>

                        <div className="read-article-body">
                            <ArticleStyle>{article().body}</ArticleStyle>
                        </div>
                    </div>
                </div>
                <div className="page-footer">
                    <Footer />
                </div>
            </div>
        </div>
        </>
    )
}

export default ReadArticle