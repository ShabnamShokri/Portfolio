import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";


const ProjectCard = ({ index, name , description , image, source_code_link, tags}) =>{
  return(
    <motion.div 
      variants={fadeIn('up', 'spring', index * 0.5 , 0.75)}
    >
      <Tilt
        option={{
          max: 45,
          scale:1,
          speed: 450
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
              onClick={() => window.open(source_code_link,'blank')}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
        </div>

        <div className="mt-5 ">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px] direction">{description}</p>
        </div>

        <div className="mt-4 flex flex-row gap-2">
          {tags.map((tag)=>(
            <p key={tag.name} className={`text-[14px] ${tag.color}`} >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}


const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} direction`}>
          نمونه کارهای من
        </p>
          <h2 className={`${styles.sectionHeadText} direction`}> مشاهده ی پروژه ها</h2>
      </motion.div>

      <div className="w-full flex  direction">
        <motion.p 
          variants={fadeIn('','',0.1,1)}
          className="mt-3 text-secondary text-[22px] max-w-3xl leading-[40px]"
        >
          پروژه‌های زیر توانایی‌ها و تجربه‌ام را از طریق نمونه‌های واقعی از کارهای انجام‌شده نشان می‌دهند.
           هر پروژه به طور خلاصه توضیح داده شده و دارای پیوندهایی به مخازن کد و نمایش زنده است. 
           این پروژه‌ها توانایی من در حل مسائل پیچیده، کار با فناوری‌های مختلف و
            مدیریت پروژه‌ها را به خوبی نمایان می‌سازند.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project,index)=>(
          <ProjectCard key={`project-${index}`} index={index} {... project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper (Works,'project')