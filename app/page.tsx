import { HeroSection } from "@/components/hero-section";
import { Services } from "@/components/services";
import { Contact } from "@/components/contact";
import { Skills } from "@/components/skills";
import { Resume } from "@/components/resume";
import { Pricing } from "@/components/pricing";
import { Testimonial } from "@/components/testimonial";
import { Blogs } from "@/components/blogs";
import { Portfolio } from "@/components/portfolio";
import { Separator } from "@/components/ui/separator";
import { getProfile } from "@/actions/get-profile";
import { getGig } from "@/actions/get-gig";
import { getTestimonials } from "@/actions/get-testimonials";
import { getResume } from "@/actions/get-resume";
import { getSkills } from "@/actions/get-skills";
import { getServices } from "@/actions/get-services";
import { getPortfolios } from "@/actions/get-portfolio";
import { getBlogs } from "@/actions/get-blogs";

export default async function  Home () {
    const profile = await getProfile();
    const gig = await getGig()
    const resume = await getResume()
    const testimonials = await getTestimonials()
    const skills = await getSkills()

    const {data:blogs} = await getBlogs(1)
    const { data: portfolios } = await getPortfolios(1);
    const services = await getServices()
   

    const {name, welcomeMessage, profession,professionBio ,primaryImage,secondaryImage, email, phone,socialMedia} = profile
  return (
 <div className="space-y-4">
  {profile && <>
   <HeroSection 
 name={name}
 welcomeMessage={welcomeMessage}
 professionBio={professionBio}
 primaryImage={primaryImage}
 secondaryImage={secondaryImage}
 profession={profession}
 
 />
 <Separator/>
  </>}

{services.data && (
  <>
   <Services services={services.data}/>
  <Separator/>
  </>
)}


{portfolios && (
  <>
   <Portfolio portfolios={portfolios}/>
  <Separator/>
  </>
)}


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


{gig && (<>
 <Pricing gig={gig}/>
   <Separator/>
</>)}

{testimonials && (<>
 <Testimonial testimonials={testimonials.data}/>
   <Separator/>
</>)}


{blogs && (
  <>
 <Blogs blogs={blogs}/>
   <Separator/>
</>
)}



 <Contact
 name={name}
 email={email}
 socialMedia={socialMedia}
 phone={phone}
 profession={profession}
 primaryImage={primaryImage}
 />

 </div>
  );
}
