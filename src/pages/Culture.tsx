import { useState } from "react";
import { Link } from "react-router-dom";

export function Culture() {
  const [culture, setCulture] = useState([
    {
      title: "Istanbul A City That Brings Ancient Relics Back To Life",
      src: "https://img.traveltriangle.com/blog/wp-content/uploads/2017/10/234-400x266.jpg",
      description:
        "Witness the old world charm while traversing through the empire city of Istanbul. Straddling across Europe and Asia, Istanbul is the world’s only transcontinental city with an amalgamation of Asian and European culture. The relics of antiquity, historical museum, bustling markets, medieval ruins, upmarket restaurants, and peppy nightclubs form a major part of cultural tourism in Istanbul.",
      title2: "New York Shining With The Empire State Of Mind",
      src2: "https://img.traveltriangle.com/blog/wp-content/uploads/2017/10/517-400x266.jpg",
      description2:
        "New York, the most lively city of United States, is also a popular commercial, financial, and cultural cities of the world. The city houses ultramodern architectural buildings, highest number of theaters, musical concerts, and a bustling nightlife which beckon every traveler to visit this place once in a lifetime.",
      title3: "Barcelona A City That Speaks Architecture",
      src3: "https://img.traveltriangle.com/blog/wp-content/uploads/2017/10/818-400x267.jpg",
      description3:
        "This Spanish seaside city possesses a rich cultural heritage in the form of art and architecture which dates back to the middle ages. Barcelona is one of the most visited cultural places in the world which is not only famous for its historical past but also for its Catalan cuisine and elegant wine and dine restaurants. It is one of the most interesting cultural tourism places to visit if you want to have a holistic experience. ",
      title4: "Dubai A Skyscraper-City That Is Synonymous With Luxury",
      src4: "https://travel.usnews.com/dims4/USNEWS/bfd7067/2147483647/resize/445x280%5E%3E/crop/445x280/quality/85/?url=https://travel.usnews.com/images/main_photo_cropped1_445x280_qR2qkje.jpg",
      description4:
        "Dubai, the most sumptuous cultural tourism city, is a synonym of luxury. The lavish culture of the Emirati people reflects in their ornate architecture, extravagant hotels and resorts, and expansive malls. Being an epitome of development, Dubai is one of the most futuristic cities of the world in terms of technology, and architecture.",
    },
  ]);
  return (
    <div className=" travelPage">
      <a href="http://127.0.0.1:5173/travel" className="hhref">
        <h3 className="module-title">CULTURE</h3>
      </a>
      <br />
      <br />

      <div className="news2">
        {culture.map((culture) => {
          return (
            <div className="newsone">
              <a href="http://127.0.0.1:5173/culture" className="href">
                <img src={culture.src} width={700} />
                <br />
                <h1>{culture.title}</h1>
                <br />
                <h4>{culture.description}</h4>
                <br />
                <img src={culture.src2} width={700} />
                <br />
                <h1>{culture.title2}</h1>
                <br />
                <h4>{culture.description2}</h4>
                <br />
                <img src={culture.src3} width={700} />
                <br />
                <h1>{culture.title3}</h1>
                <br />
                <h4>{culture.description3}</h4>
                <br />
                <img src={culture.src4} width={700} />
                <br />
                <h1>{culture.title4}</h1>
                <br />
                <h4>{culture.description4}</h4>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
