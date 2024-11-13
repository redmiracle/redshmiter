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
        followers: 10,
        following: 100
    });

    const changeAvatar = url => {
        setUser(prevState => ({...prevState, avatar: url || prevState.avatar}));
    }
    const changeName = (newName) => {
        setUser(prevState => ({...prevState, name: newName || prevState.name}));
    }

    const changeFollowers = (action) => {
        switch (action) {
            case "+":
                setStats(prevState => ({...prevState, followers: prevState.followers + 1}))
                break;
            case  "-":
                setStats(prevState => ({...prevState, followers: prevState.followers - 1}))
                break;
        }
    }

    const changeFollowing = (action) => {
        switch (action) {
            case "+":
                setStats(prevState => ({...prevState, following: prevState.following + 1}))
                break;
            case  "-":
                setStats(prevState =>{({...prevState, following: prevState.following - 1})})
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
