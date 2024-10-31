import { BiHeart } from "react-icons/bi";
import pic1  from "../public/pic0.png";
import pic2  from "../public/pic1.png";
import pic3  from "../public/ic2.png";
import pic4  from "../public/pic3.png";

export default function Section2(){
    type list={
        image:string,
        text:string,
        price:string,
      }
    
      const products:list[]=[
       {image:pic1.src, text:"Apple iPhone 14 Pro 512GB Gold (MQ233)",price:"$900"},
       {image:pic2.src, text:"Blackmagic Pocket Cinema Camera 6k",price:"$2535"},
       {image:pic3.src, text:"Apple Watch Series 9 GPS 41mm Starlight Aluminium ",price:"$359"},
       {image:pic4.src, text:"AirPods Max Silver Starlight Aluminium ",price:"$549"},
      ]
       return(
        <>
        <section className="py-4 sm-py-8  w-screen max-w-screen-2xl xl:mx-auto flex items-center justify-center">
          <div className="w-[90%]">
          <div className="w-[100%] md:text-[24px] text-[20px] text-black font-font2 mb-7 ">
              <span className="md:ml-2">Discounts up to -50%</span>
              </div>
              <div className="w-[100%] flex flex-row flex-wrap md:gap-4 gap-2 justify-center items-center">
                {products.map(e=>
                 <div className="md:w-[268px] xs:w-[150px] w-[165px] h-[352px] md:h-[432px] bg-pr1 flex flex-col items-center justify-evenly">
                   <div className="w-[100%] flex justify-end pr-2">
                    <BiHeart className="md:text-3xl text-2xl text-gray-300"/>
                   </div>
                   <div className="md:w-[160px] w-[104px] h-[104px] md:h-[160px] bg-cover" style={{backgroundImage:`url(${e.image})`}}>
                   </div>
                   <div className="text-center px-5">
                    <p className="text-[16px] xs:text-[15px] xs:leading[22px] leading-[24px] font-meduim mb-2 text-black">{e.text}</p>
                    <h3 className="text-[25px] font-semibold mb-3 xs:text-[22px] text-black">{e.price}</h3>
                    <button className="md:w-[183px] w-[110px] p-1 md:p-3 bg-black text-white md:text-[14px] rounded-md">Buy Now</button>
                   </div>
                 </div>
                )};
              </div>
          </div>
        </section>
        </>
       );
}