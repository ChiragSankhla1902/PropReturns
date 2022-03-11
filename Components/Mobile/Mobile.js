import Image from 'next/image'
import Link from "next/link"
import {useState} from 'react'

const Mobile = () => {
  const[show,setshow]=useState(false);
  const[show1,setshow1]=useState(false);

  return (
    <>
        <div class="relative">
          <div class="flex flex-col flex-nowrap justify-around items-center bg-emerald-100 min-w-full w-screen  ">
              <text class="px-8 text-5xl text-indigo-500 font-semibold mt-6  ">Raise the stock</text>
              <text class="px-8 text-md text-slate-700 text-center font-semibold  mt-4  ">Invest smartly in rent generating commercial properties using detailed analysis.</text>
              <button  class=" mt-5 w-3/5 font-medium text-white h-10 text-md rounded-xl bg-indigo-500 hover:bg-indigo-600   py-2 px-4 ">
                  Get started
              </button>
              <div class="flex flex-col   mt-6">
                  <Image class="hover:cursor-pointer" src='/backtick.png' alt="PropReturns" width={450} height={450}/>
              </div>
              <div style={{top:'35%'}} class="absolute" >
                <Image  class=" absolute hover:cursor-pointer  " src='/Phone.png' alt="PropReturns" width={272} height={543}/>
              </div>
          </div>
        </div>
        <div class="flex flex-col flex-nowrap justify-around items-center  min-w-full w-screen  ">
        
          <text  class="px-8 pt-28 text-md text-slate-700 text-center font-semibold  mt-4">Invest smartly in rent generating commercial properties using detailed analysis.</text>
          <text class="px-8 text-4xl text-indigo-500 font-semibold mt-6  ">What is REIT?</text>
          <text  class="px-8 text-md text-slate-700 text-center font-semibold  mt-4">REITS are funds that own, operate and manage a portfolio of income generating commercial property.</text>
          <Link href="/">
            <a class="text-indigo-400  hover:text-indigo-500 "  >Read More ></a>
          </Link>

          <div class="flex flex-col flex-nowrap item-start justify-center  min-w-full w-screen bg-emerald-100 mt-8 ">
            <div class="flex flex-row flex-nowrap justify-between min-w-full   ">
              <text class="px-4 text-2xl  font-semibold mt-6  ">What is REIT?</text>
              <svg class='h-6 w-6 mt-2 mr-2 hover:cursor-pointer' xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <ul class='ml-8 mt-2  list-disc' >
              <li class="py-4 px-2" >
                REITS are funds that own, operate and manage a portfolio of income generating commercial property. 
              </li>
              <li class="py-4 px-2 ">They are an alternate investment asset that allow investors to own small shares of high quality income generating commercial real estate assets.</li>
              <li class="py-4 px-2">Investors who purchase REIT shares earn in 2 ways - rental income which is distributed as dividends to shareholders and an increase in the share value.</li>
              <li class="py-4 px-2">So if you buy a REIT, you can continue to hold it for as long as you wish, earn appreciation and get regular income while you hold it.</li>
            </ul>  

          </div>
          <text class="px-8 text-4xl text-indigo-500 font-semibold mt-6  ">Advantages of REIT</text>
          <div class='mt-4' >
            <Image  class=" hover:cursor-pointer" src='/liq.png' alt="PropReturns" width={100} height={100}/>
          </div>
          <text class="px-8 text-2xl font-semibold mt-6">Liquidity</text>
          <text  class="px-8 text-md text-slate-700 text-center font-semibold  mt-4"> Liquidity is the foremost reason that anyone would want to invest in REITs. REITs trade on public stock exchanges and hence are easy to buy and sell.</text>
          <Link href="/">
            <a class="text-indigo-400  hover:text-indigo-500 mt-2"   >Read More ></a>
          </Link>
          <div class='bg-emerald-100 py-5  min-w-full w-450 h-450 text-center mt-6'>
            <text class="px-8  text-3xl text-indigo-500 font-semibold  ">Investment opportunities</text>
          </div>
          <div class='flex flex-col flex-nowrap justify-start items-start  min-w-full w-screen '>
            <div class="flex flex-row flex-nowrap justify-between min-w-full py-5  ">
                <text class="px-4 text-2xl  font-semibold mt-6  ">Mindspace REIT</text>
                <Image  class=" hover:cursor-pointer" src='/Arrow.png' alt="PropReturns" width={50} height={50}/>
            </div>
            <text  class="text-lg text-slate-700 text-start font-semibold  mt-4 ml-4">Our portfolio comprises five integrated business parks and five quality independent offices, totalling 31.3 msf of total leasable area, comprising 24.2 msf of completed area, 1.8 msf of under-construction area.</text>
            <Link href="/">
              <a class="text-indigo-400  hover:text-indigo-500 mt-2 ml-4 "   >Read More ></a>
            </Link>
          </div>

            <div class="flex flex-row flex-nowrap justify-between min-w-full py-5 ">
              <text class="text-lg  font-semibold mt-6 ml-4">Price</text>
              <text class="text-lg  font-semibold mt-6 mr-4 ">$ 45,000 </text>
            </div>
            <hr/>
            <div class="flex flex-row flex-nowrap justify-between min-w-full py-5 border-y-2 border-indigo-500 border-dashed ">
              <text class="text-lg  font-semibold mt-4 ml-4">Dividend yield</text>
              <text class="text-lg  font-semibold mt-4 mr-4 ">34% </text>
            </div>
            <div class="flex flex-row flex-nowrap justify-between min-w-full py-5 ">
              <text class="text-lg  font-semibold mt-4 ml-4">Appreciation</text>
              <text class="text-lg  font-semibold mt-4 mr-4 ">34%</text>
            </div>
            <div class="flex flex-row flex-nowrap justify-between min-w-full py-5 ">
              <div class="flex flex-row flex-nowrap justify-start min-w-full  ml-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                <button  class=" ml-20 w-3/5 font-medium text-white h-10 text-md rounded-xl bg-indigo-500 hover:bg-indigo-600   py-2 px-4 ">
                  Get started
              </button>
              </div>
            </div>
            <div class='bg-emerald-100 py-5  min-w-full w-450 h-450 text-center mt-6'>
            <text class="px-8 py-8  text-3xl text-indigo-500 font-semibold  ">Frequently asked questions</text>
            </div>

            <div class='flex flex-col  py-8 min-w-full justify-start item-start ' >
              <div class="flex flex-row flex-nowrap justify-between min-w-full py-5 ">
                <text class="text-lg  font-semibold mt-4 ml-4">Q. whether this will generate income easily in just 11 months?</text>
                {!show? <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>{setshow(true)}} className="h-6 w-6  mt-4  hover:cursor-pointer " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
                  :
                <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>{setshow(false)}} class="h-6 w-6  hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
                </svg>}

              </div>
              {!show?<text  class="text-lg text-slate-700 text-start font-semibold  mt-4 ml-4"> A. Yes, It will generate the returns upto 10% in short term</text>:<text  class="text-lg text-slate-700 text-start font-semibold  mt-4 ml-4"> A. Yes, It will generate the returns upto 10% in short term Loreum Epsum random tetx abcdef </text>}
              <div class="flex flex-row flex-nowrap justify-between min-w-full py-5 ">
                <text class="text-lg  font-semibold mt-4 ml-4">Q. How much this will generate income easily in just 9 months?</text>
                {!show1?<svg xmlns="http://www.w3.org/2000/svg"  onClick={()=>{setshow1(true)}} className="h-6 w-6  mt-4  hover:cursor-pointer " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>{setshow1(false)}} class="h-6 w-6  hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
                </svg>
                }
              </div>
              {!show1?<text  class="text-lg text-slate-700 text-start font-semibold  mt-4 ml-4"> A. No, It will generate the returns upto 10% in short term</text>:<text  class="text-lg text-slate-700 text-start font-semibold  mt-4 ml-4"> A. No, It will generate the returns upto 10% in short term Loreum Epsum random tetx abcdef </text>}
            </div>

            
        </div>
        

    </>
  )
}

export default Mobile