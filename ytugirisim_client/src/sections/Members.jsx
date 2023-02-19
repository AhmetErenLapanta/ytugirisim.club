import React, { useEffect, useState } from "react";
import MemberCard from "@/components/MemberCard";
import Link from "next/link";
const Members = () => {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const memberResponse = await fetch(
                `${process.env.NEXT_PUBLIC_STRAPI_URL}/members`
            );
            const data = await memberResponse.json();

            // Calculate the number of members and generate a random starting index
            const numofMember = data.data.length;
            const startingIndex = Math.floor(Math.random() * (numofMember - 2));

            // Set state variables to trigger re-rendering
            setMembers(data.data.slice(startingIndex, startingIndex + 3));
        };

        fetchData();
    }, []);
    return (
        <div className="section">
            <h2 className="section-title">Ekip</h2>
            <div className="work__container bd-grid">
                {members?.map((member) => (
                    <MemberCard content={member.attributes} />
                ))}
            </div>
            <Link href="/members" type="">
                <button className="button2">Tüm Ekip!</button>
            </Link>
        </div>
    );
};

export default Members;
