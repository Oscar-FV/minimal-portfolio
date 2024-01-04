import { Icon } from "@iconify/react/dist/iconify.js";
import ContactForm from "./ContactForm";
import { DateTime } from 'luxon';
import { useEffect, useState } from "react";

const Contact = () => {

    const [timeCity, setTimeCity] = useState(DateTime.now().setZone('America/Mexico_City'));

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeCity(DateTime.now().setZone('America/Mexico_City'));
        }, 1000);
    
        return () => clearInterval(intervalId);
      }, []);


  return (
    <div className="flex flex-col lg:flex-row mx-10 lg:mx-0 lg:gap-x-16 gap- lg:gap-y-10 lg:px-0 lg:w-full">
      <div className="flex flex-col justify-center lg:w-[70%] gap-y-2 lg:gap-y-4">
        <h1 className="font-worksans text-4xl lg:text-6xl font-semibold text-white">
          Want to work togheter?
        </h1>
        <p className="font-worksans text-lg lg:text-3xl text-white">
          Leave me a message and let's get in touch!
        </p>
        <ContactForm/>
      </div>

      <div className="flex flex-col gap-y-8 lg:gap-y-16 mt-10 grow text-white font-worksans tracking-[2px]">
        
        <div>
            <h3 className="text-3xl text-accent font-semibold mb-1"> Contact Details </h3>
            <a href="mailto:oscar.flores.vqz@gmai.com" className="text-lg text-white font-normal contact-list"> oscar.flores.vqz@gmai.com </a>
        </div>

        <div>
            <h3 className="text-3xl text-accent font-semibold mb-2"> Where To Find Me </h3>
            
            <div className="flex items-center gap-x-2 mb-3">
                <Icon icon="mdi:linkedin" className="text-white text-3xl"/>
                <a href="https://www.linkedin.com/in/oscar-flores-vázquez-345647243/" className="text-lg text-white font-normal contact-list"> LinkedIn </a>
            </div>
            <div className="flex items-center gap-x-2 mb-3">
                <Icon icon="mdi:github"  className="text-white text-3xl"/>
                <a href="https://github.com/Oscar-FV" className="text-lg text-white font-normal contact-list"> GitHub </a>
            </div>
        </div>

        <div>
            <h3 className="text-3xl text-accent font-semibold mb-1"> Location </h3>
            <p className="text-2xl text-white font-normal"> San Luis Potosí, México </p>
            <p className="text-2xl text-white font-normal"> {timeCity.toFormat('HH:mm:ss')} </p>
        </div>

      </div>
    </div>
    
  );
};

export default Contact;
