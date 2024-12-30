import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import profilePic from "@/assets/profile-picture.jpg";
import Image from "next/image";

const socialMediaLinks = [
  {
    href: "https://www.linkedin.com/",
    title: "LinkedIn",
    icon: <FontAwesomeIcon icon={faLinkedinIn} />,
  },
  {
    href: "https://www.github.com/",
    title: "GitHub",
    icon: <FontAwesomeIcon icon={faGithub} />,
  },
  {
    href: "https://www.instagram.com/",
    title: "Instagram",
    icon: <FontAwesomeIcon icon={faInstagram} />,
  },
  {
    href: "https://www.facebook.com/",
    title: "Facebook",
    icon: <FontAwesomeIcon icon={faFacebook} />,
  },
  {
    href: "https://www.x.com/",
    title: "X (Twitter)",
    icon: <FontAwesomeIcon icon={faXTwitter} />,
  },
];

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col lg:flex-row justify-center items-center space-y-5 lg:space-x-12 lg:space-y-0">
      <section className="flex flex-col space-y-4 items-start">
        <span className="text-5xl lg:text-6xl font-semibold -mx-2">Yash Kansara</span>

        <span className="text-2xl lg:text-3xl font-light">Product Manager</span>

        <div className="flex flex-row justify-center items-center space-x-4 text-muted-foreground text-lg">
          {socialMediaLinks.map((socialMedia, id) => (
            <Link
              key={id}
              href={socialMedia.href}
              target="_blank"
              rel="noopener noreferrer"
              title={socialMedia.title}
            >
              {socialMedia.icon}
            </Link>
          ))}
        </div>

        <div className="flex flex-col text-sm text-muted-foreground font-light uppercase">
          <span>Los Angeles, California</span>
          <span>Resume</span>
        </div>
      </section>

      <Separator orientation="vertical" className="hidden lg:block h-[520px] bg-slate-800" />

      <section className="w-[300px] h-[400px] lg:w-[330px] lg:h-[450px] rounded-xl overflow-hidden">
        <Image src={profilePic} alt="profile" className="h-full w-full object-cover rounded-xl transition-transform duration-500 ease-in-out hover:scale-105" />
      </section>
    </div>
  );
}
