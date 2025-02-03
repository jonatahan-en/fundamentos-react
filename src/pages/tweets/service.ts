import {client} from '../../api/client';
import { Tweet, TweetContent } from './types';

const tweetsURL = "/api/tweets";


export const getlatestTweets = async () => {
    const response = await client.get<Tweet[]>(tweetsURL);
    return response.data;
};

export const createTweet = async (tweet:TweetContent) => {
    const response = await client.post<Tweet>(tweetsURL, tweet);
    return response.data;
};
