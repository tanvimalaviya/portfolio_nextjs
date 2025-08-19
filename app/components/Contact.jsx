import { assets } from '@/assests/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "motion/react"

const Contact = () => {
    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "42612dc1-d846-40d0-8568-634ed93f2428");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    style={{ backgroundImage: "url('/footer-bg-color.png')" }}
    id="contact" className="w-full px-[12%] py-10 scroll-mt-20 bg-no-repeat bg-center  bg-cover dark:bg-none"
    >
      <motion.h4
      initial={{y:-20 ,opacity:0}}
      whileInView={{y:0 ,opacity:1}}
      transition={{delay:0.3 ,duration:0.5}}
      className="text-center mb-2 text-lg font-Ovo">Connect with me</motion.h4>
      <motion.h2 
      initial={{y:-20 ,opacity:0}}
      whileInView={{y:0 ,opacity:1}}
      transition={{delay:0.5 ,duration:0.5}}
      className="text-center text-5xl font-Ovo">Get in touch</motion.h2>
      <motion.p 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{delay:0.7 ,duration:0.5}}
      className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I'd love to hear from you! If you have any questions , comments,or feedback, please use the form below
        
      </motion.p>
      <motion.form 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{delay:0.9 ,duration:0.5}}
      className='max-w-2xl mx-auto' onSubmit={onSubmit}>
        <div className='grid grid-cols-2 mt-10 mb-8 gap-6'>
            <motion.input 
            initial={{x:-50 ,opacity:0}}
            whileInView={{x:0 ,opacity:1}}
            transition={{delay:1.1 ,duration:0.6}}
            type='text' placeholder='Enter Your Name' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90' name='name'></motion.input>
            <motion.input 
             initial={{x:50 ,opacity:0}}
             whileInView={{x:0 ,opacity:1}}
             transition={{delay:1.2 ,duration:0.6}}
            type='email' placeholder='Enter Your Email' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90' name='email'></motion.input>
        </div>
        <motion.textarea 
         initial={{y:100 ,opacity:0}}
         whileInView={{y:0 ,opacity:1}}
         transition={{delay:1.3 ,duration:0.6}}
        rows='6' placeholder='Enter Your Message' name='message' required className=' p-4 w-full outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90' ></motion.textarea>
        <motion.button 
        whileHover={{scale:1.05}}
        transition={{duration:0.3}}
        type='submit' className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500  dark:bg-transparent dark:hover:bg-darkHover dark:border-[0.5px]'>Submit Now
        <Image src={assets.right_arrow_white} className='w-4' alt='' ></Image>
        </motion.button>
        <p className='mt-4'>{result}</p>
      </motion.form>
    </motion.div>
  )
}

export default Contact
