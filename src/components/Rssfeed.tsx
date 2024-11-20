import { useState, useEffect } from 'react';
import axios from 'axios'; // フェッチ用
import { XMLParser } from 'fast-xml-parser';
import Title from './Title';

interface NoteItem {
    title: string
    description: string
    link: string
    pubDate: string
}


const Rssfeed = () => {
    // noteから取得した最新のデータを格納
    const [noteFeeds, setNoteFeeds] = useState<NoteItem[]>([])
    const rssFeedURL:string = 'https://rss.app/feeds/LVIHzO8RzHaMMuQQ.xml'

    // rssfeedからデータを取得
    const getNoteFromRssFeed = async () => {
        try {
            const response = await axios.get<string>(rssFeedURL, { responseType : 'text'});
            const parser = new XMLParser();
            const parseData = parser.parse(response.data)
            const items = parseData.rss.channel.item.slice(0,3)
            setNoteFeeds(items as NoteItem[])
        } catch(error:unknown) {
            if(error){
                console.log(`エラーをキャッチしました: ${error}`)
            } else {
                console.log("予期せぬエラーが発生しました。")
            }
             
        }
    }

    useEffect(() => {
        getNoteFromRssFeed()
    },[])

    // xmlで取得した日付を変換する関数
    const formatToMonthDay = (dateString:string) => {
        const date = new Date(dateString);
        return `${date.getMonth() + 1}/${date.getDate()}`;
      };

    return (
        <>
        <div id='blog' className='blog'>
            <div className='new-posts'>
                <h2>New Posts</h2>
            </div>
            <div className='blog-area'>
                <ul>
                {noteFeeds.map((article, index) => (
                    <li key={index}>
                        <p>{formatToMonthDay(article.pubDate)}</p>
                        <a href={article.link} target="_blank" rel="noopener noreferrer">
                            {article.title}
                        </a>
                        
                    </li>
                ))}
                </ul>
            </div>
      </div>
      </>
    )

}

  
export default Rssfeed
