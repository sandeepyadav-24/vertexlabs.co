import React from "react";
import { TracingBeam } from "@/components/ui/tracing-beam";

const Working = () => {
  return (
    <div className="flex md:flex-row flex-col mx-40">
      <div className="w-1/2 mx-10">
        <div>For Companies</div>
        <TracingBeam className="px-6">
          <div className="first ">
            <h1 className="font-semibold my-10">Sponsor a Hackathon</h1>
            <h3 className="my-20">
              Partner with us to organize or sponsor a hackathon. Gain access to
              a pool of talented individuals eager to solve problems.
            </h3>
          </div>
          <div className="second">
            <h1 className="font-semibold my-10">Connect with Top Talent</h1>
            <h3 className="my-20">
              Evaluate participants in real-time and identify the best
              candidates for internships or full-time roles.
            </h3>
          </div>
          <div className="third">
            <h1 className="font-semibold my-10">Enhance Your Employer Brand</h1>
            <h3 className="my-20">
              Showcase your company as an innovator and attract top talent
              through engaging hackathon events.
            </h3>
          </div>
        </TracingBeam>
      </div>
      <div className="w-1/2 mx-10">
        <div>For Participants</div>
        <TracingBeam>
          <div className="first">
            <h1 className="font-semibold my-10">Join Our Hackathons</h1>
            <h3 className="my-20">
              Discover our exciting hackathons held twice a month. Collaborate
              with peers, solve real-world challenges, and get noticed by top
              companies.
            </h3>
          </div>
          <div className="second">
            <h1 className="font-semibold my-10">Showcase Your Skills</h1>
            <h3 className="my-20">
              Demonstrate your problem-solving abilities and creativity. Stand
              out in the tech community and gain valuable experience.
            </h3>
          </div>
          <div className="third">
            <h1 className="font-semibold my-10">Secure an Internship</h1>
            <h3 className="my-20">
              Impress participating companies and secure internship
              opportunities that align with your career goals.
            </h3>
          </div>
        </TracingBeam>
      </div>
    </div>
  );
};

export default Working;
