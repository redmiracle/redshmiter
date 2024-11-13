import './App.css'
import Navigation from "./components/Navigation.jsx";
import Body from "./components/Body.jsx";
import {useState} from "react";
import {TwitterContext} from "./utils/context.js";


function App() {
    const [user, setUser] = useState({
        name: 'Monster',
        avatar: 'https://gravatar.com/avatar/000?d=monsterid'
    });

    const [stats, setStats] = useState({
        followers: 0,
        following: 0
    });

    const changeAvatar = url => {
        setUser(prev => ({...prev, avatar: url || prev.avatar}));
    }
    const changeName = (newName) => {
        setUser(prev => ({...prev, name: newName || prev.name}));
    }

    const changeFollowers = (action) => {
        switch (action) {
            case "+":
                setStats(prev => ({...prev, followers: prev.followers + 1}))
                break;
            case  "-":
                setStats(prev => ({...prev, followers:prev.followers>0?prev.followers - 1:0}))
                break;
        }
    }

    const changeFollowing = (action) => {
        switch (action) {
            case "+":
                setStats(prevState => ({...prevState, following: prevState.following + 1}))
                break;
            case  "-":
                setStats(prevState => ({...prevState, following:prevState.following>0?prevState.following - 1:0}))

                break;
        }
    }







        return (
            <div className={'app'}>
                <TwitterContext.Provider value={{
                    user, stats, changeAvatar, changeName, changeFollowers,changeFollowing,
                }}>
                    <Navigation/>
                    <Body/>
                </TwitterContext.Provider>
            </div>
        )
    }


export default App
