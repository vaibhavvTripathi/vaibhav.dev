import Experience from "@/components/Aboutme/Experience";
import LatestBlogs from "@/components/Aboutme/LatestBlogs";
import ProjectList from "@/components/Aboutme/ProjectList";
import Skills from "@/components/Aboutme/Skills";
import Testimonial from "@/components/Aboutme/Testimonial";

export default function Home() {
  return (
    <section className="mt-5">
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        I am a Full Stack Software Developer with extensive experience across
        the stack, specializing in .NET, C#, Typescript, React, Next.js, React
        Native, Express, and Node.js. With over a year of hands-on experience, I
        excel in building robust and scalable applications.
      </p>
      <Skills />
      <Experience />
      <ProjectList />
      <Testimonial />
      <LatestBlogs />
    </section>
  );
}
