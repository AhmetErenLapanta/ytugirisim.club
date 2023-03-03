import React, { useEffect, useState } from "react";
import MemberCard from "@/components/MemberCard";
import Link from "@/components/Link";

const Members = () => {
    const [members, setMembers] = useState([]);
    const [imgLink, setImgLink] = useState();

    useEffect(() => {
        const fetchData = async () => {
            // Fetch members data
            const memberResponse = await fetch(
                `${process.env.NEXT_PUBLIC_STRAPI_URL}/members?populate=*`
            );
            const data = await memberResponse.json();

            // Fetch media data
            const mediaResponse = await fetch(
                `${process.env.NEXT_PUBLIC_STRAPI_URL}/medias?populate=*`
            );
            const mediaData = await mediaResponse.json();

            // Set state for media link to be displayed
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
                    // Get the id of the member's profile picture
                    const pictureId = member.attributes.Profile_Picture.data.id;

                    // Find the media object for the profile picture using its id
                    const mediaObject = imgLink?.find(
                        (obj) => obj.id === pictureId
                    );

                    // Get the url for the media object
                    const picPath =
                        mediaObject?.attributes.media_field.data.attributes.url;

                    // Render the member card with its corresponding data
                    return (
                        <MemberCard
                            key={member.id}
                            content={member.attributes}
                            mediaPath={picPath}
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
