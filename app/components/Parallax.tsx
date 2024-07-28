"use client"
import { useRef, useState, ReactNode } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
  useInView,
} from "framer-motion";
import "../css/styles.css";
import AnimText from "./AnimText";
import ReactIcon from "../icons/React";
import NodeJS from "../icons/NodeJS";
import TypeScriptIcon from "../icons/TypeScript";
import HTML from "../icons/HTML";
import MongoDB from "../icons/MongoDB";
import NextJS from "../icons/NextJS";
import Redux from "../icons/Redux";
import CSS from "../icons/CSS";
import JS from "../icons/JS";
import AWS from "../icons/AWS";
import Bootstrap from "../icons/Bootstrap";
import Express from "../icons/Express";
import SwitchButton from "./SwitchButton";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

interface SliderProps {
  id: number;
}

function Slider({ id }: SliderProps) {
  const [skillsIndex, setSkillsIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  interface UseInViewProps {
    children: ReactNode;
  }

  function UseInView({ children }: UseInViewProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref);
    return (
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0s",
        }}
      >
        <div ref={ref}>{isInView && children}</div>
      </span>
    );
  }

  return id === 1 ? (
    <section className="flex flex-col md:flex-row">
      <div className="mb-5 lg:mb-0 md:mr-5 portrait">
        <img className="rounded-full w-full" src={"./portrait.webp"} alt="" />
      </div>
      <motion.div
        initial={{ opacity: 0.3, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4 }}
        className="relative w-10/12 md:w-3/12"
        ref={ref}
      >
        <div className="bg-red-600 p-10 w-full rounded-xl font-archivo text-white text-center">
          <AnimText delay={0} />
        </div>
        <div className="flex mt-5 justify-center">
          <a
            href="#skills"
            style={{ fontSize: "20px" }}
            className="border-0 bebas no-underline text-white bg-red-600 w-1/3 py-2 mx-1 rounded-lg text-center"
          >
            My Skills
          </a>
          <a
            href="#portfolio"
            style={{ fontSize: "20px" }}
            className="border-0 bebas w-1/3 text-white bg-black no-underline flex justify-center items-center mx-1 rounded-lg text-center"
          >
            Portfolio
          </a>
          <a
            href="https://github.com/guneyyilmazer"
            target="_new"
            style={{ fontSize: "20px" }}
            className="border-0 bebas w-1/3 text-white bg-black no-underline flex justify-center items-center mx-1 rounded-lg text-center"
          >
            GitHub
          </a>
        </div>
      </motion.div>
    </section>
  ) : id === 2 ? (
    <section id="skills" className="flex flex-col px-2">
      <UseInView>
        <div></div>
      </UseInView>
      {skillsIndex === 0 && (
        <div>
  
          <UseInView>
            <div className="flex flex-col">

              
          <motion.h3
         initial={{ opacity: 0, scale: 0.5, x:-500 }}
         animate={{ opacity: 1, scale: 1,x:0 }}
            transition={{ duration: 0.7 }}
            className="text-dark mb-4 lg:text-xl"
            style={{ zIndex: 1 }}
          >
            Proven experience working with:
          </motion.h3>

            <div
              className="bg-gray-200 relative flex flex-col flex-wrap justify-center p-5 lg:p-5 items-center rounded-2xl"
            >
              <div className="flex">
                <div className="h-14 w-14 lg:h-20 lg:w-20">
                  <ReactIcon />
                </div>
                <div className="ml-1 h-14 w-14 lg:h-20 lg:w-20">
                  <NodeJS />
                </div>
                <div className="ml-1 h-14 w-14 lg:h-20 lg:w-20">


                  <Bootstrap />
                </div>
                <div className="ml-1 h-14 w-14 lg:h-20 lg:w-20">


                  <NextJS />
                </div>
                <div className="ml-1 h-14 w-14 lg:h-20 lg:w-20">


                  <AWS />
                </div>
                <div className="ml-1 h-14 w-14 lg:h-20 lg:w-20">


                  <Express />
                </div>
              </div>
              <div className="flex mt-3">
              <div className="ml-1 h-14 w-14 lg:h-20 lg:w-20">


                  <MongoDB />
                </div>
                <div className="ml-1 h-14 w-14 lg:h-20 lg:w-20">


                  <TypeScriptIcon />
                </div>
                <div className="ml-1 h-14 w-14 lg:h-20 lg:w-20">


                  <Redux />
                </div>
                <div className="ml-1 h-14 w-14 lg:h-20 lg:w-20">


                  <CSS />
                </div>
                <div className="ml-1 h-14 w-14 lg:h-20 lg:w-20">


                  <JS />
                </div>
                <div className="ml-1 h-14 w-14 lg:h-20 lg:w-20">


                  <HTML />
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center">
  
            <SwitchButton className="bg-gray-200 p-2.5 rounded-2xl mt-8" setSkillsIndex={()=>setSkillsIndex(1)}/>

            </div>
            </div>

          </UseInView>
        </div>
      )}
      {skillsIndex === 1 && (
        <div className="">
          <div className="">
            
          <motion.h3
            initial={{ opacity: 0, scale: 0.5, x:-500 }}
            animate={{ opacity: 1, scale: 1,x:0 }}
            transition={{ duration: 0.7 }}
            className="mb-4 lg:text-xl"
            style={{ zIndex: 1 }}
          >
            Proven experience working with:
          </motion.h3>
          </div>

          <UseInView>
            <div className="bg-gray-200 text-black relative flex flex-col flex-wrap justify-center p-5 items-center rounded-2xl">
              <div style={{ fontSize: "20px" }} className="flex">
                <ul className="list-none mr-5">
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Redux Toolkit</li>
                  <li>NextJS 14+</li>
                  <li>Tailwind CSS</li>
                  <li>Bootstrap 5</li>
                </ul>
                <ul className="list-none mr-5">
                  <li>TypeScript</li>
                  <li>WebSockets</li>
                  <li>Socket.IO</li>
                  <li>Express</li>
                  <li>MongoDB</li>
                  <li>Mongoose</li>
                </ul>
                <ul className="list-none">
                  <li>React Router Dom</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Strapi JS</li>
                  <li>MongoDB</li>
                  <li>Mongoose</li>
                </ul>
              </div>
             
            </div>
            <div className="w-full flex justify-center">
              
            <SwitchButton className=" p-2.5 bg-gray-200 rounded-2xl mt-8" setSkillsIndex={()=>setSkillsIndex(0)}/>
            </div>

          </UseInView>
        </div>
      )}
    </section>
  ) : id === 3 ? (
    <section id="portfolio" className="flex flex-col px-5 lg:p-0">
      <h3 className="text-3xl font-semibold mb-10">Portfolio</h3>
      <div className="lg:w-1/2 flex flex-col lg:flex-row justify-between">
        <div>
          <img
            className="w-10/12"
            src={"./chatyou.io.png"}
            alt="ChatYou"
          ></img>
        </div>
        <div className="lg:w-1/3">
          <h4 className="my-3">
            <a className="no-underline text-gray-700 font-semibold" href="https://chatyou.io">
              HTTPS://CHATYOU.IO
            </a>
          </h4>
          A Full Stack chatting application made with React, TypeScript, Bootstrap, React Router, Redux Toolkit, Express, Socket.io, Mongoose, MongoDB and hosted using an ubuntu EC2 instance on AWS
        </div>
      </div>
    </section>
  )  : id === 4 ? (
    <section id="portfolio" className="flex flex-col px-5 lg:p-0">
      <div className="lg:w-1/2 flex flex-col lg:flex-row justify-between">
        <div>
          <img
            className="w-10/12"
            src={"./chatyou.io.png"}
            alt="ChatYou"
          ></img>
        </div>
        <div className="lg:w-1/3">
          <h4 className="my-3">
            <a className="no-underline text-gray-700 font-semibold" href="https://chatyou.io">
              HTTPS://NEWCHORE.COM
            </a>
          </h4>
          A Full Stack chatting application made with React, TypeScript, Bootstrap, React Router, Redux Toolkit, Express, Socket.io, Mongoose, MongoDB and hosted using an ubuntu EC2 instance on AWS
        </div>
      </div>
    </section>
  ):""
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {[1, 2, 3, 4, 5].map((id) => {
        return <Slider key={id} id={id} />;
      })}
      <motion.div className="progress" style={{ scaleX }} />
    </>
  );
}
