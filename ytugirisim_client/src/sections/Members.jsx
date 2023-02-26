import React, { useEffect, useState } from "react";
import MemberCard from "@/components/MemberCard";
import Link from "next/link";

const Members = () => {
    const [members, setMembers] = useState([]);
    const [imgLink, setImgLink] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const memberResponse = await fetch(
                `${process.env.NEXT_PUBLIC_STRAPI_URL}/members?populate=*`
            );
            const data = await memberResponse.json();

            const mediaResponse = await fetch(
                `${process.env.NEXT_PUBLIC_STRAPI_URL}/medias?populate=*`
            );
            const mediaData = await mediaResponse.json();

            setImgLink(mediaData.data);

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
                {members?.map((member) => {
                    let pictureId = member.attributes.Profile_Picture.data.id;
                    let theOne = imgLink?.find((obj) => obj.id === pictureId);
                    let picPath =
                        theOne?.attributes.media_field.data.attributes.url;

                    return (
                        <MemberCard
                            key={member.id}
                            content={member.attributes}
                            picPath={picPath}
                        />
                    );
                })}
            </div>
            <Link href="/members" type="">
                <button className="button2">Tüm Ekip!</button>
            </Link>
        </div>
    );
};

export default Members;
