import { FaArrowRightLong } from "react-icons/fa6";
import appPic from "../assets/appPic.png";
import { LiaConnectdevelop } from "react-icons/lia";
import { GoGraph } from "react-icons/go";
import { RiHeadphoneLine } from "react-icons/ri";
import { MdOutlineSecurity } from "react-icons/md";
import { FaStarHalfAlt } from "react-icons/fa";
import Dp from "../assets/Dp.png";
import Frame21 from "../assets/Frame21.png";

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

  return (
    <div className="w-[100vw]  h-auto bg-primary">
      {/* 1st main page*/}
      <div className="w-full h-[100vh] flex">
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

      <div className="w-full h-[100vh] border-b-[4px] ">
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

      <div className="w-full h-[100vh]">
      </div>
    </div>
  );
}

export default Homepage;
