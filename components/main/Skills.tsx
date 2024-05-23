import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
  Skill_data,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";
import { FaTwitter } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { IoLogoLinkedin } from "react-icons/io";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20"
    >
      <SkillText />

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 z-50">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="leyla.jpeg"
              alt=""
              style={{ width: "100%", height: "300px" }}
            />
          </a>
          <div className="p-5 bg-opacity-500">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Leyla Şener
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Elektrik-Elektronik Mühendisi
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignContent: "center",
              }}
            >
              <a href="#" style={{ cursor: "pointer" }}>
                <FaTwitter size={35} style={{ cursor: "pointer" }} />
              </a>
              <a href="https://www.instagram.com/leylartikk?igsh=djg2NHh5ZW9ja3Nh">
                <PiInstagramLogoFill size={35} style={{ cursor: "pointer" }} />
              </a>
              <a href="https://www.linkedin.com/in/leyla-%C5%9Fener-3262121b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <IoLogoLinkedin size={35} style={{ cursor: "pointer" }} />
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 z-50">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="semih.png"
              alt=""
              style={{ width: "100%", height: "300px" }}
            />
          </a>
          <div className="p-5 bg-opacity-500">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Semih Serdar Bulut
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Elektrik-Elektronik Mühendisi
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignContent: "center",
              }}
            >
              <a href="#" style={{ cursor: "pointer" }}>
                <FaTwitter size={35} style={{ cursor: "pointer" }} />
              </a>
              <a href="https://www.instagram.com/semihbulutt0?igsh=MTh5bjcwaDZ1MmV4cA==">
                <PiInstagramLogoFill size={35} style={{ cursor: "pointer" }} />
              </a>
              <a href="https://www.linkedin.com/in/semih-bulut-945493211?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <IoLogoLinkedin size={35} style={{ cursor: "pointer" }} />
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 z-50">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="mehmet.png"
              alt=""
              style={{ width: "100%", height: "300px" }}
            />
          </a>
          <div className="p-5 bg-opacity-500">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Mehmet Şirin Çetinkaya
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Elektrik-Elektronik Mühendisi
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignContent: "center",
              }}
            >
              <a href="#" style={{ cursor: "pointer" }}>
                <FaTwitter size={35} style={{ cursor: "pointer" }} />
              </a>
              <a href="https://www.instagram.com/semihbulutt0?igsh=MTh5bjcwaDZ1MmV4cA==">
                <PiInstagramLogoFill size={35} style={{ cursor: "pointer" }} />
              </a>
              <a href="https://www.linkedin.com/in/semih-bulut-945493211?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <IoLogoLinkedin size={35} style={{ cursor: "pointer" }} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
