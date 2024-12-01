import { useState, useEffect } from 'react';
import axios from 'axios'; // フェッチ用

interface NoteItem {
    title: string
    description: string
    link: string
    pubDate: string
}



const Rssfeed = () => {
    // noteから取得した最新のデータを格納
    const [noteFeeds, setNoteFeeds] = useState<NoteItem[]>([])
    const rssURL:string = 'https://rss-feed-updater.netlify.app/.netlify/functions/rss'

    // rssfeedからデータを取得
    useEffect(() => {
        const getNoteFromRssFeed = async () => {
            try {
                const response = await axios.get(rssURL);
                const data = response.data.items.slice(0,3)
                setNoteFeeds(data)
                
              } catch (err: unknown) {
                // エラーを安全に処理
                if (axios.isAxiosError(err)) {
                    console.log(err.message);
                } else {
                  console.log('予期せぬエラーが発生しました。');
                }
              }
        }

        getNoteFromRssFeed()

    },[])

    // 取得した日付を変換する関数
    const formatToMonthDay = (dateString:string) => {
        const date = new Date(dateString);
        return `${date.getMonth() + 1}/${date.getDate()}`;
      };

    return (
        <>
        <div id='blog' className='blog'>
            <div className='new-posts'>
                <h2>New Posts!</h2>
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
