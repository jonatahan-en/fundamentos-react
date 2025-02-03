//import clsx from 'clsx';
//import "./TweetsPage.css";
import { useEffect, useState } from "react";
import Button from "../../components/Button";
import { getlatestTweets } from "./service";
import  styles from  "./TweetsPage.module.css";
import { Tweet } from "./types";

console.log(styles);


function TweetsPage() {
    const [tweets, setTweets] = useState<Tweet[]>([]);
    useEffect(() => {
        getlatestTweets().then((response) => {
            setTweets(response);
        });
    }, []);
    
    return (
        //<div  className={clsx('TweetsPage', { green })}>
        <div  className={ styles.TweetsPage}>

            <h1 className='text-red-300' >Twitts Page</h1>

            <ul 
            className=' border-t-teal-600 flex flex-row'
            style={{ listStyle: "none" , padding: 0, margin: 0 }} >
                {tweets.map((tweet)  => (
                    <li key={tweet.id}>
                        {tweet.content}
                    </li>
                ))}
            </ul>
            <Button
                onClick={() => {
                    console.log("Button clicked!");
                }}
                $variant="secondary"
            >Click me!</Button>
            <Button $variant="primary">Primary</Button>
        </div>
    );
}

export default TweetsPage;