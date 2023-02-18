import Layout from "@/hoc/Layout";
import React from "react";
import BlogCard from "@/components/BlogCard";

const Blogs = ({ blogs }) => {
    return (
        <Layout>
            {blogs.data.map((blog) => (
                <BlogCard
                    key={blog.id}
                    id={blog.id}
                    content={blog.attributes}
                />
            ))}
        </Layout>
    );
};

export async function getServerSideProps() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/blogs`);

    const data = await response.json();

    return {
        props: {
            blogs: data,
        },
    };
}

export default Blogs;
