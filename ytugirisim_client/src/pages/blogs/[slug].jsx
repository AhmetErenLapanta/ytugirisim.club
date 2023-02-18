import Layout from "@/hoc/Layout";
import React from "react";
import { fetcher } from "lib/api";
const Blog = ({ blog, jwt, error }) => {
    return (
        <Layout>
            <h1>{blog.Blog_Title}</h1>
            <p>{blog.Blog_Content}</p>
        </Layout>
    );
};

export async function getServerSideProps({ req, params }) {
    const { slug } = params;

    // const jwt =
    //     typeof window !== "undefined"
    //         ? getTokenFromLocalCookie
    //         : getTokenFromServerCookie(req);

    const blogResponse = await fetcher(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/slugify/slugs/blog/${slug}?populate=*`
        // jwt
        //     ? {
        //           headers: {
        //               Authorization: `Bearer ${jwt}`,
        //           },
        //       }
        //     : ""
    );

    if (blogResponse) {
        // console.log(blogResponse.data.attributes.reviews.data);
        return {
            props: {
                blog: blogResponse.data.attributes /*,  jwt: jwt ? jwt : ""  */,
            },
        };
    } else {
        return {
            props: { error: "errror" /* blogResponse.error.message */ },
        };
    }
}

export default Blog;
