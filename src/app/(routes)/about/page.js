import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import React from "react";

const AboutPage = () => {
  return (
    <div className="w-full h-full flex flex-col justify-start items-center space-y-4">
      <section className="mx-4 font-medium text-2xl lg:text-3xl mt-4 mb-8 lg:mb-10">
        <span className="italic">
          “A goal without a timeline is just a dream.”
        </span>{" "}
        — Robert Herjavec
      </section>

      <div className="flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-10">
        <div className="flex lg:grid grid-cols-2 gap-4 max-w-sm lg:max-w-md">
          <div className="flex lg:grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="hidden lg:grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        <Separator
          orientation="vertical"
          className="hidden lg:block h-[520px] bg-slate-800"
        />

        <Card className="w-[350px] bg-transparent border-slate-700 text-white">
          <CardHeader>
            <CardTitle className="text-2xl lg:text-3xl">About Me</CardTitle>
          </CardHeader>
          <CardContent className="text-sm lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed
            suscipit sapien. Morbi dui purus, porttitor non rhoncus eget,
            hendrerit tempus enim. Nullam vehicula lectus neque, non mattis nunc
            dapibus quis. Curabitur tortor tortor, dignissim sed nibh a, iaculis
            pulvinar est. Integer risus lorem, semper non ipsum id, egestas
            luctus eros. In et pretium odio. Suspendisse imperdiet scelerisque
            nisl luctus sollicitudin. Integer erat dui, pulvinar vitae elit et,
            dictum elementum justo. Ut elementum, libero vitae semper aliquet,
            odio nisi auctor nunc, in pharetra erat magna a leo. Vestibulum
            accumsan nec mi et elementum. Duis finibus, purus ut auctor
            tincidunt, est.
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutPage;
