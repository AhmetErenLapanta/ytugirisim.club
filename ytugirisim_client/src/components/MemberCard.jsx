import React from "react";

export const MemberCard = () => {
    return (
        <article className="featured__card">
            <span className="featured__tag">Technical Team Leader</span>

            <img
                src="/_removal.ai__tmp-63d113e611248_MQH2EH-removebg-preview.png"
                alt=""
                className="featured__img"
            />

            <div className="featured__data">
                <h3 className="featured__title">Ahmet Eren Lapanta</h3>
                <span className="featured__department">
                    Matematik Mühendisliği
                </span>
            </div>

            <div className="featured__button">
                <a
                    href="https://www.linkedin.com/company/ytugirisim/"
                    className="home__social-icon"
                >
                    <i className="bx bxl-linkedin" />
                </a>
                <a
                    href="https://www.instagram.com/ytugirisim/"
                    className="home__social-icon"
                >
                    <i className="bx bxl-instagram" />
                </a>
                <a
                    href="https://twitter.com/ytugirisim"
                    className="home__social-icon"
                >
                    <i className="bx bxl-twitter" />
                </a>
            </div>
        </article>
    );
};

export default MemberCard;
