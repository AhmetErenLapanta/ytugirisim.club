import Layout from "@/hoc/Layout";
import React from "react";
import { fetcher } from "lib/api";
import Markdown from "@/hoc/Markdown";
import MemberCard from "@/components/MemberCard";
import { motion, useScroll, useSpring } from "framer-motion";

const Blog = ({ blog, error }) => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });
    return (
        <Layout>
            <motion.div className="progress-bar" style={{ scaleX }} />
            <Markdown className="section-title">{blog.Blog_Title}</Markdown>
            <Markdown className="bd-grid section blog_content">
                {blog.Blog_Content}
            </Markdown>
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
                blog: blogResponse.data.attributes,
            },
        };
    } else {
        return {
            props: { error: blogResponse.error.message },
        };
    }
}

export default Blog;
