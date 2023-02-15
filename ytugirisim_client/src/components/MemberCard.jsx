import React from "react";

export const MemberCard = () => {
    return (
        <article class="featured__card">
            <span class="featured__tag">Technical Team Leader</span>

            <img
                src="/_removal.ai__tmp-63d113e611248_MQH2EH-removebg-preview.png"
                alt=""
                class="featured__img"
            />

            <div class="featured__data">
                <h3 class="featured__title">Ahmet Eren Lapanta</h3>
                <span class="featured__department">Matematik Mühendisliği</span>
            </div>

            <div class="featured__button">
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
