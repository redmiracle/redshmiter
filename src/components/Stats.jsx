import Avatar from "./Avatar.jsx";
import {useContext} from "react";
import {TwitterContext} from "../utils/context.js";


const Stats = () => {
    const {user, stats,changeFollowers,changeFollowing} = useContext(TwitterContext);

    return (
        <div className={'user-stats'}>
            <div>
                <Avatar/>
                {user.name}
            </div>
            <div className={'stats'}>
                <div
                    onClick={() => changeFollowers("+")}
                    onContextMenu={(e) =>{
                        e.preventDefault()
                        changeFollowers("-")
                    }}
                >
                    Followers: {stats.followers}
                </div>
                <div
                    onClick={() => changeFollowing("+")}
                    onContextMenu={(e) =>{
                        e.preventDefault()
                        changeFollowing("-")
                    }}

                >
                    Following: {stats.following}
                </div>
            </div>
        </div>
    );
};

export default Stats;