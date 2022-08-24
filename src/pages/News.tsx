import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
  useState,
} from "react";
import { Link } from "react-router-dom";

export function News() {
  const [article, setArticle] = useState([
    {
      src: "https://s2.tvp.pl/images2/2/5/8/uid_258d17ff9b1906d56aed05cd1e6b8e881647674788273_width_907_play_0_pos_0_gs_0_height_515.jpg",
      title: "Fifteen killed in Russian strike on rail station - Zelensky :",
      description:
        "The alleged Russian attack that President Zelensky says killed 15 people happened at Chaplyne railway station in a Ukrainian-held area roughly between Zaporizhzhia and Donet on the map below.",
    },
    {
      title:
        "Hamilton: US church apologies for modified rendition of hit musical",
      src: "https://ichef.bbci.co.uk/news/976/cpsprodpb/279F/production/_126434101_gettyimages-545770570.jpg",
      description:
        "A US church has apologised to Hamilton creator Lin Manuel Miranda for an unauthorised, Bible-themed rewrite of the popular musical.",
    },
    {
      title:
        "Elton John gives diners preview of Britney Spears' first music since 2016",
      src: "https://ichef.bbci.co.uk/news/976/cpsprodpb/3E50/production/_126425951_gettyimages-162614485.jpg",
      description:
        "A US church has apologised to Hamilton creator Lin Manuel Miranda for an unauthorised, Bible-themed rewrite of the popular musical.",
    },
    {
      title:
        "Go-karting for French prisoners a mistake, admits Fresnes governor",
      src: "https://ichef.bbci.co.uk/news/976/cpsprodpb/C8AC/production/_126427315_3757f53d-61e7-4f71-a093-0e1e322ba28f.jpg",
      description:
        "A US church has apologised to Hamilton creator Lin Manuel Miranda for an unauthorised, Bible-themed rewrite of the popular musical.",
    },
    {
      title:
        "Its official: Apple sends invites for Sept 7 event, analysts expect new iPhone:",
      src: "https://img.etimg.com/thumb/msid-93761116,width-300,imgsize-31820,,resizemode-4,quality-100/apple-sends-invites-for-sept-7-event-analysts-expect-new-iphones.jpg",
      description:
        "A US church has apologised to Hamilton creator Lin Manuel Miranda for an unauthorised, Bible-themed rewrite of the popular musical.",
    },
    {
      title:
        "Dugong: Animal that inspired mermaid tales extinct in China",
      src: "https://ichef.bbci.co.uk/news/976/cpsprodpb/12FB7/production/_126415777_dugong3.creditpatricklouisy.jpg",
      description:
        "A US church has apologised to Hamilton creator Lin Manuel Miranda for an unauthorised, Bible-themed rewrite of the popular musical.",
    },

    {
      title:
        "'Too dehydrated to cry' - a lethal trek for migrants",
      src: "https://ichef.bbci.co.uk/news/976/cpsprodpb/16C59/production/_126337239_ed1ac90c-a398-4a91-8a13-89356fbcc99a.jpg",
      description:
        "A US church has apologised to Hamilton creator Lin Manuel Miranda for an unauthorised, Bible-themed rewrite of the popular musical.",
    },
    {
      title:
        "Student loan forgiveness: Biden cancels $10,000 in student debt for millions",
      src: "https://ichef.bbci.co.uk/news/976/cpsprodpb/3D25/production/_126435651_8c0c631189e8aeaaf98cdc3e8deeffa01c00e85c.jpg.webp",
      description: `US President Joe Biden will cancel up to $10,000 (£8,474) in federal student loans for millions of Americans who earn less 
            than $125,000 each yearUS President Joe Biden will cancel up to $10,000 (£8,474) in federal student loans for millions of Americans who earn less than $125,000 each year. `,
    },
  ]);
  return (
    <div className="article-list">
      {article.map((article) => {
        return (
          <div className="article">
            <img src={article.src} width="308px" />
            <h2>{article.title}</h2>

            <h5>{article.description}</h5>
          </div>
        );
      })}
    </div>
  );
}
