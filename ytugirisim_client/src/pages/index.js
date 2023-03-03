import Layout from "@/hoc/Layout.jsx";
import Departments from "@/sections/Departments";
import Events from "@/sections/Events";
import WordCard from "@/components/WordCard";
import ContactForm from "@/components/ContactForm";
import Members from "@/sections/Members";
import BlogCards from "@/sections/BlogCards";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });
    return (
        <Layout>
            <motion.div className="progress-bar" style={{ scaleX }} />
            <section className="home bd-grid" id="home">
                <div className="home__data">
                    <h1 className="home__title">
                        Yıldız Teknik Üniversitesi
                        <br />
                        <span className="home__title-color">
                            Girişimcilik Kulübü
                        </span>
                        <br />
                        Resmi Web Sitesi
                    </h1>
                    <a
                        href="mailto:talha.arikan@ytugirisim.club"
                        className="button"
                    >
                        Contact
                    </a>
                </div>
                <div className="home__social">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.linkedin.com/company/ytugirisim/"
                        className="home__social-icon"
                    >
                        <i className="bx bxl-linkedin" />
                    </a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.instagram.com/ytugirisim/"
                        className="home__social-icon"
                    >
                        <i className="bx bxl-instagram" />
                    </a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.youtube.com/c/YT%C3%9CGiri%C5%9FimcilikKul%C3%BCb%C3%BC"
                        className="home__social-icon"
                    >
                        <i className="bx bxl-youtube" />
                    </a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://twitter.com/ytugirisim"
                        className="home__social-icon"
                    >
                        <i className="bx bxl-twitter" />
                    </a>
                </div>
                <div className="home__img">
                    <svg
                        className="home__blob"
                        viewBox="0 0 479 570"
                        xmlns="https://www.w3.org/2000/svg"
                        xmlnsXlink="https://www.w3.org/1999/xlink"
                    >
                        <mask id="mask0" mask-type="alpha">
                            <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
                        </mask>
                        <g mask="url(#mask0)">
                            <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
                            <image
                                className="home__blob-img"
                                x={50}
                                y={60}
                                href="/nlogo.png"
                            />
                        </g>
                    </svg>
                </div>
            </section>

            <section className="about section" id="about">
                <h2 className="section-title">Hakkımızda</h2>
                <div className="about__container bd-grid">
                    <div>
                        <h2 className="about__subtitle">
                            Yıldız Teknik Üniversitesi Girişimcilik Kulübü,
                        </h2>
                        <p className="about__text">
                            öğrencilere girişimcilik etkinlikleri, dersler,
                            seminerler ve atölyeler sunarak kariyer
                            planlamalarına ve girişimcilik yolculuklarına destek
                            olur. Ayrıca mentorluk ve staj imkanları sağlar ve
                            üyelerini girişimcilik yolculuğuna hazırlar. YTÜ
                            Girişimcilik Kulübü'nün amacı, üyelerinin
                            girişimcilik düşünce yapısını geliştirmek ve
                            girişimcilik ekosistemi oluşturmaktır.
                        </p>
                    </div>
                </div>
            </section>
            <WordCard
                content="Fikrini Geliştir, Dünyayı Değiştir!"
                className="section"
            />
            <BlogCards />
            <Events />
            <Members />
            <Departments className="work__container" />
            <ContactForm className="section bd-grid" id="contact" />
        </Layout>
    );
}
