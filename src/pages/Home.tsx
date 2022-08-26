import { useState } from "react";
import { Link } from "react-router-dom";

export function Home() {
  const [news, setNews] = useState([
    {
      src: "https://img.etimg.com/thumb/msid-93754432,width-650,imgsize-47820,,resizemode-4,quality-100/space-x-musk-.jpg",
      title:
        "Elon Musk reacts, posts cryptic tweets after whistleblower's bot claims:",
      description: `San Francisco, After a Twitter whistleblower claimed that the microblogging platform lied to Elon Musk about bots, the tech billionaire has now reacted to it and shared some cryptic tweets.

   On the microblogging site, Musk said that 'in case anyone feels like buying a fine whistle...' along with a picture of a whistle.`,
    },
  ]);
  const [trends, setTrends] = useState([
    {
      src: "https://ichef.bbci.co.uk/news/976/cpsprodpb/3B90/production/_125584251_b687df8b60df549ecdb26553601d86145ca04b68.jpg.webp",
      title:
        "A police chief accused of botching the response to the fatal shooting .",
    },
    {
      src: "https://ichef.bbci.co.uk/news/976/cpsprodpb/162A9/production/_126439709_9e28e2fb-0e84-4749-8b61-421ce0fd75bb.jpg",
      title:
        "US actress and director Olivia Wilde has described being served custody.",
    },
    {
      src: "https://ychef.files.bbci.co.uk/1600x900/p0cwbst9.webp",
      title: "Japan is one of the world's biggest plastic waste producers .",
    },
    {
      src: "https://ichef.bbci.co.uk/news/976/cpsprodpb/1547C/production/_126446178_1e545a8e41ff293215ef84526c70b9a25c911586.jpg.webp",
      title:
        "The Russian-occupied Zaporizhzhia nuclear plant lost its electricity supply from the Ukraine.",
    },
  ]);

  const [football, setFootball] = useState([
    {
      src: "https://i.eurosport.com/2022/08/22/3437298-70131128-2560-1440.jpg?w=1400",
      title:
        "Champions League draw: Liverpool to meet Rangers and Celtic face Real Madrid.",
    },
    {
      src: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltc2dbd03a5c1e4d58/61fe4abf2a703a1cca72f988/GettyImages-1238190211.jpg",
      title:
        "Misfiring Man Utd only have themselves to blame after stunning FA Cup exit against Middlesbrough",
    },
    {
      src: "https://ichef.bbci.co.uk/onesport/cps/624/cpsprodpb/185C4/production/_124408799_ancelotti.jpg",
      title:
        "Real Madrid v Man City: Luck or genius? Why Carlo Ancelotti is underrated",
    },
    {
      src: "https://ichef.bbci.co.uk/onesport/cps/800/cpsprodpb/581A/production/_126445522_gettyimages-1409722896.jpg",
      title: "Novak Djokovic unable to travel to New York for US Open",
    },
  ]);

  const [showbiz, setShowbiz] = useState([
    {
      src: "https://www.thesun.co.uk/wp-content/uploads/2022/08/RM-nick-diy-op2.jpg?w=660",
      title:
        "SO SAD' Nick Knowles drops HUGE hint DIY SOS could be CANCELLED with worrying ABC news",
    },
    {
      src: "https://metro.co.uk/wp-content/uploads/2022/04/SEC_99638175.jpg?quality=90&strip=all",
      title:
        "DATE NIGHT Nick Knowles, 59, and girlfriend Katie Dadzie, 32, look loved up on night out in London",
    },
    {
      src: "https://thehill.com/wp-content/uploads/sites/2/2022/08/Collage-Maker-24-Aug-2022-02.02-PM.jpg?w=980&h=552&crop=1",
      title:
        "Kim Kardashian beats Hillary Clinton in legal knowledge trivia quiz",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR94bYWhU0uqcu5eSBVfFPLPA1hTrkFuLOG9Q&usqp=CAU",
      title:
        "FINAL GOODBYE Darius Campbell Danesh, He worried pals by going 'off-grid' in the months before his death",
    },
  ]);

  const [travel, setTravel] = useState([
    {
      src: "https://travel.usnews.com/dims4/USNEWS/22198a8/2147483647/resize/445x280%5E%3E/crop/445x280/quality/85/?url=https://travel.usnews.com/images/gettyimages-619157254_b0W8ULv.jpg",
      title: "San Diego",
    },
    {
      src: "https://travel.usnews.com/dims4/USNEWS/11f833d/2147483647/resize/445x280%5E%3E/crop/445x280/quality/85/?url=https://travel.usnews.com/images/main_cropped_445x280_JRydtwn.jpg",
      title: "Outer Banks",
    },
    {
      src: "https://travel.usnews.com/dims4/USNEWS/ad1fae5/2147483647/resize/445x280%5E%3E/crop/445x280/quality/85/?url=https://travel.usnews.com/images/boston_harbor_cropped_445x280_vwMXbKO.jpg",
      title: "Boston",
    },
    {
      src: "https://travel.usnews.com/dims4/USNEWS/bfd7067/2147483647/resize/445x280%5E%3E/crop/445x280/quality/85/?url=https://travel.usnews.com/images/main_photo_cropped1_445x280_qR2qkje.jpg",
      title: "Curacao",
    },
  ]);

  const [culture, setCulture] = useState([
    {
      src: "https://img.traveltriangle.com/blog/wp-content/uploads/2017/10/234-400x266.jpg",
      title: "Instanbul",
    },
    {
      src: "https://img.traveltriangle.com/blog/wp-content/uploads/2017/10/517-400x266.jpg",
      title: "New York",
    },
    {
      src: "https://img.traveltriangle.com/blog/wp-content/uploads/2017/10/818-400x267.jpg",
      title: "Barcelona",
    },
    {
      src: "https://travel.usnews.com/dims4/USNEWS/bfd7067/2147483647/resize/445x280%5E%3E/crop/445x280/quality/85/?url=https://travel.usnews.com/images/main_photo_cropped1_445x280_qR2qkje.jpg",
      title: "Dubai",
    },
  ]);

  return (
    <div className="homepage">
      <div className="welcome">
        <h3 className="module-title">Welcome to ABC.com</h3>
        <h3 className="friday">Friday, 26 Agust</h3>

        <hr />
      </div>

      <br />
      <div className="template">
        <div className="news">
          {news.map((news) => {
            return (
              <div className="newsone">
                <a href="http://127.0.0.1:5173/worklife" className="href">
                  <img src={news.src} width={600} />
                  <br />

                  <h1>{news.title}</h1>
                </a>
              </div>
            );
          })}
        </div>
        <br />
        <a href="http://127.0.0.1:5173/news" className="hhref">
          <h3 className="module-title">News</h3>
        </a>
        <hr />
        <br />
        <div className="trends">
          {trends.map((trends) => {
            return (
              <div className="trendone">
                <a href="http://127.0.0.1:5173/news" className="href">
                  <img src={trends.src} width={308} />
                  <h4>{trends.title}</h4>
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <br />
      <a href="http://127.0.0.1:5173/sport" className="hhref">
        <h3 className="module-title">Sport</h3>
      </a>
      <hr />
      <br />

      <div className="trends">
        {football.map((football) => {
          return (
            <div className="trendone">
              <a href="http://127.0.0.1:5173/sport" className="href">
                <img src={football.src} width={308} />
                <h4>{football.title}</h4>
              </a>
            </div>
          );
        })}
      </div>
      <br />
      <a href="http://127.0.0.1:5173/reel" className="hhref">
        <h3 className="module-title">Showbiz</h3>
      </a>
      <hr />
      <br />
      <div className="trends">
        {showbiz.map((showbiz) => {
          return (
            <div className="trendone">
              <a href="http://127.0.0.1:5173/showbiz" className="href">
                <img src={showbiz.src} width={308} />
                <h4>{showbiz.title}</h4>
              </a>
            </div>
          );
        })}
      </div>
      <br />
      <a href="http://127.0.0.1:5173/travel" className="hhref">
        <h3 className="module-title">Travel</h3>
      </a>
      <hr />
      <br />

      <div className="trends">
        {travel.map((travel) => {
          return (
            <div className="trendone">
              <a href="http://127.0.0.1:5173/travel" className="href">
                <img src={travel.src} width={308} />
                <h4>{travel.title}</h4>
              </a>
            </div>
          );
        })}
      </div>

      <br />
      <a href="http://127.0.0.1:5173/culture" className="hhref">
        <h3 className="module-title">Culture</h3>
      </a>
      <hr />
      <br />
      <div className="trends">
        {culture.map((culture) => {
          return (
            <div className="trendone">
              <a href="http://127.0.0.1:5173/culture" className="href">
                <img src={culture.src} width={308} />
                <h4>{culture.title}</h4>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
