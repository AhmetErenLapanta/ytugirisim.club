import React, { useEffect, useState } from "react";
import BlogCard from "@/components/BlogCard";
import Link from "@/components/Link";

const BlogCards = () => {
    // const [idList, setIdList] = useState([]);
    // const [content, setContent] = useState();

    // // Fetch blog data on component mount
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const blogResponse = await fetch(
    //             `${process.env.NEXT_PUBLIC_STRAPI_URL}/blogs?populate=*`
    //         );
    //         const data = await blogResponse.json();

    //         // Get the last three IDs in the list and store them in state
    //         const newIdList = data.data.map((blog) => blog.id);
    //         setIdList(newIdList.slice(-3));

    //         // Store blog data in state
    //         setContent(data.data);
    //     };

    //     fetchData();
    // }, []);

    return (
        <div className="section">
            {/* <h2 className="section-title">Son Bloglarımız</h2>
            <section className="blog__container bd-grid">
                {idList.map((id) => {
                    // Get the blog data for this ID
                    const blogContent = content[id - 1]?.attributes;
                    // Render a BlogCard component with this data
                    return <BlogCard key={id} id={id} content={blogContent} />;
                })}
            </section> */}
            <Link href="/blogs" type="">
                <button className="button2">Tüm Bloglar!</button>
            </Link>
        </div>
    );
};

export default BlogCards;
