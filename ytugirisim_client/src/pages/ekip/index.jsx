import Layout from "@/hoc/Layout";
import { Members } from "@/sections/Members";
import React from "react";

const index = () => {
    return (
        <Layout>
            <div className="section">
                <h2 className="section-title ">Ekibimiz!</h2>
                <Members />
            </div>
        </Layout>
    );
};

export default index;
