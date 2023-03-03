import Link from "@/components/Link";
import React from "react";

const BlogCard = ({ content }) => {
    return (
        <Link href={"/blogs/" + content.slug}>
            <article className="featured__card">
                <span className="featured__tag">
                    {content.Blog_Releasing_Date}
                </span>

                <div>
                    {content.author?.data ? (
                        <h3
                            className="featured__title"
                            style={{ color: "var(--second-color)" }}
                        >
                            {content.author.data.attributes.Full_Name}
                        </h3>
                    ) : (
                        <h3
                            className="featured__title"
                            style={{ color: "var(--second-color)" }}
                        >
                            Girişimcilik Kulübü
                        </h3>
                    )}
                    <span
                        className="featured__department"
                        style={{ fontSize: "1.5rem" }}
                    >
                        {content.Blog_Title}
                    </span>
                    <div
                        className="featured__button"
                        style={{ marginBottom: 0, marginTop: "2rem" }}
                    >
                        <div
                            className="home__social-icon"
                            style={{ margin: "0 auto" }}
                        >
                            <i
                                className="bx bx-book-reader bx-flashing"
                                style={{ fontSize: "3rem" }}
                            ></i>
                        </div>
                    </div>
                </div>
            </article>
        </Link>
    );
};

export default BlogCard;
