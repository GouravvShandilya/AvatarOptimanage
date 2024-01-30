import React from 'react'
import right from "../assets/right.png";
import star from "../assets/star.png";
import electic from "../assets/electric.png";
import enterprice from "../assets/enterprice.png";



const pricingCardsData = [{
    logoimg: electic,
    logoname: "Starter",
    price: "$22/month",
    primaryColor: '#48A686',
    priceSuggestion: "Build Yearly. Pay Monthly",
    includes: ["1 editor & 3 Guest", "120 minutes of video/year", "70+ Ai Avtars", "120 Languages and voices", " Ai script assistant", "Built - in screen recorder"]
}, {
    logoimg: star,
    logoname: "Starter",
    price: "$22/month",
    primaryColor: '#48A686',
    priceSuggestion: "Build Yearly. Pay Monthly",
    includes: ["1 editor & 3 Guest", "120 minutes of video/year", "70+ Ai Avtars", "120 Languages and voices", " Ai script assistant", "Built - in screen recorder"]
}, {
    logoimg: enterprice,
    logoname: "Starter",
    price: "$22/month",
    primaryColor: '#48A686',
    priceSuggestion: "Build Yearly. Pay Monthly",
    includes: ["1 editor & 3 Guest", "120 minutes of video/year", "70+ Ai Avtars", "120 Languages and voices", " Ai script assistant", "Built - in screen recorder"]
}]


const PricingCards = () => {

    return (
        <div id='pricingCards' className='w-full flex justify-center items-center my-[3em] gap-[1em] '>

            {
                pricingCardsData.map((elem) =>
                    <div className='w-[25%] flex flex-col justify-center items-center rounded-[11px] p-4 bg-white-500 shadow-lg shadow-gray-500/50'>
                        <h1><img src={elem.logoimg} alt="#"  className='w-7 inline m-2'/>{elem.logoname}</h1>
                        <h2 className=''>{elem.price}</h2>
                        <h3 className='m-1'>{elem.priceSuggestion}</h3>

                        <button className={"text-white bg-[#48A686] w-[50%] rounded-[7px] p-2 m-2 " }>Create Account</button>

                          <div id="includes">
                            <h1 className='m-2'>Includes</h1>
                            {
                                elem.includes.map((feature)=><h1><img src={right} alt="#"  className='w-4 inline m-2'/>{feature}</h1>)
                            }
                          </div>
                          <button  className='text-[#48A686] font-medium'>See All Feature</button>
                    </div>
                )

            }

        </div>
    );

}


const Pricing = () => {
    return (
        <div id='pricing' className='my-[6em]'>


            <div className='w-full flex flex-col justify-center items-center '>
                <div className='w-[45%]  flex justify-center flex-col items-center'>
                    <h1 className='text-center '
                        style={{
                            background:
                                "linear-gradient(to right, #FF2DF7, #5200FF, #00F0FF)",
                            WebkitBackgroundClip: "text",
                            color: "transparent",
                            fontSize: "2.3vw",
                            fontWeight: 600,
                            letterSpacing: "wider",
                        }}
                    >
                        Ready to scale your video production?
                    </h1>
                    <p className='w-[70%] text-center'>Synthesia is the world's #1 rated AI video software. It's used by 50,000+ teams to create videos at scale, saving up to 80% of their time and budget.</p>

                </div>

                <PricingCards></PricingCards>

            </div>

        </div>
    )
}

export default Pricing