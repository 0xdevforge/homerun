import Image from 'next/image'
import React from 'react'
import localfont from 'next/font/local';
import logo from '@/public/logo.png';
import dropdown from '@/public/dropdown.svg';
import regular from "next/font/local"

const local = localfont({
  src: './GTWalsheimPro-CondensedUltraBold.ttf',
  display: 'swap',
})
const average = regular({
  src: './GTWalsheimPro-Regular.ttf',
  display: 'swap',
})


export default function Navbar() {
  return (
    <nav className='z-10 top-0 fixed w-full '>
      <div className="bg-white  py-4 mx-64 mt-4 shadow-sm rounded-full">
        <div className="flex  items-center justify-center  ">
          <Image src={logo} alt="logo" className='w-28' />

          <ul className="flex gap-4 text-lg font-medium ml-8 items-center">
            <li>
              <div className="dropdown ">
                <div className=" flex items-center gap-1 hover:bg-[#f8f4f4] transition p-2 px-2 rounded-lg duration-150 ease-in-out cursor-pointer ">
                  Product
                  <Image src={dropdown} alt="dropdown" className='w-4 h-4' />
                </div>
                <div className="dropdown-menu  hidden absolute w-96 bg-white p-2 shadow space-y-2 rounded-lg  text-gray-700 -translate-y-2 pb-6">
                  <a className={`" ${local.className} navlinks  rounded-lg  hover:bg-[#f8f4f4] py-4 px-2  text-xl space-y-2 flex flex-col font-extrabold  whitespace-no-wrap"`} href="#">
                    Career site & Job posts
                    <span className= {`' ${average.className} text-sm font-medium'`} >
                      The best looking carrier site out there
                    </span>
                  </a>
                  <a className={`" ${local.className} navlinks  rounded-lg  hover:bg-[#f8f4f4] py-4 px-2  text-xl space-y-2 flex flex-col font-extrabold  whitespace-no-wrap"`} href="#">
                    Applications Forms
                    <span className= {`' ${average.className} text-sm font-medium'`} >
                      Forms for a great experience
                    </span>
                  </a>
                  <a className={`" ${local.className} navlinks  rounded-lg  hover:bg-[#f8f4f4] py-4 px-2  text-xl space-y-2 flex flex-col font-extrabold  whitespace-no-wrap"`} href="#">
                    Application Tracking
                    <span className= {`' ${average.className} text-sm font-medium'`} >
                      One clear overview for collaborative hiring
                    </span>
                  </a>

                  <div className="py-1 border-b-2"></div>
                  <a className={`" ${local.className} navlinks  rounded-lg  hover:bg-[#f8f4f4] py-4 px-2  text-xl space-y-2 flex flex-col font-extrabold  whitespace-no-wrap"`} href="#">
                    Templates
                  </a>
                  <a className={`" ${local.className} navlinks  rounded-lg  hover:bg-[#f8f4f4] py-4 px-2  text-xl space-y-2 flex flex-col font-extrabold  whitespace-no-wrap"`} href="#">
                    Integrations
                  </a>
                  <a className={`" ${local.className} navlinks  rounded-lg  hover:bg-[#f8f4f4] py-4 px-2  text-xl space-y-2 flex flex-col font-extrabold  whitespace-no-wrap"`} href="#">
                    All Features
                  </a>
                </div>
              </div>
            </li>
            <li className='hover:bg-[#f8f4f4] transition p-2 px-2 rounded-lg duration-150 ease-in-out cursor-pointer'>
              Pricing
            </li>
            <li>
              <div className="dropdown ">
                <div className=" flex items-center gap-1 hover:bg-[#f8f4f4] transition p-2 px-2 rounded-lg duration-150 ease-in-out cursor-pointer ">
                  Use Cases
                  <Image src={dropdown} alt="dropdown" className='w-4 h-4' />
                </div>
                <div className="dropdown-menu-large  hidden absolute bg-white p-2 shadow rounded-lg  text-gray-700  pb-6">
                  <div className='columns-2 w-full items-center '>

                    <div className="items-start ">
                      <a className={`" ${local.className} navlinks  rounded-lg  hover:bg-[#f8f4f4] py-4 px-2  text-xl space-y-2 flex flex-col font-extrabold  whitespace-no-wrap"`} href="#">
                        Startups
                        <span className= {`' ${average.className} text-sm font-medium'`} >
                          B2B, B2C, tech companies
                        </span>
                      </a>
                      <a className={`" ${local.className} navlinks  rounded-lg  hover:bg-[#f8f4f4] py-4 px-2  text-xl space-y-2 flex flex-col font-extrabold  whitespace-no-wrap"`} href="#">
                        Agencies
                        <span className= {`' ${average.className} text-sm font-medium'`} >
                          Design, digital, advertising
                        </span>
                      </a>
                      <a className={`" ${local.className} navlinks  rounded-lg  hover:bg-[#f8f4f4] py-4 px-2  text-xl space-y-2 flex flex-col font-extrabold  whitespace-no-wrap"`} href="#">
                        Hospitality
                        <span className= {`' ${average.className} text-sm font-medium'`} >
                          Resturants, hotels, leisure
                        </span>
                      </a>
                      <a className={`" ${local.className} navlinks  rounded-lg  hover:bg-[#f8f4f4] py-4 px-2  text-xl space-y-2 flex flex-col font-extrabold  whitespace-no-wrap"`} href="#">
                        E-commerce
                        <span className= {`' ${average.className} text-sm font-medium'`} >
                          Online Shops, DTC
                        </span>
                      </a>
                    </div>

                    <div className="items-end ">

                      <a className={`" ${local.className} navlinks  rounded-lg  hover:bg-[#f8f4f4] py-4 px-2  text-xl space-y-2 flex flex-col font-extrabold  whitespace-no-wrap"`} href="#">
                        Retail
                        <span className= {`' ${average.className} text-sm font-medium'`} >
                          Local Business, shops
                        </span>
                      </a>
                      <a className={`" ${local.className} navlinks  rounded-lg  hover:bg-[#f8f4f4] py-4 px-2  text-xl space-y-2 flex flex-col font-extrabold  whitespace-no-wrap"`} href="#">
                        Healthcare
                        <span className= {`' ${average.className} text-sm font-medium'`} >
                          Care centers, treatment facilities
                        </span>
                      </a>
                      <a className={`" ${local.className} navlinks  rounded-lg  hover:bg-[#f8f4f4] py-4 px-2  text-xl space-y-2 flex flex-col font-extrabold  whitespace-no-wrap"`} href="#">
                        Education
                        <span className= {`' ${average.className} text-sm font-medium'`} >
                          Schools, trainings, museums
                        </span>
                      </a>

                      <div className="pt-1 pb-3">
                        <hr />
                      </div>
                      <a className={`" ${local.className} navlinks  rounded-lg  hover:bg-[#f8f4f4] py-4 px-2  text-xl space-y-2 flex flex-col font-extrabold  whitespace-no-wrap"`} href="#">
                        All Customers
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </li>
            <li>
              <div className="dropdown ">
                <div className=" flex items-center gap-1 hover:bg-[#f8f4f4] transition p-2 px-2 rounded-lg duration-150 ease-in-out cursor-pointer ">
                  Resources
                  <Image src={dropdown} alt="dropdown" className='w-4 h-4' />
                </div>
                <div className="dropdown-menu  hidden absolute w-72 bg-white p-2 shadow space-y-2 rounded-lg  text-gray-700 -translate-y-2 pb-6">
                  <a className={`" ${local.className} navlinks  rounded-lg  hover:bg-[#f8f4f4] py-4 px-2  text-xl space-y-2 flex flex-col font-extrabold  whitespace-no-wrap"`} href="#">
                    Blog
                    <span className= {`' ${average.className} text-sm font-medium'`} >
                      Packed with practicial tips and advice
                    </span>
                  </a>
                  <a className={`" ${local.className} navlinks  rounded-lg  hover:bg-[#f8f4f4] py-4 px-2  text-xl space-y-2 flex flex-col font-extrabold  whitespace-no-wrap"`} href="#">
                    Articles
                    <span className= {`' ${average.className} text-sm font-medium'`} >
                      Actionable articles on all things hiring
                    </span>
                  </a>
                  <a className={`" ${local.className} navlinks  rounded-lg  hover:bg-[#f8f4f4] py-4 px-2  text-xl space-y-2 flex flex-col font-extrabold  whitespace-no-wrap"`} href="#">
                    Guides
                    <span className= {`' ${average.className} text-sm font-medium'`} >
                      Inspiring and useful guides on hiring
                    </span>
                  </a>

                  <div className="py-1 border-b-2"></div>
                  <a className={`" ${local.className} navlinks  rounded-lg  hover:bg-[#f8f4f4] py-4 px-2  text-xl space-y-2 flex flex-col font-extrabold  whitespace-no-wrap"`} href="#">
                    Showcases
                    <span className= {`' ${average.className} text-sm font-medium'`} >
                      JOb Posts and career pages we love
                    </span>
                  </a>
                  <a className={`" ${local.className} navlinks  rounded-lg  hover:bg-[#f8f4f4] py-4 px-2  text-xl space-y-2 flex flex-col font-extrabold  whitespace-no-wrap"`} href="#">
                    Get started with Homerun
                    <span className= {`' ${average.className} text-sm font-medium'`} >
                      Simple steps to help you set up
                    </span>
                  </a>

                  <a className={`" ${local.className} navlinks  rounded-lg  hover:bg-[#f8f4f4] py-4 px-2  text-xl space-y-2 flex flex-col font-extrabold  whitespace-no-wrap"`} href="#">
                    Help center
                    <span className= {`' ${average.className} text-sm font-medium'`} >
                      Advice and answers from Homerun
                    </span>
                  </a>
                </div>
              </div>
            </li>
          </ul>

          <div className="flex gap-1">
            <button className='hover:bg-[#e8e5de] font-medium text-lg  py-3 px-5 rounded-3xl'>
              Log in
            </button>
            <button className='py-3 bg-[#4f75fe] hover:bg-[#254cda] hover:-rotate-3 transition duration-300 text-white text-lg rounded-3xl px-6'>
              Start for free
            </button>
          </div>
        </div>
      </div>

    </nav>
  )
}
