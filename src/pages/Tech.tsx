import { useState } from "react";
import { Link } from "react-router-dom";

export function Worklife() {
  const [tekno, setTekno] = useState([
    {
      title:
        "Elon Musk reacts, posts cryptic tweets after whistleblower's bot claims:",
      src: "https://miro.medium.com/max/1200/1*MIyXiqybdWcvDqcvd35IRA.jpeg",
      description:
        "Elon Musk posts cryptic Disney tweet after ex-hacker blows whistle on Twitter,The Tesla boss tweeted a photo of the Disney character Jiminy Cricket making a whistling gesture",
      reach: 250,
      src2: "https://nypost.com/wp-content/uploads/sites/2/2022/08/twitter-musk-88-2.jpg?quality=75&strip=all&w=919",
      description2:
        "Twitter insists that Zatko was fired for poor performance.Musk and Twitter are set to do legal battle, in a Delaware court after the company sued the Tesla mogul for trying to back out of a $44 billion agreement to buy the social media site and take it private.The world’s wealthiest person sought to abort the deal because he claimed the company wasn’t forthcoming about the proliferation of automated spam and bot accounts. Twitter disputes this.Experts told The Post that Musk shouldn't fall into the trap of thinking that Zatkos accusations will be a boon to his legal case against Twitter.",
      title2: "“Give a little whistle,” reads the cartoon.",
      src3: "https://nypost.com/wp-content/uploads/sites/2/2022/08/elon-00-1.jpg?quality=75&strip=all",
      description3:
        "In a subsequent tweet, Musk wrote: So spam prevalence *was* shared with the board, but the board chose not [to] disclose that to the public…",
    },
  ]);

  return (
    <div className="techPage">
      <a href="http://127.0.0.1:5173/worklife" className="hhref">
        <h3 className="module-title">TECH</h3>
      </a>
      <br />

      <div className="news1">
        {tekno.map((tekno) => {
          return (
            <div className="newsone">
              <a href="http://127.0.0.1:5173/worklife" className="href">
                <img src={tekno.src} width={750} />

                <h2>{tekno.title}</h2>
                <br />
                <h4>{tekno.description}</h4>

                <br />
                <img src={tekno.src2} width={500} />
                <br />
                <h4>{tekno.description2}</h4>
                <br />
                <h3>{tekno.title2}</h3>
                <br />
                <img src={tekno.src3} width={500} />
                <br />
                <h4>{tekno.description3}</h4>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
