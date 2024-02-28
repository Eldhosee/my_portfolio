import React from 'react'
import {motion} from 'framer-motion'
const Educations = () => {
    return (
        <motion.div initial={{opacity:0,y:100}} whileInView={{ opacity: 1,y:0 }} transition={{duration: 1, ease: "easeOut"}}
         className='section flex flex-col justify-center items-center' id='educations'>
            <div className='mb-10'>
                <h2 className='h2 text-accent'>
                    My Educations
                </h2>
            </div>
            <div className='education_div ml-5'>

                <ol class="relative border-s border-gray-200 dark:border-gray-700 h-100">
                    <li class="mb-10 ms-6 h-32">
                        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-pink-900">
                            <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                            </svg>
                        </span>
                        <h3 class="flex items-center h3 mb-4 text-lg font-semibold text-gray-900 dark:text-white">Bachelors of Technology in Information Technology<span class="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-pink-300 ms-3">Latest</span></h3>
                        <time class="block mb-2 text-sm font-normal leading-none text-white mt-5 ">2020 -2024</time>
                        <p class=" text-base font-normal text-white">Cochin Univercity of Science and Technology</p>
                        <p class=" text-base font-normal text-white">CGPA - 8.9</p>

                    </li>
                    <li class="mb-10 ms-6 h-32">
                        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3  ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                            </svg>
                        </span>
                        <h3 class="mb-4 h3 text-lg font-semibold text-gray-900 dark:text-white">Senior Secondary Education</h3>
                        <time class="block mb-2 text-sm font-normal leading-none text-white">2018-2020</time>
                        <p class="text-base font-normal text-white">Naipunnya Public School</p>
                        <p class=" text-base font-normal text-white">Percentage - 93.4%</p>
                    </li>
                    <li class="ms-6 h-32">
                        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3  ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                            </svg>
                        </span>
                        <h3 class="mb-4 text-lg font-semibold text-gray-900 dark:text-white h3">Secondary Education</h3>
                        <time class="block mb-2 text-sm font-normal leading-none text-white">2017-2018</time>
                        <p class="text-base font-normal text-white">Naipunnya Public School</p>
                        <p class=" text-base font-normal text-white">Percentage - 86.4%</p>
                    </li>
                </ol>


            </div>

        </motion.div>
    )
}

export default Educations