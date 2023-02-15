import React from "react";

export const WordCard = ({ content }) => {
    return (
        <div className="bd-grid skills__data">
            <span className="skills__name">{content}</span>
        </div>
    );
};

export default WordCard;
