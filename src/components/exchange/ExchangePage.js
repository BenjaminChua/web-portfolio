import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

import exchangeClouds from '../../assets/exchangeClouds.jpg';
import exchangeGT from '../../assets/exchangeGT.jpg';
import exchangeSFsea from '../../assets/exchangeSFsea.jpg';
import exchangeSeattle from '../../assets/exchangeSeattle.jpg';
import exchangeHouston from '../../assets/exchangeHouston.jpg';
import exchangePresChurch from '../../assets/exchangePresChurch.PNG';
import exchangeSend from '../../assets/exchangeSend.jpg';
import exchangeBBall from '../../assets/exchangeBBall.jpg';
import exchangeDisney from '../../assets/exchangeDisney.jpg';
import exchangeDC from '../../assets/exchangeDC.jpg';
import exchangeMIT from '../../assets/exchangeMIT.jpg';
import './ExchangePage.css';


const ExchangePage = () => {
    const exchange = {
            iCl: exchangeClouds,
            p1: "I have decided to write about my student exchange story as it was an amazing experience for me.",
            p2: "This story begins with three exchange students, two from the States and the other from Canada, who joined my small group in NUS Varsity Christian Fellowship (VCF). Through bible study, ministry and jamming sessions, we managed to forge strong friendships. But sadly, as soon as the semester started, it quickly ended, and they had to return to their home universities. Throughout the rest of my story, I will refer to these friends as my VCF friends.",
            p3: "In the second semester of sophomore year, we received our application results for student exchange. I got into Technical University of Munich (TUM) for the second semester of junior year. Although it was not my first choice (University of Toronto), I was comforted by the fact that several of my friends would be joining me. However, little did we know that things would change so quickly.",
            p4: "Fast forward to the first semester of junior year. We were getting ready to confirm our applications to TUM but was met with multiple module restrictions. This meant that we were unable to map TUM modules to our home modules. In this time, I was really seeking the Lord. I knew that it would be risky for me to go to Germany for my exchange. Firstly, higher level modules were conducted in German, which I had yet to pick up, further restricting the availability of modules. Secondly, summer semester starts in April and officially ends in September. This creates a possible conflict with the NUS semester, which begins in August, forcing returning students to take a Leave of Absence (LOA). Lastly, many churches in Singapore were hosting a large-scale event called Celebration of Hope (COH) in May and I would miss the opportunity to be there. I remembered writing my concerns on my journal and surrendered my decision onto the Lord, “If I’m meant to go, I’ll go.”",
            p5: "In the next few days, we were notified that our exchange to TUM was cancelled and we had to apply to other universities. A slight panic erupted amongst us since it was late October and the spring semester starts in January. With the help of the exchange coordinators and Global Relations Office (GRO), I was offered to attend Georgia Institute of Technology (Gatech). Little did I know that in the span for a few days, whatever concerns that I had for TUM completed reversed. Gatech modules were conducted in English and there was a wide variety of modules that could be mapped. Spring semester ends at the start of May, allowing me to return for COH and ensured that I would not have to take an LOA. Lastly, I found out that Gatech tops the entire US for my home course – Industrial and Systems Engineering (ISE).",
            iGT: exchangeGT,
            p6: "This sparked the beginning of my very interesting exchange to Gatech as I was certain that this was where God has called me to go. However, at the back of my mind were my top 2 fears – needles and turbulence. Just to have a benchmark for my fear of needles, there was once I ran away from a hospital as they wanted to take a non-compulsory blood test. These were fears that I had to overcome in order for me to enjoy exchange.",
            p7: "Prior to starting school in Gatech, I made plans to visit my VCF friends as well as my mentor and friends who were in the States for my mentor’s wedding.",
            p8: "On the day I landed in San Francisco (SF), I discovered that my secondary & junior college friend was studying in UC Berkeley and we made an impromptu decision to do a day road trip along Highway 1. The sea view was spectacular, and I believe that it was the best scenery throughout my entire exchange journey. Since one of my VCF friends works for Facebook, I also had the opportunity to tour the place and even grabbed a free meal. As I had the privilege to stay with him in the few days I was in SF, I managed to catch up with him, jammed and worshipped together.",
            iSF: exchangeSFsea,
            p9: "Next up, I flew to Seattle to visit another of my VCF friends and learnt a little more of the life of an Asian-American. My friend brought me around town and although the weather was pretty bad in winter, it was still surreal to visit. I really enjoyed spending time with my friend’s family and even joined her small group!",
            iSEA: exchangeSeattle,
            p10: "After that, I flew to Houston. This was the first flight that got really uncomfortable. Throughout the 4+ hours flight, there were moderate bumps and I got really scared. I pushed through and eventually made it to Houston to meet my mentor and friends. I had a warm welcome from them and my mentor’s in-laws. Spending Christmas with them was exciting and they had some really interesting Christmas games which I would love to incorporate in my own family celebrations. We drove to Dallas for a short visit to family friends and I flew off from there to Atlanta, the city I would spend the rest of my exchange at.",
            iHT: exchangeHouston,
            p11: "Dallas to Atlanta, would be the worst flight I had taken in my entire life. Although majority of the journey was smooth, things took a turn for the worse during the descent. There seemed to be a strong wind that prevented the plane from descending and the pilots were trying their best to land the plane. Saying that the flight felt like taking a rollercoaster is simply an understatement. I would say I experienced a similar number of g-force when I went on a tactical flight during my army days. Everyone on the plane was visibly afraid and there I was, laughing. I was laughing as I felt a sense of fearlessness knowing that God had called me to this place and that this was just a test. Of course, I was still afraid, but I was even more joyful. The ordeal eventually ended, and I remember some of the passengers (myself included) heaving a sigh of relief.",
            p12: "Fast forward till the start of school and I shifted into a rental apartment with 5 other NUS ISE friends, of which 3 were originally from the TUM group. I would call this group of friends 312 friends. It was pretty amazing that we got along so well and had home cooked meals almost every day together. However, none of them were Christian and I knew the importance of a Christian community even as I was in the States. ",
            p13: "Hence, I contacted a friend from NTU who I connected with through a mutual friend. Without specifying the details, I would say that this was a divine connection due to the circumstances of how the mutual friend found out that I was going on exchange to Gatech. I eventually attended a Presbyterian church and their Chinese student ministry together with him and another NTU friend who I would refer to as NTU Christian friends for the rest of this story.",
            p14: "Attending a Presbyterian church, which was more traditional, was extremely eye opening as I had more of a Charismatic background. Furthermore, as my mandarin is rather bad, fellowshipping and doing bible study in the Chinese proved to be challenging yet fresh. I remember how the leaders of the ministry intentionally formed an English bible study group as my friend and I were struggling so hard with understanding Chinese. Although I felt a little embarrassed, I was so encouraged by the warmth they extended to us. Prior to every meeting, they would cook dishes for everyone to enjoy. They even gave us opportunities to lead worship or help out in their worship band. After each meeting, they would drive us home even though it was just a 15 minutes’ walk away. I am extremely grateful for this community that I gained. Their fervour to love God through acts of services to those around them really impacted me greatly.",
            iPrC: exchangePresChurch,
            p15: "I also had the opportunity to visit two charismatic churches during my exchange – Passion city church (Atlanta), as well as Elevation church (North Carolina) who are well-known for their music. I loved every part of their service and I am thankful for my NTU Christian friends for making that trip to NC with me just so I could visit Elevation. One of whom also accompanied me to the Send.",
            p16: "The Send was a key highlight of my exchange story. It is an American movement to empower Christians to reach out to those around them. What was interesting was that I only found out about this gathering when my church friend randomly texted me about it, while I was already on exchange. When I found out that many well-known worship bands and speakers were going to be there, I was undoubtedly star stuck. It was located in Orlando, Florida, just south of Atlanta which meant that there was a possibility of going. After making some last-minute plans, my friend and I went. The gathering was amazing to say the least. Although the speakers and worship were great, what really struck me was unity. There was a difference in atmosphere when individuals gather for one purpose. There was a noticeable power when every Christian there was worshipping with their whole hearts, expectant on God and surrendering themselves to Him. It was like a dream to be there.",
            iSend: exchangeSend,
            p17: "Back at school, we had a good mix of studying and leisure. Amongst the 5 modules I took on exchange, one had more workload than the other four combined. This extremely vigorous module is called Data & Visual Analytics. Every two weeks, we were given an assignment that involved learning at least one language and one software. Topics ranged from databases to data visualization to machine learning and cloud servers. On top of the assignments were lectures and a semester long project. The details of the web application developed by my team and I can be found in the projects section of the website.",
            p18: "On the leisure side of things, instead of travelling out of state during the weekends, my 312 friends and I would usually go to the gym, explore the city or play some basketball. I still remember how we played some other students and got thrashed really badly because they were just so good. It was hilarious how they would start the game super competitively and after realising that we were not up to their standard, they would stop defending. By the end of the game we would only have scored once or twice. While we were at Atlanta, we also joined in several sporting events. Apart from watching an NBA game, we also embraced the Football hype since the Superbowl was held in Atlanta that year.",
            iBall: exchangeBBall,
            p19: "For spring break, some of my 312 friends and I toured New Orleans, Orlando and Miami. It was a great trip and the highlight for me would be to experience Disney World. Even though we only went to the Magic Kingdom, the Happily Ever After Fireworks really made our US$115 ticket worthwhile. I would really hope to return one day to experience the other theme parks.",
            iDisney: exchangeDisney,
            p20: "I appreciate my 312 friends for bringing a lot of laughter into my life. They are a weird bunch but somehow, we really worked well together and survived 5 months together. I reminisce the times of cooking, eating and washing the dishes together, even getting our hair cut by one of them. It was indeed an awesome time spent with them but soon it was time for our exchange to come to an end. We said our goodbye as I travelled off to Washington DC where I met a friend from ISE that did his exchange in Canada. I’ll call him A+ as he travelled the rest of my post exchange trip with me.",
            iDC: exchangeDC,
            p21: "From DC we bussed to Philadelphia, explored the area for a day or two before heading to New York City (NYC). At NYC, we met 2 of my 312 friends as well as another friend of friend A+ who he met on his exchange. Together we visited the usual tourists’ attractions – Statue of Liberty, 911 memorial museum as well as Times Square. Lastly, we travelled to Boston. My third VCF friend studied in MIT and even sought a friend’s help for friend A+ and I to stay in his hostel room. My VCF friend gave us a tour around MIT and I even had the opportunity to join her small group. We also went to the hostel gym on one of the nights as we needed the exercise. It was pretty cool.",
            iMIT: exchangeMIT,
            p22: "As a direct flight back to Singapore from NYC is 17+ hours long, I could not bring myself to it. Hence, friend A+ and I arranged to meet back in London for a short “stopover” before I flew home. We visited a few tourist destinations in the UK like the Stonehenge, Windsor Castle, Bath, Cambridge and of course, London itself. The main highlight would definitely be watching Les Misérables in Queen’s theatre. It was astounding to hear professionals perform live and gave new meaning to the Les Mis songs we sang in hall choir. I eventually returned back to Singapore early May, a few days before COH.",
            p23: "This marks the end of my exchange journey, but it was indeed an amazing one. I have had so many delightful experiences of making divine connections, reminiscing past experiences and travelling to see the States. Without a doubt, it superseded my expectations. God is truly wonderful."
        }
    return (
        <Container className="pb-5 pt-1 exchange-text text-justify">
            {Object.entries(exchange).map(([key, value]) => {
                if (key.includes('i')) {
                    return (
                        <div className="text-center py-3" key={key}>
                            <Image className="exchange-img" src={value} />
                        </div>
                    )
                } else {
                    return <p className="m-3" key={key}> {value} </p>;
                }
            })}
        </Container>
    );
};

export default ExchangePage;