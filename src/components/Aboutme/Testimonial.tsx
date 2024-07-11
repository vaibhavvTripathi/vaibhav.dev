import React from "react";
import { MyAvatar } from "../Home/Avatar";
import Link from "next/link";

const testimonial = {
  name: "Eatesh Kandpal",
  byline: "Sr Software Engineer @Bloomberg, Ex- Microsoft",
  tesitmonial:
    "I've known Vaibhav for over a year now, witnessing his evolution from a keen newcomer to a reliable tech lead. Starting out as a young engineer, he dedicated himself to mastering every facet of full-stack development, spanning from UI design to backend intricacies. Transitioning into a leadership role, he fearlessly tackled diverse challenges, from architecting solutions tailored to immense scalability needs to crafting user-centric designs. Throughout, he maintained a profound appreciation for aligning with customer demands, whether it involved implementing new features or resolving existing issues. Vaibhav's contributions have been instrumental in the success of Shipotle's products & platforms. Without hesitation, I wholeheartedly endorse him as an exemplary engineer/tech-lead for any software engineering team.",
  linkden: "https://www.linkedin.com/in/eateshk/",
  img: "https://media.licdn.com/dms/image/D4E03AQH5kh2u99YxRA/profile-displayphoto-shrink_800_800/0/1710108004111?e=1726099200&v=beta&t=Qo_x0HMfOcFTCruj4g04cyKz12ms1tYJ8qU9ZBUdYUI",
};
const Testimonial = () => {
  return (
    <div className="mt-10 ">
      <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mb-5">
        Endorsement
      </h3>
      <div className="border p-2 rounded-lg">
        <Link
          href={testimonial.linkden}
          target="blank"
          className="flex items-center gap-2 mb-5"
        >
          <MyAvatar url={testimonial.img} fallback="EK" />
          <div>
            <h1 className="scroll-m-20 text-sm hover:underline tracking-tight lg:text-lg mt-2">
              {testimonial.name}
            </h1>
            <h4 className="scroll-m-20 text-xs  tracking-tight lg:text-sm text-gray-400">
              {testimonial.byline}
            </h4>
          </div>
        </Link>
        <p className="leading-7 [&:not(:first-child)]:mt-6 italic text-gray-600">
          &quot; {testimonial.tesitmonial} &quot;
        </p>
      </div>
    </div>
  );
};

export default Testimonial;
