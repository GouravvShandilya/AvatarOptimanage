import { FaArrowRightLong } from "react-icons/fa6";
import appPic from "../assets/appPic.png";
import { LiaConnectdevelop } from "react-icons/lia";
import { GoGraph } from "react-icons/go";
import { RiHeadphoneLine } from "react-icons/ri";
import { MdOutlineSecurity } from "react-icons/md";
import { FaStarHalfAlt } from "react-icons/fa";
import Dp from "../assets/Dp.png";
import Frame21 from "../assets/Frame21.png";
import { MdOutlineMessage } from "react-icons/md";
import { FaPaintBrush } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import Frame1984077754 from "../assets/Frame1984077754.png";
import Frame1984077756 from "../assets/Frame1984077756.png";
import Frame1984077758 from "../assets/Frame1984077758.png";
import Frame1984077764 from "../assets/Frame1984077764.png";
import Frame1984077762 from "../assets/Frame1984077762.png";
import Frame1984077760 from "../assets/Frame1984077760.png";

function Homepage() {
  const border = {
    backgroundClip: "padding-box",
    border: "2px solid transparent",
    borderImage: "linear-gradient(135deg, #00F0FF, #5200FF, #FF2DF7)",
    borderImageSlice: 1,
  };
  const borderTop = {
    backgroundClip: "padding-box",
    borderTop: "1px solid transparent",
    borderImage: "linear-gradient(135deg, #00F0FF, #5200FF, #FF2DF7)",
    borderImageSlice: 1,
  };
  const borderBottom = {
    backgroundClip: "padding-box",
    borderTop: "2px solid transparent",
    borderImage: "linear-gradient(135deg, #00F0FF, #5200FF, #FF2DF7)",
    borderImageSlice: 1,
  };

  const text = {
    background: "linear-gradient(to right, #FF2DF7, #5200FF, #00F0FF)",
    WebkitBackgroundClip: "text",
    color: "transparent",
    letterSpacing: "wider",
    display: "flex",
    alignItems: "center",
  };

  return (
    <div className="w-[100vw]  h-auto bg-primary">
      {/* 1st main page*/}
      <div className="w-full h-[100vh] flex p-10">
        <div className="w-[50%] h-[100%]  flex items-center justify-center ">
          <div className="w-[80%] h-[65%]  ">
            <div className="w-[100%] h-[25%]  ">
              <p
                style={{
                  background:
                    "linear-gradient(to right, #FF2DF7, #5200FF, #00F0FF)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  fontSize: "2.5vw",
                  fontWeight: 600,
                  letterSpacing: "wider",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Turn your text into videos <br /> in minutes
              </p>
            </div>
            <div className="w-[100%] h-[25%] ">
              <p className="text-[1.3vw] text-[#594A42]">
                Create studio-quality videos with AI avatars and <br />{" "}
                voiceovers in 120+ languages. It’s as easy as making a <br />{" "}
                slide deck.
              </p>
            </div>
            <div
              className="w-[100%] h-[20%]  flex  flex-col justify-evenly"
              style={borderBottom}
            >
              <button
                className="w-[50%] h-[50%] flex items-center justify-center gap-2   text-center"
                style={border}
              >
                Create a free Ai video <FaArrowRightLong />
              </button>
              <p className="text-[#594A42] tracking-wide ">
                No credit card required.
              </p>
            </div>
          </div>
        </div>
        <div className="w-[50%] h-[100%]  flex items-start justify-center">
          <div className="w-full h-[80%]  flex items-center justify-center ">
            <div className="w-[85%] h-[70%] ">
              <img src={appPic} className="w-full" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* 2nd main page*/}

      <div className="w-full h-[100vh] border-b-[4px] p-10">
        <div className="w-full h-[30%]  flex items-center justify-center">
          <div className="w-[90%] h-[100%] ">
            <div className="w-[100%] h-[60%]  border-y-[2px] border-[#594A42] flex items-center justify-center ">
              <p className="text-[2vw] text-center">
                Use Cases <br /> For teams who create training videos at scale
              </p>
            </div>
            <div className="w-[100%] h-[40%]  border-b-[2px] border-[#594A42] flex items-center justify-between ">
              <div className="w-[18%] h-[80%   flex">
                <div className="w-[20%] h-[100%]    flex items-center justify-center text-[1.5vw]">
                  <LiaConnectdevelop />
                </div>
                <div className="w-[80%] h-[100%]   flex items-center  text-[1.1vw] font-[500] text-[#594A42]">
                  <p>Learning & Development</p>
                </div>
              </div>

              <div className="w-[18%] h-[80%]  flex">
                <div className="w-[20%] h-[100%]    flex items-center justify-center text-[1.5vw]">
                  <GoGraph />
                </div>
                <div className="w-[80%] h-[100%]   flex items-center  text-[1.1vw] font-[500] text-[#594A42]">
                  <p>Sales enablement</p>
                </div>
              </div>

              <div className="w-[18%] h-[80%   flex">
                <div className="w-[20%] h-[100%]    flex items-center justify-center text-[1.5vw]">
                  <RiHeadphoneLine />
                </div>
                <div className="w-[80%] h-[100%]   flex items-center  text-[1.1vw] font-[500] text-[#594A42]">
                  <p>Customer Service</p>
                </div>
              </div>

              <div className="w-[18%] h-[80%   flex">
                <div className="w-[20%] h-[100%]    flex items-center justify-center text-[1.5vw]">
                  <MdOutlineSecurity />
                </div>
                <div className="w-[80%] h-[100%]   flex items-center  text-[1.1vw] font-[500] text-[#594A42]">
                  <p>Information Security</p>
                </div>
              </div>

              <div className="w-[18%] h-[80%   flex">
                <div className="w-[20%] h-[100%]    flex items-center justify-center text-[1.5vw]">
                  <FaStarHalfAlt />
                </div>
                <div className="w-[80%] h-[100%]   flex items-center  text-[1.1vw] font-[500] text-[#594A42]">
                  <p>Marketing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[70%] flex items-center justify-center  ">
          <div className="w-[90%] h-[90%]  flex">
            <div className="w-[50%] h-[100%] ">
              <div className="w-full h-[70%] flex flex-col justify-evenly">
                <p
                  style={{
                    background:
                      "linear-gradient(to right, #FF2DF7, #5200FF, #00F0FF)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    fontSize: "2.3vw",
                    fontWeight: 500,
                    display: "flex",
                    alignItems: "center",
                    letterSpacing: "0.1vw",
                  }}
                >
                  Replace boring text, PowerPoints and <br /> PDFs with engaging
                  videos your <br /> team will love
                </p>
                <p className="text-[1.1vw] tracking-wide text-[#594A42]">
                  "Usually, our colleagues don't jump in the air when <br />{" "}
                  they hear e-learning, but the AI videos created with <br />{" "}
                  Synthesia have sparked motivation that we haven't <br /> seen
                  before."
                </p>
              </div>
              <div className="w-full h-[30%] ">
                <div className="w-[60%] h-[100%]  " style={borderTop}>
                  <div className="w-full h-[70%]  flex  ">
                    <div className="w-[25%] h-[100%]  flex items-center">
                      <div className="w-[80px] h-[80px]   rounded-full">
                        {" "}
                        <img src={Dp} alt="" />
                      </div>
                    </div>
                    <div className="w-[75%] h-[100%]  flex justify-center flex-col">
                      <p className="font-[600]">JESPER B.</p>
                      <p className="text-[#594A42] ">
                        Learning Specialist at BESTSELLER
                      </p>
                    </div>
                  </div>
                  <div className="w-[100%] h-[30%]  flex items-center">
                    <button
                      className="w-[40%] h-[90%] flex items-center justify-center text-[#594A42] gap-2 "
                      style={border}
                    >
                      Learn More <FaArrowRightLong />{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[50%] h-[100%]  flex items-center justify-center">
              <div className="w-[85%] h-[80%] ">
                <img
                  src={Frame21}
                  className="w-[100%] object-cover h-[100%]"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* main 3 */}

      <div className="w-full h-[130vh] p-10">
        <div className="h-[50%] w-[100%] border-b-[4px]  flex items-center justify-center">
          <div className="w-[90%] h-[100%]  flex">
            <div className="w-[40%] h-[100%] ">
              <div className="w-full h-[25%]  flex flex-col justify-end">
                <p className="text-[#594A42] text-[1.2vw] tracking-wide">
                  FROM IDEA TO VIDEO IN MINUTES
                </p>
                <p style={text} className="text-[1.6vw] font-[600]">
                  See how our AI video generator works below
                </p>
              </div>

              <div className="w-full h-[40%]  flex items-center">
                <div className="w-[75%] h-[70%] bg-[#094EF2] overflow-hidden rounded-bl-[3vw] rounded-br-[3vw] rounded-tl-[3vw] flex">
                  <div className="w-[20%] h-[100%]  flex items-center justify-center ">
                    <div className="w-[60px] h-[60px] border-[3px] border-white rounded-full flex items-center justify-center text-white text-[1.8vw]">
                      <MdOutlineMessage />
                    </div>
                  </div>
                  <div className="w-[80%] h-[100%]  flex flex-col justify-center">
                    <p className="text-[1.2vw] font-[700] text-white">
                      Create Your script
                    </p>
                    <p className="text-[1vw] text-white font-[400] ">
                      Use your own script and generate it with the help of AI
                      with chat GPT - Like prompts.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full h-[35%] ">
                <div className="w-[50%] h-[100%] ">
                  <div className="flex w-[85%]  h-[30%] text-[1.1vw] text-[#594A42]">
                    <div className="w-[25%] h-[100%]  flex items-center justify-center text-[1.4vw]">
                      <FaPaintBrush />
                    </div>
                    <div className="w-[75%] h-[100%]  flex items-center">
                      <p className="text-[1.1vw] font-[600]">
                        Customize Your Video
                      </p>
                    </div>
                  </div>

                  <div className="flex w-[85%]  h-[30%] text-[1.1vw] text-[#594A42]">
                    <div className="w-[25%] h-[100%]  flex items-center justify-center text-[1.4vw]">
                      <RxAvatar />
                    </div>
                    <div className="w-[75%] h-[100%]  flex items-center">
                      <p className="text-[1.1vw] font-[600]">
                        Customize Your Video
                      </p>
                    </div>
                  </div>

                  <div className="flex w-[85%]  h-[30%] text-[1.1vw] text-[#594A42]">
                    <div className="w-[25%] h-[100%]  flex items-center justify-center text-[1.4vw]">
                      <CiShare2 />
                    </div>
                    <div className="w-[75%] h-[100%]  flex items-center">
                      <p className="text-[1.1vw] font-[600]">
                        Share and export
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[60%] h-[100%] flex items-center justify-center drop-shadow-md">
              <div className="w-[90%] h-[90%] border-[2px]"></div>
            </div>
          </div>
        </div>

        <div className="w-full h-[50%] flex items-center justify-center ">
          <div className="w-[90%] h-[100%] ">
            <div className="w-full h-[25%]  flex flex-col items-center justify-center">
              <p className="text-[1.2vw] tracking-wide text-[#594A42]">
                THE ROI FOR YOUR BUSINESS
              </p>
              <p style={text} className="text-[1.5vw] font-[700] tracking-wide">
                You don't have to choose between cost, time, and quality
              </p>
            </div>

            <div className="w-full h-[75%]  flex items-center justify-between">
              <div className="w-[30%] h-[90%] bg-[#FFFFFF]  rounded-lg drop-shadow-2xl">
                <div className="w-full h-[35%]  flex items-center justify-center">
                  <div className="w-[70%] h-[100%] ">
                    <div className="w-full h-[40%]  border-b-[1px] border-[#594A42] flex items-center justify-center">
                      <p className="text-[1.5vw] font-[700] tracking-wide  text-[#594A42] ">
                        Xerox
                      </p>
                    </div>
                    <div className="w-full h-[60%]  flex flex-col items-center  justify-evenly">
                      <p className="text-[1.2vw] text-[#594A42] ">
                        Cost savings
                      </p>
                      <p className="text-[1.5vw] text-[#594A42] font-[700] ">
                        +50%
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full h-[65%]  flex  items-center justify-evenly">
                  <div className="w-[70%] h-[100%]  flex flex-col  items-center justify-evenly ">
                    <p className="text-[1.2vw] tracking-wider text-[#594A42] text-center ">
                      Xerox's global training team reduced video and voiceover
                      costs by over 50%, compared to hiring voiceover artists in
                      multiple languages.
                    </p>
                    <p className="text-[#094EF2] tracking-wide flex items-center  gap-2   ">
                      Read case study{" "}
                      <span>
                        <FaArrowRightLong />
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-[30%] h-[90%] bg-[#FFFFFF]  rounded-lg drop-shadow-2xl">
                <div className="w-full h-[35%]  flex items-center justify-center">
                  <div className="w-[70%] h-[100%] ">
                    <div className="w-full h-[40%]  border-b-[1px] border-[#594A42] flex items-center justify-center">
                      <p className="text-[1.5vw] font-[700] tracking-wide  text-[#594A42] ">
                        Zoom
                      </p>
                    </div>
                    <div className="w-full h-[60%]  flex flex-col items-center  justify-evenly">
                      <p className="text-[1.2vw] text-[#594A42] ">
                        Time savings
                      </p>
                      <p className="text-[1.5vw] text-[#594A42] font-[700] ">
                        +90%
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full h-[65%]  flex  items-center justify-evenly">
                  <div className="w-[70%] h-[100%]  flex flex-col  items-center justify-evenly ">
                    <p className="text-[1.2vw] tracking-wider text-[#594A42] text-center ">
                      Zoom's instructional designers cut 90% off their video
                      creation time – from days to hours, compared to
                      traditional video creation methods.
                    </p>
                    <p className="text-[#094EF2] tracking-wide flex items-center  gap-2   ">
                      Read case study{" "}
                      <span>
                        <FaArrowRightLong />
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-[30%] h-[90%] bg-[#FFFFFF]  rounded-lg drop-shadow-2xl">
                <div className="w-full h-[35%]  flex items-center justify-center">
                  <div className="w-[70%] h-[100%] ">
                    <div className="w-full h-[40%]  border-b-[1px] border-[#594A42] flex items-center justify-center">
                      <p className="text-[1.5vw] font-[700] tracking-wide  text-[#594A42] ">
                        B/S/H
                      </p>
                    </div>
                    <div className="w-full h-[60%]  flex flex-col items-center  justify-evenly">
                      <p className="text-[1.2vw] text-[#594A42] ">
                        Engagement increase
                      </p>
                      <p className="text-[1.5vw] text-[#594A42] font-[700] ">
                        +50%
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full h-[65%]  flex  items-center justify-evenly">
                  <div className="w-[70%] h-[100%]  flex flex-col  items-center justify-evenly ">
                    <p className="text-[1.2vw] tracking-wider text-[#594A42] text-center ">
                      BSH experienced over 30% increase in engagement with their
                      e-learning, compared to text-based e-learning modules and
                      PowerPoints.
                    </p>
                    <p className="text-[#094EF2] tracking-wide flex items-center  gap-2   ">
                      Read case study{" "}
                      <span>
                        <FaArrowRightLong />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* main 4 */}

      <div className="w-full h-[120vh] flex items-center justify-center p-10">
        <div className="w-[90%] h-[100%]  flex flex-col justify-around">
          <div className="w-full h-[48%] bg-[#beddf46c] drop-shadow-lg rounded-lg flex p-5">
            <div className="w-[40%] h-[100%] ">
              <div className="w-full h-[35%] flex flex-col justify-end ">
                <p className="text-[#594A42] text-[1vw] font-[400]">
                  AI AVATARS
                </p>
                <p className="text-[1.9vw] font-[600] text-[#594A42]">
                  Create videos as diverse as your audience
                </p>
              </div>
              <div className="w-full h-[65%] ">
                <div className="w-full h-[70%]  flex flex-col justify-evenly">
                  <p className="text-[1.3vw] text-[#594A42]">
                    • Engage your viewers with over 140 AI avatars
                  </p>
                  <p className="text-[1.3vw] text-[#594A42]">
                    • Make your videos more inclusive and diverse
                  </p>
                  <p className="text-[1.3vw] text-[#594A42]">
                    • Create your own AI avatar (your digital twin)
                  </p>
                </div>
                <div className="w-full h-[30%] ">
                  <button
                    style={border}
                    className="w-[40%] h-[60%] text-[#594A42] flex items-center justify-center "
                  >
                    {" "}
                    See All Avtars{" "}
                    <span style={text}>
                      <FaArrowRightLong />
                    </span>{" "}
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[60%] h-[100%]  grid row-span-2 grid-cols-3 items-center justify-items-center ">
              <div className="w-[80%] h-[80%] bg-[#FFFFFF] drop-shadow-md flex items-center justify-center">
                <img src={Frame1984077754} className="w-[90%] " alt="" />
              </div>

              <div className="w-[80%] h-[80%] bg-[#FFFFFF] drop-shadow-md flex items-center justify-center">
                <img src={Frame1984077756} className="w-[90%] " alt="" />
              </div>

              <div className="w-[80%] h-[80%] bg-[#FFFFFF] drop-shadow-md flex items-center justify-center">
                <img src={Frame1984077758} className="w-[90%] " alt="" />
              </div>

              <div className="w-[80%] h-[80%] bg-[#FFFFFF] drop-shadow-md flex items-center justify-center">
                <img src={Frame1984077764} className="w-[90%] " alt="" />
              </div>

              <div className="w-[80%] h-[80%] bg-[#FFFFFF] drop-shadow-md flex items-center justify-center">
                <img src={Frame1984077762} className="w-[90%] " alt="" />
              </div>

              <div className="w-[80%] h-[80%] bg-[#FFFFFF] drop-shadow-md flex items-center justify-center">
                <img src={Frame1984077760} className="w-[90%] " alt="" />
              </div>
            </div>
          </div>
          <div className="w-full h-[48%] bg-[#beddf46c] flex drop-shadow-lg rounded-lg">
            <div className="w-[50%] h-[100%]  flex items-center justify-center">
              <div className="w-[80%] h-[80%]  rounded-xl  ">
                <iframe
                  className="w-full h-[100%] rounded-xl  "
                  src="https://www.youtube.com/embed/ByoF3Xatb_o"
                  title="We were LAST PLACE in ALGS, then THIS Happened..."
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div className="w-[50%] h-[100%] ">
              <div className="w-full h-[40%]  flex justify-end flex-col">
                <p className="text-[#594A42] text-[1.2vw]">AI AVATARS</p>
                <p className="text-[2vw] font-[600] tracking-wider text-[#594A42]">
                  Turn text into high-quality <br /> voiceovers with one click
                </p>
              </div>
              <div className="w-full h-[60%] ">
                <div className="w-full h-[60%]  flex flex-col justify-evenly">
                  <p className="text-[1.3vw] text-[#594A42]">
                    • Get consistent voiceovers in over 120 languages
                  </p>
                  <p className="text-[1.3vw] text-[#594A42]">
                    • Automatically generate closed captions
                  </p>
                  <p className="text-[1.3vw] text-[#594A42]">
                    • Clone your own voice
                  </p>
                </div>
                <div className="w-full h-[40%] ">
                  <button
                    className="w-[35%] h-[45%] text-[#594A42] "
                    style={border}
                  >
                    Test All Languages
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* main 5 */}
      <div className="w-full h-[120vh] p-10 flex items-center justify-center">
        <div className="w-[90%] h-[100%]  flex flex-col justify-between">

          <div className="w-full h-[48%] bg-[#beddf46c] flex drop-shadow-lg rounded-lg">
           
          </div>

          <div className="w-full h-[48%] bg-[#beddf46c] flex drop-shadow-lg rounded-lg">
       
          </div>


          
        </div>
      </div>
    </div>
  );
}

export default Homepage;
