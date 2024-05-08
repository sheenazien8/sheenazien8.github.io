import Image from "next/image";
import { Inter } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconLookup } from "@fortawesome/fontawesome-svg-core";
import { classNames } from "@/utils/helper";
import { useState } from "react";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  let experiences = [
    {
      company: 'Resync Digital',
      role: 'Full stack Developer',
      description: 'Design and develop end-to-end inventory management systems for retail companies',
      stay: '(2020-2024)',
    },
    {
      company: 'Resync Digital',
      role: 'Full stack Developer',
      description: 'Design and develop end-to-end inventory management systems for retail companies',
      stay: '(2020-2024)',
    },
    {
      company: 'Resync Digital',
      role: 'Full stack Developer',
      description: 'Design and develop end-to-end inventory management systems for retail companies',
      stay: '(2020-2024)',
    },
    {
      company: 'Resync Digital',
      role: 'Full stack Developer',
      description: 'Design and develop end-to-end inventory management systems for retail companies',
      stay: '(2020-2024)',
    },
  ];

  let skills = ['PHP', 'Javascript', 'Go Lang', 'CSS'];

  let socials: IconLookup[] = [
    {
      prefix: 'fab',
      iconName: 'github',
    },
    {
      prefix: 'fab',
      iconName: 'facebook',
    },
    {
      prefix: 'fab',
      iconName: 'instagram',
    },
  ];

  const [projects, setProjects] = useState([
    {
      id: 'lakasir',
      name: 'Lakasir',
      role: 'Full-stack Developer',
      open: true,
      bgColor: 'bg-primary',
      assets: '../assets/simpelbudget.com.png',
    },
    {
      id: 'simpel-budget',
      name: 'Simpel Budget',
      role: 'Full-stack Developer',
      open: false,
      bgColor: 'bg-[#4F46E5]',
      assets: '../assets/simpelbudget.com.png',
    },
    {
      id: 'youtube-downloader',
      name: 'Youtubte Downloader',
      role: 'Backend Developer',
      open: false,
      bgColor: 'bg-[#4F46E5]',
      assets: '../assets/simpelbudget.com.png',
    },
  ]);

  function hover(id: string) {
    const updatedProjects = projects.map((project) => {
      if (project.id === id) {
        return { ...project, open: true };
      } else {
        return { ...project, open: false };
      }
    });
    setProjects(updatedProjects);
  }

  return (
    <main>
      <div className="container mx-auto grid grid-cols-1 gap-y-20 max-w-7xl">
        <div className="" id="header">
          <nav className="flex justify-between items-center h-20">
            <div className="flex items-center gap-x-10 text-gray-1">
              <a className="font-bold text-2xl" href="#">Sheenazien</a>
              <a className="text-sm relative after:content-[''] after:block after:-z-10 after:w-0 after:h-full after:rounded-lg after:absolute after:left-0 after:top-0 after:transition-all after:ease-in-out duration-150 after:bg-primary hover:after:w-full hover:text-white py-1 px-2"
                href="#about" id="about">About Me</a>
              <a className="text-sm relative after:content-[''] after:block after:-z-10 after:w-0 after:h-full after:rounded-lg after:absolute after:left-0 after:top-0 after:transition-all after:ease-in-out duration-150 after:bg-primary hover:after:w-full hover:text-white py-1 px-2"
                href="#project" id="project">Project</a>
              <a className="text-sm relative after:content-[''] after:block after:-z-10 after:w-0 after:h-full after:rounded-lg after:absolute after:left-0 after:top-0 after:transition-all after:ease-in-out duration-150 after:bg-primary hover:after:w-full hover:text-white py-1 px-2"
                href="#article" id="article">Article</a>
              <a className="text-sm relative after:content-[''] after:block after:-z-10 after:w-0 after:h-full after:rounded-lg after:absolute after:left-0 after:top-0 after:transition-all after:ease-in-out duration-150 after:bg-primary hover:after:w-full hover:text-white py-1 px-2"
                href="#work-experience" id="work-experience">Work Experience</a>
            </div>
            <div>
              <a href="#"
                className="py-3 px-8 border border-black rounded-3xl transition-all hover:bg-primary hover:text-white hover:border-primary">Sheenazien08@gmail.com</a>
            </div>
          </nav>
          <div className="">
            <p className="text-gray-1 text-[210px] leading-none my-10 font-bold text-center">SHEENAZIEN</p>
            <div className="bg-gradient-to-tr from-black-trans to-primary h-[570px] rounded-2xl grid grid-cols-3">
              <div className="flex text-white mt-auto gap-x-8 px-8 py-10">
                <div className="w-0.5 bg-gray-3"></div>
                <p className="text-3xl font-bold w-4/5 leading-snug">FULL-STACK PROGRAMMER <br /> BASED IN INDONESIA</p>
              </div>
              <div className="col-span-2 flex justify-end">
                <div className="w-[495px] h-fit flex flex-col relative" >
                  <Image src="/assets/img.jpg" alt="img" className="inset-0 object-cover rounded-r-2xl" height={570} width={100} quality={100} style={{ width: '100%', height: 570 }} />
                  <div className="w-[500px] flex justify-between absolute bottom-16 px-10">
                    <button
                      className="font-medium py-3 px-6 border border-primary text-primary rounded-full transition-all hover:bg-primary hover:text-white hover:scale-110">Download
                      CV</button>
                    <div className="">
                      {socials.map((social, index) =>
                        <button
                          key={index}
                          className="rounded-full bg-gradient-to-tl from-black-trans to-primary h-12 w-12 text-white">
                          <FontAwesomeIcon icon={social} />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <p className="text-7xl font-bold text-gray-1">About Me</p>
          <div>
            <p className="text-gray-3">
              I am a seasoned software engineer with a strong foundation in backend development, specializing in the Laravel
              framework. My programming journey started in 2018, and since then, I have continuously evolved and expanded my
              skill set to encompass a wide range of technologies and tools. <br /> <br />

              In addition to Laravel, I have in-depth knowledge and experience in Go, Lua, and Dart/Flutter, allowing me to
              develop robust and scalable solutions across different platforms. My expertise extends to front-end
              development,
              where I am proficient in using Tailwind CSS and Bootstrap to create sleek and responsive user interfaces.
              <br />
              <br />

              Furthermore, I am well-versed in JavaScript frameworks such as Next.js/React.js and Vue.js, enabling me to
              build
              dynamic and interactive web applications. My diverse skill set and hands-on experience in backend and frontend
              technologies empower me to tackle complex challenges and deliver high-quality software solutions. <br />
              <br />
            </p>
            <div className="flex text-gray-3 gap-x-1.5">
              {skills.map((skill) => <div key={skill} className="px-10 py-1 bg-gray-5 rounded-full">{skill}</div>)}
            </div>
          </div>
        </div>
        <div className="space-y-12">
          <div className="grid grid-cols-2 justify-between">
            <div>
              <p className="text-7xl font-bold text-gray-1">SELECTED PROJECT</p>
              <p className="text-gray-3">Determined to continue developing my skills in the latest technology</p>
            </div>
            <a href="/project"
              className="justify-self-end mt-auto text-gray-3 relative after:block after:content-[''] after:h-0.5 after:w-full after:bg-gray-3">See
              All<i className="ml-2 fa-solid fa-arrow-right"></i></a>
          </div>
          <div className="flex gap-x-3">
            {projects.map((project) =>
              <div
                key={project.id}
                className={classNames(
                  "h-[680px] w-1/4 rounded-xl cursor-pointer transition-all ease duration-1000 px-12 relative overflow-hidden",
                  project.open ? 'w-11/12' : '',
                  project.bgColor
                )}
                onMouseEnter={() => hover(project.id)}
              >
                <div className="flex justify-between py-5 px-8 bg-gray-1 rounded-2xl absolute top-3/4 w-[680px] transition-all"
                  x-show="project.open" x-transition>
                  <div className="text-gray-6">
                    <p className="text-3xl font-bold">{project.name}</p>
                    <p className="text-xl">{project.role}</p>
                  </div>
                  <div
                    className="bg-gradient-to-tr from-black-trans to-primary rounded-full h-16 w-16 flex justify-items-center items-center">
                    <svg width="46" height="46" viewBox="0 0 34 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clipRule="evenodd"
                        d="M30.2725 23.7933C30.2654 23.9946 30.299 24.1953 30.3711 24.3834C30.4432 24.5715 30.5525 24.7431 30.6924 24.888C30.8323 25.0329 31 25.1482 31.1854 25.2269C31.3708 25.3057 31.5702 25.3462 31.7716 25.3462C31.973 25.3462 32.1724 25.3057 32.3578 25.2269C32.5433 25.1482 32.7109 25.0329 32.8508 24.888C32.9907 24.7431 33.1 24.5715 33.1721 24.3834C33.2443 24.1953 33.2778 23.9946 33.2707 23.7933V14.6009L33.2721 13.1004L31.773 13.1004L22.5806 13.1004C22.1874 13.1071 21.8125 13.2679 21.5367 13.5483C21.2608 13.8287 21.1062 14.2062 21.106 14.5995C21.1058 14.9928 21.2601 15.3705 21.5357 15.6511C21.8112 15.9318 22.186 16.093 22.5792 16.1L28.1512 16.1L13.4731 30.7781C13.1918 31.0594 13.0338 31.4409 13.0338 31.8388C13.0338 32.2366 13.1918 32.6181 13.4731 32.8994C13.7544 33.1807 14.1359 33.3388 14.5338 33.3388C14.9316 33.3388 15.3131 33.1807 15.5944 32.8994L30.2725 18.2213L30.2725 23.7933Z"
                        fill="#F2F2F2" />
                    </svg>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div>
          <p className="font-bold text-6xl text-gray-1 text-center">WORK <br /> EXPERIENCE</p>
          <div className="space-y-12 mt-10">
            {experiences.map((experience, index) =>
              <div key={index}>
                <div className="grid grid-cols-2">
                  <div>
                    <div className="flex gap-x-3 justify-items-start items-center">
                      <div className="h-3 w-3 border border-gray-1 rounded-full">
                      </div>
                      <div>
                        <p className="text-3xl font-medium text-gray-1">{experience.role}</p>
                        <p className="text-xl text-gray-3">{experience.company}</p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="text-gray-3">{experience.description}</div>
                    <div className="font-medium justify-self-end">{experience.stay}</div>
                  </div>
                </div>
                <div className="h-0.5 w-full bg-gray-4 mt-20"></div>
              </div>
            )}
          </div>
        </div>
        <div className="space-y-12">
          <div className="grid grid-cols-2 justify-between">
            <div>
              <p className="text-7xl font-bold text-gray-1">ARTICLE</p>
            </div>
            <a href="/project"
              className="justify-self-end mt-auto text-gray-3 relative after:block after:content-[''] after:h-0.5 after:w-full after:bg-gray-3">Read
              More<i className="ml-2 fa-solid fa-arrow-right"></i></a>
          </div>
          <div className="grid grid-cols-2 gap-x-8">
            <div className="space-y-8">
              <div className="grid grid-cols-2">
                <div className="flex gap-x-3">
                  <Image src="/assets/image 4.png" alt="article-1" className="rounded-lg" height={44} width={100} quality={100} style={{ width: '100%' }} />
                  <p className="text-gray-3">Mar 15, 2024</p>
                </div>
                <p className="text-gray-1 font-medium text-2xl">Revealing the Vital Role of Full Stack Programmers in the
                  Digital
                  Era</p>
              </div>
              <div className="grid grid-cols-2">
                <div className="flex gap-x-3">
                  <Image src="/assets/image 4.png" alt="article-1" className="rounded-lg" height={44} width={100} quality={100} style={{ width: '100%' }} />
                  <p className="text-gray-3">Mar 15, 2024</p>
                </div>
                <p className="text-gray-1 font-medium text-2xl">Revealing the Vital Role of Full Stack Programmers in the
                  Digital
                  Era</p>
              </div>
            </div>
            <div className="space-y-5">
              <Image src="/assets/image 6.png" alt="article-1" className="rounded-lg" height={100} width={100} quality={100} style={{ width: '100%' }} />
              <div className="flex gap-x-3">
                <p className="text-gray-3">Mar 15, 2024</p>
                <p className="text-gray-1 font-medium text-2xl">Revealing the Vital Role of Full Stack Programmers in the
                  Digital
                  Era</p>
              </div>
            </div>
          </div>
        </div>

      </div>
      <footer className="bg-gray-1 mt-14">
        <div className="flex justify-center items-center py-20">
          <div className="w-1/2">
            <p className="text-gray-3 text-6xl text-center font-bold"><span className="text-gray-5">CONTACT ME NOW </span>FOR
              FURTHER
              DISCUSSION!</p>
            <p className="text-gray-3 text-xl text-center mb-10 mt-2.5">
              I'm ready to help you make your project a reality by combining <br /> attractive design with powerful
              functionality.
            </p>
            <div className="flex justify-center">
              <a href="#"
                className="py-3 px-8 border border-gray-5 text-gray-5 rounded-3xl transition-all hover:bg-primary hover:text-white hover:border-primary">Sheenazien08@gmail.com</a>
            </div>

          </div>
        </div>
        <div className="flex justify-center pb-5">
          {socials.map((social) =>
            <button className="rounded-full bg-gray-2 h-12 w-12 text-white">
              <FontAwesomeIcon icon={social} />
            </button>
          )}
        </div>
      </footer>


    </main >
  );
}
