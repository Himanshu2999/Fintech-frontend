import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const JoinRoom = () => {

    const appID = 471160492;

    const [flag, setflag] = useState(false)

    const serverSecret =
        "f56fd89ba2e5d176e5b26a05c766983d";

    const [roomID, setroom] = useState("");

    const { name } = useSelector((state) => state);

    const meetingRef = useRef(null);


    useEffect(async() => {

        const room = prompt("Enter RoomID");
        let resp = await fetch(`https://fintech-backend-6.onrender.com/api/verifyroom/${room}`)
        if (resp.ok) {
            let res = await resp.json();
            if (res.statuscode == 1) {
                setflag(true)
                setroom(room)
            }
            else {
                setflag(false)
            }
        }

    }, [])


    useEffect(() => {

        if (!roomID || !meetingRef.current) {
            return;
        }

        const userID =
            `user-${Date.now()}`;

        const kitToken =
            ZegoUIKitPrebuilt.generateKitTokenForTest(
                appID,
                serverSecret,
                roomID,
                userID,
                name || "User"
            );


        const zp =
            ZegoUIKitPrebuilt.create(kitToken);


        zp.joinRoom({
            container: meetingRef.current,

            scenario: {
                mode:
                    ZegoUIKitPrebuilt.OneONoneCall,
            },
        });


    }, [roomID, name]);


   

   
    return (
        
            flag == true?
        
            <div ref={meetingRef}></div>
        
            :  <h2> roomid is invalid </h2>
    );
};

export default JoinRoom;