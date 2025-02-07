import React from "react";
import { AiOutlineMenu } from 'react-icons/ai';
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";
import data from "../data/data.json";
import "../assets/roadmap/roadmap.css";

const Sidebar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleRoadmap = () => {
        setIsOpen(!isOpen);
    };

    const languageKeys = Object.keys(data.languages);

    return (
        <div>
            <div className="lg:hidden fixed inline-block bg-gray-300 top-16  ring-inset opacity-40 rounded-r-xl z-0 hover:opacity-100 hover:z-20 p-1">
                <button onClick={toggleRoadmap}>
                    {isOpen ? null : <HiMenu size={26} fill="#" className=" mt-1 " />}
                </button>
            </div>
            <aside className={`fixed  bg-[#000300]  border-t-2 top-0 border-r-2 z-40 left-0 opacity-100  w-[20rem] pb-24  h-screen  transition-transform  lg:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"
                }  border-gray-700`} >
                <div className="flex flex-row  pl-4 pb-3 pt-5 border-b border-gray-700 mb-6">
                    <svg className="w-10 fill-current text-white" version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg">
                        <path d="m692.48 263.77-165.13-189.09c-10.523-12.074-28.023-12.074-38.586 0-10.02 11.484-10.02 29.73 0 41.215l147.13 168.48-147.13 168.48c-10.02 11.484-10.02 29.727 0 41.211 10.562 12.078 28.062 12.078 38.586 0l165.13-189.09c10.043-11.484 10.043-29.727 0-41.211m-481.25-189.09c-10.543-12.078-28.043-12.078-38.586 0l-165.13 189.09c-10.02 11.484-10.02 29.727 0 41.211l165.13 189.09c10.543 12.074 28.043 12.074 38.586 0 10.02-11.484 10.02-29.73 0-41.215l-147.13-168.48 147.13-168.48c10.02-11.484 10.02-29.727 0-41.211m192.18-52.008c-12.426-3.3242-25.223 4.0469-28.57 16.473l-128.19 478.38c-3.3242 12.426 4.0703 25.203 16.516 28.547 12.445 3.3477 25.242-4.0469 28.59-16.469l128.17-478.36c3.3242-12.449-4.0703-25.223-16.516-28.57" fill-rule="evenodd" />
                    </svg>
                    <h1 className="text-white text-3xl pl-4">FRONTEND</h1>
                    <div className="lg:hidden ml-16 mt-1">
                        <button onClick={toggleRoadmap} className="hover:text-white text-gray-300">
                            {isOpen ? <HiX size={28} className=" fill-current" /> : null}
                        </button>
                    </div>
                </div>
                <div className="sidebar  px-3 pb-4  h-full overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100" >
                    <ul className="space-y-6    font-medium ">
                        {languageKeys.map((key) => {
                            const language = data.languages[key];
                            return (
                                <li className="text-white pl-4  tracking-wide text-lg">
                                    {key}
                                    <ul className="pl-4">
                                        <li className="">
                                            {language.first ?
                                                (<a className="flex items-center  mt-2 rounded-lg   hover:bg-[#0dff1c] active:bg-[#0dff1c] focus:bg-[#0dff1c] active:text-black focus:text-black hover:text-black">
                                                    <span className="p-2 rounded  hover:shadow-xl hover:shadow-black">
                                                        <AiOutlineMenu size={18} className="fill-current " />
                                                    </span>
                                                    <span className="ml-1">{language.first}</span>
                                                </a>) : null
                                            }
                                            {language.second ?
                                                (<a className="flex items-center rounded-lg  hover:bg-[#0dff1c]  active:bg-[#0dff1c] focus:bg-[#0dff1c] active:text-black focus:text-black  hover:text-black">
                                                    <span className="p-2 rounded  hover:shadow-xl hover:shadow-black">
                                                        <AiOutlineMenu size={18} className="fill-current " />
                                                    </span>
                                                    <span className="ml-1">{language.second}</span>
                                                </a>) : null
                                            }
                                            {language.third ?
                                                (<a className="flex items-center  rounded-lg  hover:bg-[#0dff1c]  active:bg-[#0dff1c] focus:bg-[#0dff1c] active:text-black focus:text-black  hover:text-black">
                                                    <span className="p-2 rounded hover:shadow-xl hover:shadow-black ">
                                                        <AiOutlineMenu size={18} className="fill-current " />
                                                    </span>
                                                    <span className="ml-1">{language.third}</span>
                                                </a>) : null
                                            }
                                            {language.fourth ?
                                                (<a className="flex items-center rounded-lg  hover:bg-[#0dff1c]  active:bg-[#0dff1c] focus:bg-[#0dff1c] active:text-black focus:text-black  hover:text-black">
                                                    <span className="p-2 rounded hover:shadow-xl hover:shadow-black">
                                                        <AiOutlineMenu size={18} className="fill-current" />
                                                    </span>
                                                    <span className="ml-1">{language.fourth}</span>
                                                </a>) : null
                                            }
                                        </li>
                                    </ul>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </aside>
        </div>
    )
}

export default Sidebar;