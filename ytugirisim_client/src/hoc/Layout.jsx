import Head from "next/head";
import Nav from "../sections/Nav";
import Footer from "../sections/Footer";

const Layout = ({ children }) => {
    const schema = {
        "@type": "Organization",
        name: "YTU Girişimcilik Kulübü",
        url: "https://www.ytugirisim.club",
        sameAs: [
            "https://www.instagram.com/ytugirisim/",
            "https://twitter.com/ytugirisim",
            "https://www.linkedin.com/company/ytugirisim/",
        ],
    };
    return (
        <>
            <Head>
                <title>YTU Girişimcilik Kulübü</title>

                <meta charset="utf-8" />
                <meta
                    name="description"
                    content="Yıldız Teknik Üniversitesi Girişimcilik Kulübü resmi websitesi."
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta
                    name="keywords"
                    content="Yıldız Teknik Üniversitesi, Girişimcilik, Kulübü, Startup, öğrenci, üniversite,kariyer,networking,etkinlik"
                />
                <meta
                    name="author"
                    content="Yıldız Teknik Üniversitesi Girişimcilik Kulübü"
                />
                <meta property="og:title" content="YTU Girişimcilik Kulübü" />
                <meta
                    property="og:description"
                    content="Yıldız Teknik Üniversitesi Girişimcilik Kulübü resmi websitesi."
                />

                <link rel="icon" href="/perfil.png" />

                <link
                    href="https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css"
                    rel="stylesheet"
                />
                <script
                    type="module"
                    src="https://unpkg.com/ionicons@5.1.2/dist/ionicons/ionicons.esm.js"
                ></script>
                <script
                    nomodule=""
                    src="https://unpkg.com/ionicons@5.1.2/dist/ionicons/ionicons.js"
                ></script>
                <link
                    href="https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css"
                    rel="stylesheet"
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            </Head>
            <Nav />
            <main className="l-main">
                <div>
                    <div>{children}</div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Layout;
