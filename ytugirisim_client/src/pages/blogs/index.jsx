import Layout from "@/hoc/Layout";
import React from "react";
import BlogCard from "@/components/BlogCard";
import { motion, useScroll, useSpring } from "framer-motion";

const Blogs = ({ blogs }) => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <Layout>
            <motion.div className="progress-bar" style={{ scaleX }} />

            <h2 className="section-title ">Tüm Bloglar!</h2>
            <img src="/Blogging-pana.svg" className="page_hero"></img>
            <section className="blog__container bd-grid">
                {blogs.data.map((blog) => (
                    <BlogCard
                        key={blog.id}
                        id={blog.id}
                        content={blog.attributes}
                    />
                ))}
            </section>
        </Layout>
    );
};

export async function getServerSideProps() {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/blogs?populate=*`
    );

    const data = await response.json();

    return {
        props: {
            blogs: data,
        },
    };
}

export default Blogs;
