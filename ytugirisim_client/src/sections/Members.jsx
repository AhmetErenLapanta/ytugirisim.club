import React, { useEffect, useState } from "react";
import MemberCard from "@/components/MemberCard";

const Members = () => {
    // const [members, setMembers] = useState();

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const memberResponse = await fetch(
    //             `${process.env.NEXT_PUBLIC_STRAPI_URL}/members`
    //         );
    //         const data = await memberResponse.json();
    //         setMembers(data);
    //     };
    //     fetchData();
    // }, []);
    return (
        <div className="work__container bd-grid">
            <MemberCard />
            <MemberCard />
            <MemberCard />
            <MemberCard />
            <MemberCard />
            <MemberCard />
        </div>
    );
};

export default Members;
