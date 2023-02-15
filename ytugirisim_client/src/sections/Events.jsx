import React from "react";
import Event from "@/components/Event";

const Events = () => {
    return (
        <section className="work section" id="work">
            <h2 className="section-title">Etkinliklerimiz</h2>
            <div className="work__container bd-grid">
                <Event
                    title="Global Girişimcilik Günleri"
                    fileName="gggformat.JPG"
                />
                <Event title="StartUp MockUp" fileName="Sumu.JPG" />
                <Event title="Ideathon" fileName="ideathonimg.JPG" />
                <Event title="Technovation" fileName="Technovation'2020.jpg" />
                <Event title="TeaTalks" fileName="teatalk.jpg" />
                <Event title="Sosyal Sorumluluk" fileName="ssp.jpeg" />
            </div>
        </section>
    );
};

export default Events;
