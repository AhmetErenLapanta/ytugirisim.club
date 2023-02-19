import Layout from "@/hoc/Layout";
import React from "react";
import { fetcher } from "lib/api";
import Markdown from "@/hoc/Markdown";
import MemberCard from "@/components/MemberCard";

const Blog = ({ blog, jwt, error }) => {
    return (
        <Layout>
            <Markdown className="section-title">{blog.Blog_Title}</Markdown>
            <Markdown className="bd-grid section">{blog.Blog_Content}</Markdown>
            {blog.author.data ? (
                <>
                    <Markdown className="section-title">Yazar</Markdown>
                    <MemberCard content={blog.author.data.attributes} />
                </>
            ) : (
                ""
            )}
        </Layout>
    );
};

export async function getServerSideProps({ req, params }) {
    const { slug } = params;
    const blogResponse = await fetcher(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/slugify/slugs/blog/${slug}?populate=*`
    );

    if (blogResponse) {
        return {
            props: {
                blog: blogResponse.data.attributes /*,  jwt: jwt ? jwt : ""  */,
            },
        };
    } else {
        return {
            props: { error: blogResponse.error.message },
        };
    }
}

export default Blog;
