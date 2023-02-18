import Layout from "@/hoc/Layout.jsx";
import Departments from "@/sections/Departments";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Events from "@/sections/Events";
import WordCard from "@/components/WordCard";
import ContactForm from "@/components/ContactForm";
import Members from "@/sections/Members";
import BlogCards from "@/sections/BlogCards";

export default function Home() {
    return (
        <Layout>
            <Hero />
            <About />
            <h2 className="section skills__container skills__subtitle">
                Fikrini Geliştir, Dünyayı Değiştir!
            </h2>
            <BlogCards />
            <Events />
            <WordCard content="Enerjik" />
            <WordCard content="Dinamik" />
            <WordCard content="Eğlenceli" />
            <Members />
            <Departments className="work__container" />
            <ContactForm className="section bd-grid" id="contact" />
            {/*===== CONTACT =====*/}
        </Layout>
    );
}
