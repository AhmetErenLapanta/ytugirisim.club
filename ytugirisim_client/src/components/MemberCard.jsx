import React from "react";

export const MemberCard = ({ content, mediaPath }) => {
    return (
        <article className="featured__card">
            <span className="featured__tag">{content.Position}</span>

            <img
                src={process.env.NEXT_PUBLIC_BASE_URL + `${mediaPath}`}
                alt=""
                className="featured__img"
            />

            <div>
                <h3 className="featured__title">{content.Full_Name}</h3>
                <span className="featured__department">
                    {content.Department}
                </span>
            </div>

            <div className="featured__button">
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={
                        content.LinkedIn_Link ??
                        "https://www.linkedin.com/company/ytugirisim/"
                    }
                    className="home__social-icon"
                >
                    <i className="bx bxl-linkedin bx-flashing" />
                </a>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={
                        content.Instagram_Link ??
                        "https://www.instagram.com/ytugirisim/"
                    }
                    className="home__social-icon"
                >
                    <i className="bx bxl-instagram bx-flashing" />
                </a>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={
                        content.Twitter_Link ?? "https://twitter.com/ytugirisim"
                    }
                    className="home__social-icon"
                >
                    <i className="bx bxl-twitter bx-flashing" />
                </a>
            </div>
        </article>
    );
};

export default MemberCard;
