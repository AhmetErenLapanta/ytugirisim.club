const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section-title">Hakkımızda</h2>
            <div className="about__container bd-grid">
                <div className="about__img hidden">
                    <img src="/about.jpg" alt="" />
                </div>
                <div>
                    <h2 className="about__subtitle">
                        Yıldız Teknik Üniversitesi Girişimcilik Kulübü,
                    </h2>
                    <p className="about__text">
                        öğrencilere girişimcilik etkinlikleri, dersler,
                        seminerler ve atölyeler sunarak kariyer planlamalarına
                        ve girişimcilik yolculuklarına destek olur. Ayrıca
                        mentorluk ve staj imkanları sağlar ve üyelerini
                        girişimcilik yolculuğuna hazırlar. YTÜ Girişimcilik
                        Kulübü'nün amacı, üyelerinin girişimcilik düşünce
                        yapısını geliştirmek ve girişimcilik ekosistemi
                        oluşturmaktır.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
