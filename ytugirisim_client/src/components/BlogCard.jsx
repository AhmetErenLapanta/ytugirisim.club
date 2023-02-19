import Link from "next/link";
import React from "react";

const BlogCard = ({ content }) => {
    console.log(content);
    return (
        <Link href={"/blogs/" + content.slug}>
            <article className="featured__card">
                <span className="featured__tag">
                    {content.Blog_Releasing_Date}
                </span>

                <div className="featured__data">
                    {content.author.data ? (
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
                        <a
                            className="home__social-icon"
                            style={{ marginRight: 0 }}
                        >
                            <i
                                class="bx bx-book-reader bx-flashing"
                                style={{ fontSize: "3rem" }}
                            ></i>
                        </a>
                    </div>
                </div>
            </article>
        </Link>
    );
};

export default BlogCard;
