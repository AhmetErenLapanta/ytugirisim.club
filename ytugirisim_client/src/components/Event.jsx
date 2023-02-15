import React from "react";

export const Event = ({ title, fileName }) => {
    return (
        <>
            <div>
                <h2 className="skills__subtitle">{title}</h2>
                <a className="work__img">
                    <img src={"/" + fileName} alt="" />
                </a>
            </div>
        </>
    );
};

export default Event;
