import Layout from "@/hoc/Layout";
import React, { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect } from "react";
const index = ({ error, members }) => {
    const [imgLink, setImgLink] = useState();
    const { scrollYProgress } = useScroll();

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    useEffect(() => {
        const fetchData = async () => {
            const mediaResponse = await fetch(
                `${process.env.NEXT_PUBLIC_STRAPI_URL}/medias?populate=*`
            );

            const mediaData = await mediaResponse.json();

            setImgLink(mediaData.data);
        };

        fetchData();
    }, []);

    return (
        <Layout>
            <motion.div className="progress-bar" style={{ scaleX }} />

            <div className="section">
                <h2 className="section-title ">Ekibimiz!</h2>

                <img
                    className="page_hero"
                    src="/starting-a-business-proyect-animate.svg"
                />
                <div className="work__container bd-grid">
                    {members.map((member) => {
                        // Get the ID of the profile picture for the member
                        const pictureId =
                            member.attributes.Profile_Picture.data.id;

                        // Find the media object with the same ID as the profile picture (using optional chaining to avoid errors)
                        const mediaObject = imgLink?.find(
                            (obj) => obj.id === pictureId
                        );

                        // If the media object exists, get the URL property
                        const picPath =
                            mediaObject?.attributes.media_field.data.attributes
                                .url;

                        return (
                            <article
                                id={member.id}
                                key={member.id}
                                className="featured__card"
                            >
                                <span className="featured__tag">
                                    {member.attributes.Position}
                                </span>

                                <img
                                    src={
                                        process.env.NEXT_PUBLIC_BASE_URL +
                                        `${picPath}`
                                    }
                                    alt=""
                                    className="featured__img"
                                />

                                <div className="featured__data">
                                    <h3 className="featured__title">
                                        {member.attributes.Full_Name}
                                    </h3>
                                    <span className="featured__department">
                                        {member.attributes.Department}
                                    </span>
                                </div>

                                <div className="featured__button">
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={
                                            member.attributes.LinkedIn_Link ??
                                            "https://www.linkedin.com/company/ytugirisim/"
                                        }
                                        className="home__social-icon"
                                    >
                                        <i className="bx bxl-linkedin" />
                                    </a>
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={
                                            member.attributes.Instagram_Link ??
                                            "https://www.instagram.com/ytugirisim/"
                                        }
                                        className="home__social-icon"
                                    >
                                        <i className="bx bxl-instagram" />
                                    </a>
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={
                                            member.attributes.Twitter_Link ??
                                            "https://twitter.com/ytugirisim"
                                        }
                                        className="home__social-icon"
                                    >
                                        <i className="bx bxl-twitter" />
                                    </a>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </Layout>
    );
};

export async function getServerSideProps() {
    const memberResponse = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/members?populate=*`
    );

    const data = await memberResponse.json();

    if (data) {
        return {
            props: {
                members: data.data,
            },
        };
    } else {
        return {
            props: {
                error: memberResponse.statusText,
            },
        };
    }
}

export default index;
