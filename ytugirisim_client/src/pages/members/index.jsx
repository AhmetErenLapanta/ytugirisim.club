import Layout from "@/hoc/Layout";
import Members from "@/sections/Members";
import React from "react";

const index = ({ error, members }) => {
    const content = members.data;
    console.log(content);
    return (
        <Layout>
            <div className="section">
                <h2 className="section-title ">Ekibimiz!</h2>
                {content.map((member) => (
                    <article className="featured__card">
                        <span className="featured__tag">
                            {member.attributes.Position}
                        </span>

                        <img
                            src="/_removal.ai__tmp-63d113e611248_MQH2EH-removebg-preview.png"
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
                                href={
                                    member.attributes.LinkedIn_Link ??
                                    "https://www.linkedin.com/company/ytugirisim/"
                                }
                                className="home__social-icon"
                            >
                                <i className="bx bxl-linkedin" />
                            </a>
                            <a
                                href={
                                    member.attributes.Instagram_Link ??
                                    "https://www.instagram.com/ytugirisim/"
                                }
                                className="home__social-icon"
                            >
                                <i className="bx bxl-instagram" />
                            </a>
                            <a
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
                ))}
                <h2 className="section-title ">Ekibimiz!</h2>

                <Members />
            </div>
        </Layout>
    );
};

export async function getServerSideProps() {
    const memberResponse = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/members`
    );
    const data = await memberResponse.json();

    if (data) {
        return {
            props: {
                members: data,
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
