import { Icons } from "@/components/icons";
import { House, Library } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { C } from "@/components/ui/svgs/c";
import { Linux } from "@/components/ui/svgs/linux";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Astro } from "@/components/ui/svgs/astro";
import { Saama } from "@/components/ui/svgs/saama";
import { Infosys } from "@/components/ui/svgs/infosys";
import { Kanchilug } from "@/components/ui/svgs/kanchilug";
import { PythonBootcamps } from "@/components/ui/svgs/pythonBootcamps";
import { Gannet } from "@/components/ui/svgs/gannet";
import { Svce } from "@/components/ui/svgs/svce";
import { Sskv } from "@/components/ui/svgs/sskv";

export const DATA = {
  name: "Parameshwar Arunachalam - Software Engineer",
  initials: "PA",
  url: "https://parameshwar-a.github.io",
  location: "Kanchipuram, IN",
  locationLink: "https://maps.app.goo.gl/UBKd5R9WzBjLGcqR8",
  description:
    "An engineer who loves to solve problems and create holistic solutions—not just apps. A naturally curious person and an avid reader.",
  summary:
    "My journey to becoming a software engineer is a bit unconventional. I graduated with a degree in Automobile Engineering, fueled by a teenage fascination with automobiles. During my studies, I discovered my true passion wasn't just automobiles, but the underlying mechanics of complex problems and the elegant ways people solve them. My exposure to computer simulation in college prompted me to diversify my skills, leading me to learn programming. This opened doors to a whole new world of problem-solving opportunities. After 4+ years of industry experience across various domains, I now thrive as a software engineer, building solutions for everyday problems.",
  avatarUrl: "/picofme.png",
  ogImage: "/og_image.png",
  sections: {
    about: { order: 1, enabled: true, heading: "About" },
    work: { order: 2, enabled: true, heading: "Work Experience", presentLabel: "Present" },
    education: { order: 3, enabled: true, heading: "Education" },
    skills: { order: 4, enabled: true, heading: "Skills" },
    projects: {
      order: 5, enabled: true,
      label: "My Projects",
      heading: "Check out my latest work",
      text: "I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.",
    },
    hackathons: {
      order: 7, enabled: false,
      label: "Hackathons",
      heading: "I like building things",
      text: "During my time in university, I attended {count}+ hackathons. People from around the country would come together and build incredible things in 2-3 days. It was eye-opening to see the endless possibilities brought to life by a group of motivated and passionate individuals.",
    },
    photos: {
      order: 6, enabled: true,
      heading: "Recent Books I Have Read",
    },
    contact: {
      order: 8, enabled: true,
      label: "Contact",
      heading: "Get in Touch",
      text: "Want to chat? Just ping me on LinkedIn or any other social platform and I'll get back to you!",
    },
  },
  photos: [
    { src: "/photos/period.jpg", alt: "Book Cover of Its about the bloody time Period" },
    { src: "/photos/ragasiyam.jpg", alt: "Book Cover of Ragasiyam Paraman Ragasiyam" },
    { src: "/photos/sameasever.jpg", alt: "Book Cover of Same as Ever" },
    { src: "/photos/kalki.jpg", alt: "Book Cover of PoiMan Karadu" },
  ],
  skills: [
    { name: "Python", icon: Python },
    { name: "Linux", icon: Linux },
    { name: "Lang", icon: C },
    { name: "Postgres", icon: Postgresql },
    { name: "Docker", icon: Docker },
  ],
  navbar: [
    { href: "/", icon: House, label: "Home" },
    { href: "/blog", icon: Library, label: "Blog" },
  ],
  contact: {
    email: "parameshwar273@gmail.com",
    tel: "+91 9629897052",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/parameshwar-A",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/parameshwar273/",
        icon: Icons.linkedin,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@parameshwararunachalam7897",
        icon: Icons.youtube, navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:parameshwar273@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Saama Technologies",
      href: "https://www.saama.com/",
      badges: ["Software Engineer II"],
      location: "Chennai, IN",
      title: "Software Engineer L2",
      icon: <Saama />,
      logoUrl: undefined,
      start: "February 2025",
      end: undefined,
      description:
        "Actively developing software to accommodate AI and ML models created by my colleagues, scaling solutions from initial proof-of-concept to full enterprise applications.",
    },
    {
      company: "Infosys",
      href: "https://www.infosys.com/",
      badges: [],
      location: "Chennai, IN",
      title: "Technology Analyst",
      icon: <Infosys />,
      logoUrl: undefined,
      start: "August 2021",
      end: "February 2025",
      description:
        "Learned the fundamentals of financial markets and enterprise software solutions. Helped construct regulatory reports by programming in a secure, in-house language designed to keep reporting stable and scalable across the organization.",
    },
    {
      company: "KanchiLUG",
      href: "https://kanchilug.wordpress.com/",
      badges: [],
      location: "Kanchipuram, IN",
      title: "Community Co-Ordinator",
      icon: <Kanchilug />,
      logoUrl: undefined,
      start: "Mar 2022",
      end: "Dec 2024",
      description:
        "While searching for a local Linux user community, I found one in my hometown that had been largely inactive. After connecting with the founder, I volunteered as a community coordinator. Over two years, I helped transform the group from silent to soaring, making it one of the most active Linux communities in Tamil Nadu. We conducted 50+ tech talks, hosted 2 conferences, and ran numerous YouTube live streams about open-source technologies.",
    },
    {
      company: "Python Bootcamps",
      href: "",
      badges: [],
      location: "Kanchipuram, IN",
      title: "Python Instructor",
      icon: <PythonBootcamps />,
      logoUrl: undefined,
      start: "Oct 2022",
      end: undefined,
      description:
        "Coming from a non-CS background, I had to learn the very basics of computers from scratch. That foundational learning paved the way for me to become a better programmer. I now share the knowledge I've gained by teaching others, especially those transitioning from non-traditional backgrounds.",
    },
    {
      company: "Gannet Engineering",
      href: "https://gannetsolutions.com/",
      badges: [],
      location: "Bengaluru, IN",
      title: "Automotive Engineering Intern",
      icon: <Gannet />,
      logoUrl: undefined,
      start: "Mar 2018",
      end: "Jan 2021",
      description:
        "Created computerized simulation tests to study vehicle dynamics, assisting in documenting the results and converting them into educational courses.",
    },
  ],
  education: [
    {
      school: "SVCE Chennai",
      href: "https://www.svce.ac.in/",
      degree: "Bachelor of Engineering: Automobile",
      icon: <Svce />,
      logoUrl: undefined,
      start: "2017",
      end: "2021",
    },
    {
      school: "S.S.K.V Boys, Kanchipuram",
      href: "https://sskvkanchi.org/",
      degree: "Higher Secondary",
      icon: <Sskv />,
      logoUrl: undefined,
      start: "2017",
      end: "2016",
    },
  ],
  projects: [
    {
      title: "DocxToX",
      href: "https://github.com/parameshwar-A/docxtox",
      dates: "July 2026",
      active: true,
      description:
        "Reading .docx files can burn through tokens even when just summarizing the contents, let alone extracting them. I faced this problem often, which led me to discover that .docx files are essentially ZIP archives of XML files. This structured format inspired me to build a custom parser from scratch without relying on external documentation. This parser extracts the full content without making any LLM calls and generates the output as JSON, which can then be fed into an LLM for further tasks. This eliminates token wastage when reading .docx files.",
      technologies: [
        "Python",
        "Xml",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/parameshwar-A/docxtox",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/docxtox.png",
      video: "",
    },
    {
      title: "Tolkapy",
      href: "https://gitlab.com/kachilug/tolkapy",
      dates: "March 2022 - Present",
      active: true,
      description:
        "Tolkapy was created to digitize the Tamil grammar rules devised by Tholkappiyar. This project serves as a strong foundation for generating grammatically correct Tamil text, building spell checkers, and creating other language tools. What started as a project by a Tamil professor who attended my Python bootcamp has now grown into an open-source collaboration involving a dedicated group of enthusiasts.",
      technologies: [
        "Python",
      ],
      links: [
        {
          type: "Website",
          href: "https://pypi.org/project/tolkapy/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://gitlab.com/kanchilug/tolkapy",
          icon: <Icons.github className="size-3" />,
        },

      ],
      image: "/tolkapy.png",
      video: "",
    },
    {
      title: "XLReader",
      href: "https://gitlab.com/parameshwar_a/xlreader_v1",
      dates: "March 2024 - July 2024",
      active: false,
      description:
        "XLReader is a custom-built mobile app designed to read and query data from XLSX and CSV files. I specifically developed it for a family member who needed a more efficient, real-time alternative to Google Sheets for mobile operations.",
      technologies: [
        "Python",
        "flet",
      ],
      links: [
        {
          type: "Source",
          href: "https://gitlab.com/parameshwar_a/xlreader_v1",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/xlreader.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "",
      dates: "",
      location: "",
      description: "",
      image: "",
      win: "",
      links: [],
    },
  ],
} as const;
