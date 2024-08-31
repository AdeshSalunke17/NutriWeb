import Image from "next/image";
import homePageStar from '../public/homepagestar.png'
import homePageImage from '../public/homepageImage.png'

export default function Home() {
  return (
    <>
    <div className="w-full bg-[#fdfbfd] grid md:grid-cols-2">
      <div className="md:py-[12rem] lg:pl-[10rem] pl-[5rem] py-10 md:px-0 px-[5rem]">
        <Image src={homePageStar} alt="" className="w-[50px]"/>
        <h1 className="font-poppins text-[#21695c] font-semibold text-5xl leading-tight">Meet Healthify :</h1>
        <h1 className="font-poppins font-semibold text-5xl leading-tight">Health Made Easy <br/>With AI.</h1>
        <p className="font-poppins font-light text-xl mt-2">Improve your nutrition with HealthifySnap's advanced meal tracking & meet Ria, your personalized AI coach.</p>
        <div className="w-full grid sm:grid-cols-2 mt-7">
          <div className="sm:flex-none justify-center flex">
            <button className="bg-[#21695c] text-white rounded-md text-lg font-semibold px-10 py-3">Try HealthifySnap</button>
          </div>
          <div className="sm:flex-none justify-center flex sm:mt-0 mt-4">
            <button className="border-[#21695c] text-[#21695c] rounded-md text-lg font-semibold px-10 py-3">Talk to AI Coach Ria</button>
          </div>
        </div>
      </div>
      <div className="px-5 ">
        <Image src={homePageImage} alt=""/>
      </div>
    </div>
    </>
  );
}
