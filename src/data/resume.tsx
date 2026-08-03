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
    "An Engineer who loves to solve problems and create solutions not just apps, curious being and loves reading books!",
  summary:
    "Quite a different story for a software engineer, I gradudated as an Automobile Engineer since I was mad about them in my early teens and loved every second learning about them. Then I came to discover it is not just automobiles, I loved the problems and the complex machines which are built around simpler and fundamental concepts. I loved that intriguing designs and the way people solved problems. Explored computer simulation in college days, I explored and diversified my studies to problem solving and learnt a programming language. which changed a lot and opened a big door of opportunities to solve whole lot of problems. After 4+ year of industry experience here I am as a software engineer who worked on cross domains and solving everyday problems!",
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
      text: "Want to chat? Just ping me in linkedin or any other socials will reply to you",
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
        "Actively developing software solutions to accomodate the AI and ML solutions created by my amazing collagues. We take the solutions from POC to scalling enterprise application",
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
        "Learnt the fundamentals of actual financial markets and software solutions available in that arena and helped in constructing regulatory reports by programming an in house language securely and safely designed to keep the reporting stable and scallable within the organization",
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
        "While I was searching for a Linux user community, I found one in my hometown but they are not alive and there were no activies conducted. Then I connected with the group founder and he was happy that I accepted to volunteer and be a community co-ordinator. I moved the group for slient to soaring and one of the most active linux community in TamilNadu within 2 years. We conducted 50+ tech talks, 2 conferences, lot of youtube lives about open source tech",
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
        "I came from a non-CS background so I had to learn the very basics of computers to do a lot of stuff. Those learning paved a way for me to become a better programmer. So I share the knowledge i gained to others especially who are not from CS background.",
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
        "Created computerized simulation tests to study the vehicle dynamics and assisted to document them and convert them into educative courses.",
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
        "Reading docx files can burn through your tokens even to just summary the contents. what about extracting them, that would require a lot more! I faced this problem a lot so I started reading about them and found out that docx are nothing but a zip of xml files. That gave me hope since xml are structured these files will be structured I just have to take a lot of docx files and work my way up to develop a parser since I won't get any docs for these kind of exploration. So I did my own and created this parser, No LLM Calls this extracts full content. The parsed output is generated as json which you can give to llm to proceed with other tasks. So no more wastage of tokens for just reading the docX files",
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
        "Tolkapy is created to digitize the tamil grammar rules devised by tholkappiyar. This project serves as a strong foundation to generate tamil text with proper grammar, base for spell checkers and other tamil language tools. Not just me a group of open source enthusiasts are now working on this. Started as a project by a tamil professor who attended a python bootcamp I taught. we ended up making it open source and collaborating with others",
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
        "XLReader is a custom built mobile app to read and query data from Xlsx/CSV files I specifically designed for a real time usage for a family member who actively uses and needed a better app than google sheets to operate in mobile.",
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
