import { useState } from "react";
import { Link } from "react-router-dom";

export function Home() {
  const [news, setNews] = useState([{ src: "https://img.etimg.com/thumb/msid-93754432,width-650,imgsize-47820,,resizemode-4,quality-100/space-x-musk-.jpg",
   title: "Elon Musk reacts, posts cryptic tweets after whistleblower's bot claims:", 
   description: `San Francisco, After a Twitter whistleblower claimed that the microblogging platform lied to Elon Musk about bots, the tech billionaire has now reacted to it and shared some cryptic tweets.

   On the microblogging site, Musk said that 'in case anyone feels like buying a fine whistle...' along with a picture of a whistle.`
   }]);
  return (
    <div className="homepage">
      <h3>
        <span className="module-title">Welcome to ABC.com</span>
      </h3>
      <br />
     <div className="news"> 
     {news.map((news)=> {
        return(
        <div className="newsone">
            <img src={news.src} width={600} />
            <h2>{news.title}</h2>
            <h5>{news.description}</h5>
        </div>
        )
     })}
     </div>


    </div>
  );
}
