import React, { useEffect, useState } from "react";
import BlogCard from "@/components/BlogCard";

const BlogCards = () => {
    const [idList, setIdList] = useState([]);
    const [content, setContent] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const blogResponse = await fetch(
                `${process.env.NEXT_PUBLIC_STRAPI_URL}/blogs`
            );
            const data = await blogResponse.json();

            const newIdList = data.data.map((blog) => blog.id);
            setIdList(newIdList.slice(-3));
            setContent(data.data);
        };
        fetchData();
    }, []);

    return (
        <section className="blog__container bd-grid">
            {idList.map((id) => {
                const blogContent = content[id - 1]?.attributes;
                return <BlogCard key={id} id={id} content={blogContent} />;
            })}
        </section>
    );
};

export default BlogCards;
