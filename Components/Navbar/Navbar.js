import Image from 'next/image'

const Navbar = () => {
  return (
    <>
    <nav class="flex flex-row	  justify-between flex-nowrap bg-indigo-500 p-6">
      <div class="flex items-center   text-white mr-6">
        <Image class="hover:cursor-pointer" src='/Logo.png' alt="PropReturns" width={130} height={37}/>
      </div>
      <div class=" flex items-center flex-row text-white mr-6  ">
            
            <div class="text-sm lg:flex-grow">
              <text class="px-8 text-sm  font-medium hover:cursor-pointer ">LOG IN</text>
              <button class="bg-slate-50 font-medium text-indigo-500 h-10 text-sm rounded-xl hover:bg-slate-200 py-2 px-2" >SIGN UP</button>
        </div>
      </div>
    </nav>

    </>
  )
}

export default Navbar