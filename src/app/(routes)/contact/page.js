import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const ContactPage = () => {
  return (
    <section className="mx-2">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">
          Contact Me
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-400 sm:text-xl">
          Have a project in mind? Let’s talk! I’m here to help turn your ideas
          into reality. Fill out the form below, and let’s get started on
          bringing your vision to life.
        </p>
        <form action="#" className="space-y-8">
          <div>
            <Label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Your email
            </Label>
            <Input
              type="email"
              id="email"
              className="shadow-sm border text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
              placeholder="name@abc.com"
              required
            />
          </div>

          <div>
            <Label
              for="subject"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Subject
            </Label>
            <Input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm rounded-lg border shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
              placeholder="Let us know how we can help you"
              required
            />
          </div>

          <div className="sm:col-span-2">
            <Label
              for="message"
              className="block mb-2 text-sm font-medium text-gray-400"
            >
              Your message
            </Label>
            <Textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm rounded-lg shadow-sm border focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
              placeholder="Leave a comment..."
            ></Textarea>
          </div>

          <Button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-slate-700 rounded-lg sm:w-fit focus:ring-4 focus:outline-none focus:ring-primary-300 bg-white hover:bg-white/80 focus:ring-primary-800"
          >
            Send message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
