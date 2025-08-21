import { HeroSection } from "@/components/hero-section";
import { Services } from "@/components/services";
import { Contact } from "@/components/contact";
import { Skills } from "@/components/skills";
import { Resume } from "@/components/resume";
import { Blogs } from "@/components/blogs";
import { Portfolio } from "@/components/portfolio";
import { Separator } from "@/components/ui/separator";
import { getResume } from "@/actions/get-resume";
import { getSkills } from "@/actions/get-skills";
import { BLOGS, CERTIFICATES, SERVICES } from "@/data";

import { PORTFOLIO } from "@/data";
import { Certificate } from "@/components/certificate";

export default async function  Home () {

    const resume = await getResume()
    const skills = await getSkills()


 
   
  return (
 <div className="space-y-4">
  <>
   <HeroSection 
 />
 <Separator/>
  </>


  <>
   <Services services={SERVICES}/>
  <Separator/>
  </>




  <>
   <Portfolio portfolios={PORTFOLIO}/>
  <Separator/>
  </>



{skills && (
  <>
   <Skills skills={skills}/>
  <Separator/>
  </>
)}


{
  resume && (
    <>
    <Resume resume= {resume}/>
   <Separator/>
    </>
  )
}




<>
 <Certificate certificates={CERTIFICATES}/>
   <Separator/>
</>



  <>
 <Blogs blogs={BLOGS}/>
   <Separator/>
</>




 <Contact
 />

 </div>
  );
}
