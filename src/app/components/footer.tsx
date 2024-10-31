import { IoLogoTwitter } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { RiWhatsappFill } from "react-icons/ri";
export default function Footer(){
return(
 <>
 <section className="w-screen max-w-screen-2xl xl:mx-auto">
<div className="w-full py-10 px-5 bg-black flex flex-col items-center justify-center space-y-12 md:flex-row  md:justify-evenly md:py-16">
   <div className="text-white text-center  md:text-left">
    <h2 className="text-[25px] font-bold mb-3">cyber</h2>
    <p className="text-[15px] text-para">We are a residential interior design firm located <br className="hidden md:inline"/> in Portland. Our boutique-studio offers more than</p>
   </div>
   <div className="text-center md:text-left">
    <h2 className="text-[19px] mb-3  text-white font-font2">Services</h2>
      <ul className="space-y-3">
        <li className="items2 items">Bonus program</li>
        <li className="items2 items">Gift cards</li>
        <li className="items2 items">Credit and payment</li>
        <li className="items2 items">Service</li>
        <li className="items2 items">Non-cash account</li>
        <li className="items2 items">Payment</li>
      </ul>
   </div>
   <div className="text-center md:text-left">
    <h2 className="text-[19px] mb-3 text-white font-font2">Advance to buyer</h2>
      <ul className="space-y-3">
        <li className="items2 items">Find an order</li>
        <li className="items2 items">Terms of delivery</li>
        <li className="items2 items">Exchange and return of goods</li>
        <li className="items2 items">Guarantee</li>
        <li className="items2 items">Frequently asked questions</li>
        <li className="items2 items">Terms of use of the site</li>
      </ul>
   </div>
   <div className="flex items-center justify-center gap-8 md:hidden">
    <IoLogoTwitter size={32} className="text-[white]"/>
    <FaFacebookF size={32} className="text-[white]"/>
    <RiInstagramFill size={32} className="text-[white]"/>
    <RiWhatsappFill size={32} className="text-[white]"/>
   </div>
   </div>
 </section>
 </>
);
}