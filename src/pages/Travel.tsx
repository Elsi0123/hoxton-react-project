import { useState } from "react";
import { Link } from "react-router-dom";

export function Travel() {
  const [travel, setTravel] = useState([
    {
      title: "San Diego",
      src: "https://travel.usnews.com/dims4/USNEWS/22198a8/2147483647/resize/445x280%5E%3E/crop/445x280/quality/85/?url=https://travel.usnews.com/images/gettyimages-619157254_b0W8ULv.jpg",
      description:
        "Consistently sunny weather and 70 miles of magnificent coastline are what draw active types and sun seekers alike to San Diego throughout the year: that and the mouthwatering Mexican cuisine, thriving nightlife and one of the country's favorite zoos. And then there are the beaches: Retreat to Mission Beach to catch a wave, to La Jolla to soak up the sun and to Coronado for a leisurely seaside stroll. What's more, San Diego is home to some of the best California tours, including whale watching tours, boat tours and fishing charters. When you're ready to ditch your flip-flops and board shorts for more formal attire, you'll find pockets of vivacious nightlife throughout, especially near the historical Gaslamp Quarter.",
      title2: "Outer Banks",
      src2: "https://travel.usnews.com/dims4/USNEWS/11f833d/2147483647/resize/445x280%5E%3E/crop/445x280/quality/85/?url=https://travel.usnews.com/images/main_cropped_445x280_JRydtwn.jpg",
      description2:
        "History drips from the Outer Banks: Here, aviators Orville and Wilbur Wright took their famous first flight (at Kill Devil Hills), the pirate Blackbeard fought his last battle (at Ocracoke) and the mysterious Lost Colony disappeared (exactly where is anyone's guess, but it was last seen on Roanoke Island near Manteo). Yet this chain of barrier islands located off the coast of North Carolina – affectionately dubbed OBX – isn't just for history buffs. Fishing, windsurfing and wildlife watching attract adventurous types as well. The Outer Banks' roughly 3,000 shipwrecks, explorable by snorkeling or scuba diving, earned it a reputation as the graveyard of the Atlantic. Families gravitate toward the beaches, the mini-golf courses and the North Carolina Aquarium at Roanoke Island.",
      title3: "Boston",
      src3: "https://travel.usnews.com/dims4/USNEWS/ad1fae5/2147483647/resize/445x280%5E%3E/crop/445x280/quality/85/?url=https://travel.usnews.com/images/boston_harbor_cropped_445x280_vwMXbKO.jpg",
      description3:
        "Boston is not only a hub for baseball, brownstones and bookish collegiate types. It's also home to America's first large free municipal public library, the first subway system, the first public school and the first public park. To say the city is historic would be an understatement, but this wicked smart college town doesn't linger in the past, either. A well-rounded trip to Boston integrates the classic with the contemporary: Split your time between cherished sites like the Paul Revere House and Faneuil Hall and modern attractions like the Museum of Fine Arts. Venture to Beacon Hill and you'll stumble upon the graceful mansions of yore juxtaposed with chic boutiques and innovative hotels. So, yes, come first for the history, but don't miss out on the opportunity to see the unmistakable Beantown flair. ",
      title4: "Curacao",
      src4: "https://travel.usnews.com/dims4/USNEWS/bfd7067/2147483647/resize/445x280%5E%3E/crop/445x280/quality/85/?url=https://travel.usnews.com/images/main_photo_cropped1_445x280_qR2qkje.jpg",
      description4:
        "Curacao is idyllic for those seeking a late summer Caribbean getaway thanks to its location outside the hurricane belt. Sustained daytime temperatures in the high 80s and low 90s mean you'll likely spend most of your vacation lounging on the beach or swimming past marine life, coral reefs and shipwrecks while scuba diving. But the charming, colorful Dutch colonial architecture found in the UNESCO-certified capital – Willemstad – is worth exploring, too. Plus, with fewer mega resorts and more boutique resorts and bed-and-breakfast establishments, you'll likely be able to score a deal on your accommodations",
    },
  ]);
  return (
    <div className=" travelPage">
      <a href="http://127.0.0.1:5173/travel" className="hhref">
        <h3 className="module-title">TRAVEL</h3>
      </a>
      <br />
      <br />

      <div className="news2">
        {travel.map((travel) => {
          return (
            <div className="newsone">
              <a href="http://127.0.0.1:5173/worklife" className="href">
                <img src={travel.src} width={700} />
                <br />
                <h1>{travel.title}</h1>
                <br />
                <h4>{travel.description}</h4>
                <br />
                <img src={travel.src2} width={700} />
                <br />
                <h1>{travel.title2}</h1>
                <br />
                <h4>{travel.description2}</h4>
                <br />
                <img src={travel.src3} width={700} />
                <br />
                <h1>{travel.title3}</h1>
                <br />
                <h4>{travel.description3}</h4>
                <br />
                <img src={travel.src4} width={700} />
                <br />
                <h1>{travel.title4}</h1>
                <br />
                <h4>{travel.description4}</h4>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
