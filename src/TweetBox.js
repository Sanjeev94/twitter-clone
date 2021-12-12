import React, {useState} from 'react';
import "./TweetBox.css";
import { Avatar, Button } from '@material-ui/core';
import db from './firebase'

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = e => {
        e.preventDefault();
        db.collection('posts').add({
            displayName: 'Rafeh Qazi',
            username: 'cleverqazi',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"
        });
        setTweetMessage("");
        setTweetImage("");
    };
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="F:\react_learn\twitter-clone\src\a.png" sx={{width: 24, height: 24}} variants="rounded"></Avatar>
                    <input 
                    onChange={(e) => setTweetMessage(e.target.value)}
                    value={tweetMessage} placeHolder="Whats Happening?" 
                    type="text" />
                    
                </div>
                <input 
                onChange={(e) => setTweetImage(e.target.value)}
                value={tweetImage}
                className="tweetBox__imageInput" placeHolder="Enter Image URL" type="text" />
                <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton" >
                    Tweet
                </Button>
            </form>
        </div>
    )
}

export default TweetBox
