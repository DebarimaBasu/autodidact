import { Sparkles } from "lucide-react";
import Marquee from "react-fast-marquee";

import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { MarqueImg } from "@/components/marquee-img";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="flex-col w-full pb-24 bg-slate-800">
    <Container>
      <div className="my-8">
        <h2 className="text-3xl text-center md:text-left md:text-6xl text-gray-500">
          <span className=" text-outline font-extrabold md:text-7xl">
           Autodidact -AI superpower
          </span>
          <span className="text-gray-400 font-extrabold">
            - A better way to  improve your interview chances and skills
          </span>
          <br />
         
        </h2>

        <p className="mt-8 text-muted-foreground text-sm text-white">
          Boost your interview skills and increase your success rate with
          AI-driven insights. Discover a smarter way to prepare, practice, and
          stand out.
        </p>
      </div>
      <div className="flex w-full items-center justify-evenly md:px-12 md:py-16 md:items-center md:justify-end gap-3">
         
        </div>

        {/* image section */}
        <div className="w-full  mt-6 rounded-xl bg-gray-100 h-[620px] drop-shadow-md overflow-hidden relative">
        <img src="/assets/img/hero1.jpg"
            alt=""
            className="w-full h-full object-cover"
          />

         

          
        </div>
      </Container>

      {/* marquee section */}
      <div className=" w-full my-12">
        <Marquee pauseOnHover>
          
          <MarqueImg img="/assets/img/logo/meet.png" />
          <MarqueImg img="/assets/img/logo/zoom.png" />
          <MarqueImg img="/assets/img/logo/microsoft.png" />
          <MarqueImg img="/assets/img/logo/meet.png" />
          <MarqueImg img="/assets/img/logo/microsoft.png" />
          <MarqueImg img="/assets/img/logo/zoom.png" />
        </Marquee>
      </div>

      <Container className="py-8 space-y-8">
        <h2 className="tracking-wide text-xl text-white font-semibold">
          Unleash your potential with personalized AI insights and targeted
          interview practice.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          <div className="col-span-1 md:col-span-3">
            <img
              
              src="/assets/img/office1.jpg"
              alt=""
              className="w-full max-h-80 rounded-md object-cover"
            />
          </div>

          <div className="col-span-1 md:col-span-2 gap-8 max-h-96 min-h-96 w-full flex flex-col items-center justify-center text-center">
            <p className="text-center text-muted-foreground">
              Transform the way you prepare, gain confidence, and boost your
              chances of landing your dream job. Let AI be your edge in
              today&apos;s competitive job market.
            </p>

            <Link to={"/generate"} className="w-full">
              <Button className="w-3/4">
                Generate <Sparkles className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </Container>
      </div>
  )
}

export default Home
