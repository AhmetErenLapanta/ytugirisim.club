import Layout from "@/hoc/Layout";
import Markdown from "@/hoc/Markdown";
import MemberCard from "@/components/MemberCard";
import { useEffect, useState } from "react";
import { fetcher } from "lib/api";
import { motion, useScroll, useSpring } from "framer-motion";

const Blog = ({ blog, error }) => {
    const [imgLink, setImgLink] = useState();
    const { scrollYProgress } = useScroll();

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    useEffect(() => {
        const fetchData = async () => {
            const mediaResponse = await fetch(
                `${process.env.NEXT_PUBLIC_STRAPI_URL}/medias?populate=*`
            );
            const mediaData = await mediaResponse.json();

            setImgLink(mediaData.data);
        };
        fetchData();
    });

    // Get the ID of the profile picture for the blog's author
    const pictureId = blog.author.data.attributes.Profile_Picture.data.id;

    // Find the media object with the same ID as the profile picture (using optional chaining to avoid errors)
    const mediaObject = imgLink?.find((obj) => obj.id === pictureId);

    // If the media object exists, get the URL property
    const mediaPath = mediaObject?.attributes.media_field.data.attributes.url;

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
                    <MemberCard
                        key={blog.author.data.id}
                        content={blog.author.data.attributes}
                        mediaPath={mediaPath}
                    />
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
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/slugify/slugs/blog/${slug}?populate=author.Profile_Picture`
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
