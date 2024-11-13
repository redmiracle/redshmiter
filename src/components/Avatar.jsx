import {useContext} from "react";
import {TwitterContext} from "../utils/context.js";

const Avatar = ({size}) => {
    const {user, changeAvatar,changeName} = useContext(TwitterContext);

    return (
        <img
            onClick={() => {
                const url = prompt('Enter new avatar url');
                changeAvatar(url);
            }}
            onContextMenu={(e) => {
                e.preventDefault();
                const newName=prompt('Enter name');
                changeName(newName);
            }}
            className={`user-avatar ${size ?? ''}`}
            src={user.avatar} alt={user.name}
        />
    );
};

export default Avatar;