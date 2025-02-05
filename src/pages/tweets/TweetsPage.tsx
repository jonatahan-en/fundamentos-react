//import clsx from 'clsx';
//import "./TweetsPage.css";
import  styles from  "./TweetsPage.module.css";
import { getlatestTweets } from "./service";
import { useEffect, useState } from "react";
import { Tweet } from "./types";
import Layout from "../../components/layout/Layout";



// Componente TweetsPage
function TweetsPage() { 
    const [tweets, setTweets] = useState<Tweet[]>([]);// tweets y setTweets son un array de Tweet
    
    useEffect(() => {
        getlatestTweets().then((response) => {// Llama a getlatestTweets y luego a then
            setTweets(response);// setTweets es response
        });
    }, []);

    return (
        //<div  className={clsx('TweetsPage', { green })}>
        <Layout title="What are you thinking?">
            <div  className={ styles.TweetsPage}>
                <h1 className='text-red-300' >Twitts Page</h1>
                <ul 
                    className=' border-t-teal-600 flex flex-row'
                    style={{ listStyle: "none"  }} 
                >
                    { tweets.map((tweet)  => (
                        <li key={tweet.id}
                        >
                            {tweet.content}
                        </li>
                    ))}
                </ul>    
            </div>
        </Layout>
    );
}

export default TweetsPage;