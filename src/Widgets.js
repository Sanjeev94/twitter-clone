import React from 'react';
import "./Widgets.css";
import SearchIcon from '@material-ui/icons/Search';
import {TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed} from 'react-twitter-embed';

function Widgets() {
    return (
        <div className="widgets" >
            <div className="widgets__input">
                <SearchIcon className="widgets__serachIcon" />
                <input placeHolder="Search Twitter" type="text" />
            </div>

                <div className="widgets__widgetContainer">
                    <h2>Whats Happening</h2>
                    <TwitterTweetEmbed tweetId={'858551177860055040'} />

                    <TwitterTimelineEmbed 
                    sourceType="profile"
                    screenName="cleverqazi"
                    options={{height: 400}}/>

                    <TwitterShareButton 
                    url={"https://facebook.com/cleverprogrammer"}
                    options={{text: "React is awesome ", via:"cleverqazi"}}/>
                    </div>
            </div>
    )
}

export default Widgets
