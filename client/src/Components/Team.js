import React from "react";
import Tilt from "react-parallax-tilt";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const style = {
  wrapper: "flex justify-center items-center w-[100%]",
  TeamArea: "flex  justify-evenly items-center w-[75%] flex-wrap",
  Teamcard: "flex w-1/5  m-7 text-white bg-[#151515] rounded-xl",
  TeamCardcontent:
    "flex flex-col  justify-center items-center mx-10 p-5 w-[100%]",
};

function Team() {
  return (
    <div className={style.wrapper}>
      <div className={style.TeamArea}>
        <Tilt>
          <div
            className={`TeamCard rounded-xl text-white ${style.Teamcard}`}
            style={{ height: "45vh", width: "100%", backgroundColor: "black" }}
          >
            <div class={style.TeamCardcontent}>
              <div class="TeamCardimgBx">
                <img
                  src="https://cdn.discordapp.com/attachments/927960928023101521/947435503135883315/Frame_8.png"
                  alt=""
                />
              </div>{" "}
              <div class="TeamCardcontentBx">
                <h4> Mihir Kumar </h4> <h5> Full Stack Developer </h5>{" "}
              </div>{" "}
              <div class="links z-10 flex justify-evenly w-[100%] text-xl my-4 text-gray-400">
                <a href="https://github.com/mihir010">
                  {" "}
                  <FaGithub />{" "}
                </a>{" "}
                <a href="https://www.linkedin.com/in/mihir-kumar-7505081aa">
                  {" "}
                  <FaLinkedinIn />{" "}
                </a>{" "}
                <a href="https://mobile.twitter.com/MihirMihir02">
                  {" "}
                  <FaTwitter />{" "}
                </a>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </Tilt>{" "}
      </div>{" "}
    </div>
  );
}

export default Team;
