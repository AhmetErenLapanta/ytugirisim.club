import Link from "next/link";
import React from "react";

const BlogCard = ({ key, id, content }) => {
    return (
        <Link href={"/blogs/" + content.slug}>
            <article className="featured__card">
                <span className="featured__tag">{content.Blog_Title}</span>

                <div className="featured__data">
                    <h3 className="featured__title">
                        {content.Blog_Releasing_Date}
                    </h3>
                    <span className="featured__department">
                        Matematik Mühendisliği
                    </span>
                </div>
            </article>
        </Link>
    );
};

export default BlogCard;
