import Image from "next/image";
import { classNames } from "@/utils/helper";
import { useEffect, useState } from "react";
import axios from "axios";
import { InferGetServerSidePropsType } from "next";
import Link from "next/link";
import { Experience, Post, Profile, Project } from "@/types/type";
import Head from "next/head";

type Welcome = {
  profile: Profile;
  projects: Project[];
  articles: Post[];
  experiences: Experience[];
}

export async function getServerSideProps() {
  const res = await axios.get<Welcome>(process.env.API_HOST + '/' + 'welcome', {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
  });

  const projects = res.data.projects.map((project, index) => {
    if (index == 0) project.open = true;
    return project
  })

  res.data.projects = projects;

  const welcome: Welcome = res.data;

  return { props: { welcome } };
}

export default function Home({ welcome }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  let experiences = welcome?.experiences;

  let skills = welcome?.profile?.skills;

  const [projects, setProjects] = useState(welcome?.projects);

  function mouseEnter(id: number) {
    const updatedProjects = projects?.map((project) => {
      if (project.id === id) {
        return { ...project, open: true };
      } else {
        return { ...project, open: false };
      }
    });
    setProjects(updatedProjects);
  }

  const navs = [
    {
      title: 'About Me',
      href: '#about',
      id: 'about',
      target_element_id: 'about_me_section',
    },
    {
      title: 'Project',
      href: '#project',
      id: 'project',
      target_element_id: 'project_section',
    },
    {
      title: 'Work Experience',
      href: '#work-experience',
      id: '#work-experience',
      target_element_id: 'work_experience_section',
    },
  ];

  const [openNav, setOpenNav] = useState(false);

  function scrollTo(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start', // or 'end', 'center', 'nearest'
        inline: 'nearest' // or 'start', 'end', 'center'
      });
    }
  }

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Head>
        <meta property="og:image" content={welcome.profile.profile_picture ? welcome.profile.profile_picture_url : "/assets/img.jpg"} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <div className="container mx-auto grid grid-cols-1 gap-y-20 md:max-w-7xl w-11/12">
        <div className="" id="header">
          <div className={classNames(
            "bg-white z-10",
            isScrolled ? 'fixed left-0 w-full bg-white shadow-md z-10 xl:px-[5rem] md:px-[3rem] px-[1rem] transition-all' : ''
          )}>
            {/* desktop nav */}
            <nav className={classNames(
              "sm:flex hidden justify-between items-center h-20 transition-all duration-200",
              // isScrolled ? 'fixed inset-0 w-full bg-white shadow-md z-10 xl:px-[5rem] md:px-[3rem] px-[1rem]' : ''
            )}>
              <div className="flex items-center gap-x-10 text-gray-1">
                <a className="font-bold text-2xl lg:block hidden" href="#">Sheenazien</a>
                {navs.map((nav, index) =>
                  <button
                    key={index}
                    className="text-sm relative after:content-[''] after:block after:-z-10 after:w-0 after:h-full after:rounded-lg after:absolute after:left-0 after:top-0 after:transition-all after:ease-in-out duration-150 after:bg-primary hover:after:w-full hover:text-white py-1 px-2"
                    onClick={() => scrollTo(nav.target_element_id)}
                    id={nav.id}>{nav.title}
                  </button>
                )}
              </div>
              <div>
                <a href="mailto:sheenazien08gmail.com"
                  className="py-3 px-8 border border-black rounded-3xl transition-all hover:bg-primary hover:text-white hover:border-primary">sheenazien08@gmail.com</a>
              </div>
            </nav>
            {/* mobile nav */}
            <nav className={classNames(
              "md:hidden flex justify-between items-center h-14 transition-all duration-200",
              isScrolled ? 'fixed top-0 left-0 w-full bg-white shadow-md z-10 px-4' : ''

            )}>
              <button onClick={() => setOpenNav(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                </svg>
              </button>
              <div>
                <a href="mailto:sheenazien08gmail.com"
                  className="py-2 px-4 border border-black rounded-3xl transition-all hover:bg-primary hover:text-white hover:border-primary">sheenazien08@gmail.com</a>
              </div>
            </nav>
          </div>
          <div className={classNames(
            "fixed left-0 top-0 z-10 w-full bg-primary h-full md:hidden transition-all duration-700",
            openNav ? 'translate-x-0' : '-translate-x-full'
          )}>
            <button
              className={classNames(
                "right-0 top-0",
                openNav ? 'absolute transition-all duration-700 delay-1000' : 'hidden'
              )}
              onClick={() => setOpenNav(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 text-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>

            </button>
            <div className="flex justify-center items-center h-full text-gray-6 text-4xl">
              <ul className="space-y-10">
                {navs.map((nav, index) =>
                  <li onClick={() => {
                    scrollTo(nav.target_element_id);
                    setOpenNav(false);
                  }} key={index}><button>{nav.title}</button></li>
                )}
              </ul>
            </div>
          </div>
          <div className="">
            <p className="text-gray-1 text-[14.5vw] xl:text-[210px] leading-none my-5 md:my-10 font-bold text-center">{welcome?.profile?.nickname}</p>
            <div className="bg-primary h-[570px] rounded-2xl md:grid md:grid-cols-3">
              <div className="md:flex hidden text-white mt-auto gap-x-8 px-8 py-10">
                <div className="w-0.5 bg-gray-5"></div>
                <p className="text-3xl font-bold w-4/5 leading-snug">{welcome?.profile?.title}</p>
              </div>
              <div className="md:col-span-2 md:flex md:justify-end">
                <div className="lg:w-[495px] h-fit flex flex-col relative" >
                  <Image src={welcome.profile.profile_picture ? welcome.profile.profile_picture_url : "/assets/img.jpg"}
                    alt="img"
                    className="inset-0 object-cover rounded-2xl md:rounded-l-none md:rounded-r-2xl"
                    height={570}
                    width={100}
                    quality={100}
                    style={{ width: 'auto', height: 570 }} />
                  <div className="lg:w-[500px] w-full absolute lg:bottom-10 bottom-5 lg:px-8">
                    <p className="text-3xl font-bold lg:w-4/5 leading-snug block md:hidden px-6 mb-4 text-gray-6">{welcome?.profile?.title}</p>
                    {/* tablet > */}
                    <div className="md:flex hidden justify-between">
                      <a
                        target="_blank"
                        href={welcome.profile.url_resume}
                        className="font-medium lg:text-lg py-3 px-6 border border-gray-5 text-gray-5 rounded-full transition-all hover:bg-primary hover:text-white hover:scale-110 hover:border-primary">Download
                        CV</a>
                      <div className="flex">
                        <a
                          target="_blank"
                          href={welcome?.profile?.socials_button?.github}
                          className="rounded-full h-12 w-12 text-white">
                          <Image src="/assets/github.svg" alt="" height={40} width={40} />
                        </a>
                        <a
                          target="_blank"
                          href={welcome?.profile?.socials_button?.facebook}
                          className="rounded-full h-12 w-12 text-white">
                          <Image src="/assets/facebook.svg" alt="" height={40} width={40} />
                        </a>
                        <a
                          target="_blank"
                          href={welcome?.profile?.socials_button?.instagram}
                          className="rounded-full h-12 w-12 text-white">
                          <Image src="/assets/instagram.svg" alt="" height={40} width={40} />
                        </a>
                      </div>
                    </div>
                    {/* mobile */}
                    <div className="flex md:hidden justify-between px-6">
                      <a
                        target="_blank"
                        href={welcome.profile.url_resume}
                        className="font-medium lg:text-lg py-3 px-6 border border-gray-5 text-gray-5 rounded-full transition-all hover:bg-primary hover:text-white hover:scale-110 hover:border-primary">Download
                        CV</a>
                      <div className="flex">
                        <a
                          target="_blank"
                          href={welcome?.profile?.socials_button?.github}
                          className="rounded-full h-12 w-12 text-white">
                          <Image src="/assets/github.svg" alt="" height={40} width={40} />
                        </a>
                        <a
                          target="_blank"
                          href={welcome?.profile?.socials_button?.facebook}
                          className="rounded-full h-12 w-12 text-white">
                          <Image src="/assets/facebook.svg" alt="" height={40} width={40} />
                        </a>
                        <a
                          target="_blank"
                          href={welcome?.profile?.socials_button?.instagram}
                          className="rounded-full h-12 w-12 text-white">
                          <Image src="/assets/instagram.svg" alt="" height={40} width={40} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:grid md:grid-cols-2" id="about_me_section">
          <p className="md:text-7xl text-4xl font-bold text-gray-1 mb-5">About Me</p>
          <div>
            <div className="text-gray-3" dangerouslySetInnerHTML={{ __html: welcome?.profile?.about_me }} ></div>
            <div className="flex text-gray-3 gap-1.5 lg:flex-wrap mt-4 overflow-x-scroll md:overflow-x-hidden">
              {skills?.map((skill) => <div key={skill} className="px-10 py-1 bg-gray-5 rounded-full">{skill}</div>)}
            </div>
          </div>
        </div>
        <div className="md:space-y-12 space-y-6" id="project_section">
          <div className="md:grid md:grid-cols-2 md:justify-between">
            <div className="w-4/5">
              <p className="md:text-7xl text-4xl font-bold text-gray-1 mb-5">SELECTED <br /> PROJECT</p>
              <p className="text-gray-3">Determined to continue developing my skills in the latest technology</p>
            </div>
            {/*
            <a href="/project"
              className="justify-self-end mt-auto text-gray-3 relative after:block after:content-[''] after:h-0.5 after:w-full after:bg-gray-3">See
              All<i className="ml-2 fa-solid fa-arrow-right"></i></a>
            */}
          </div>
          <div className="flex gap-x-3 overflow-x-scroll lg:overflow-x-hidden">
            {projects?.map((project, index) =>
              <div
                key={index}
                className={classNames(
                  "h-[450px] min-w-[350px] md:min-w-[650px] lg:min-w-5 lg:h-[680px] w-1/4 rounded-xl cursor-pointer md:transition-all md:ease md:duration-500 relative md:overflow-hidden border border-primary",
                  project.open ? 'lg:w-11/12' : '',
                  project.bgColor ?? 'bg-primary',
                )}
                onMouseEnter={() => mouseEnter(project.id)}
              >
                <Image src={project.header_image_url} alt={project.header_image} fill className="object-cover rounded-xl" />
                <a
                  target="_blank"
                  href={project.url}
                >
                  {/* mobile */}
                  <div id={`project-${project.id}`}
                    className={classNames(
                      "flex md:hidden justify-between bg-gray-1 rounded-2xl absolute bottom-5 px-6 py-4 left-10 w-4/5",
                    )}>
                    <div className="text-gray-6">
                      <p className="text-xl font-bold">{project.title}</p>
                      <p className="text-lg">{project.role}</p>
                    </div>
                    <div
                      className="bg-primary rounded-full h-10 w-10 flex justify-items-center items-center absolute -right-5 -top-5">
                      <svg width="40" height="40" viewBox="0 0 47 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M30.2725 23.7933C30.2654 23.9946 30.299 24.1953 30.3711 24.3834C30.4432 24.5715 30.5525 24.7431 30.6924 24.888C30.8323 25.0329 31 25.1482 31.1854 25.2269C31.3708 25.3057 31.5702 25.3462 31.7716 25.3462C31.973 25.3462 32.1724 25.3057 32.3578 25.2269C32.5433 25.1482 32.7109 25.0329 32.8508 24.888C32.9907 24.7431 33.1 24.5715 33.1721 24.3834C33.2443 24.1953 33.2778 23.9946 33.2707 23.7933V14.6009L33.2721 13.1004L31.773 13.1004L22.5806 13.1004C22.1874 13.1071 21.8125 13.2679 21.5367 13.5483C21.2608 13.8287 21.1062 14.2062 21.106 14.5995C21.1058 14.9928 21.2601 15.3705 21.5357 15.6511C21.8112 15.9318 22.186 16.093 22.5792 16.1L28.1512 16.1L13.4731 30.7781C13.1918 31.0594 13.0338 31.4409 13.0338 31.8388C13.0338 32.2366 13.1918 32.6181 13.4731 32.8994C13.7544 33.1807 14.1359 33.3388 14.5338 33.3388C14.9316 33.3388 15.3131 33.1807 15.5944 32.8994L30.2725 18.2213L30.2725 23.7933Z"
                          fill="#F2F2F2" />
                      </svg>
                    </div>
                  </div>
                  {/* tablet > desktop */}
                  <div id={`project-${project.id}`}
                    className={classNames(
                      "md:flex hidden justify-between py-5 px-12 bg-gray-1 rounded-2xl absolute bottom-10 w-4/5 lg:w-[47vw] md:left-20 lg:left-10 transition-all ease duration-700",
                      !project.open ? 'lg:translate-x-72' : ''
                    )}>
                    <div className="text-gray-6">
                      <p className="text-3xl font-bold">{project.title}</p>
                      <p className="text-xl">{project.role}</p>
                    </div>
                    <div
                      className="bg-primary rounded-full h-16 w-16 flex justify-items-center items-center">
                      <svg width="46" height="46" viewBox="0 0 34 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M30.2725 23.7933C30.2654 23.9946 30.299 24.1953 30.3711 24.3834C30.4432 24.5715 30.5525 24.7431 30.6924 24.888C30.8323 25.0329 31 25.1482 31.1854 25.2269C31.3708 25.3057 31.5702 25.3462 31.7716 25.3462C31.973 25.3462 32.1724 25.3057 32.3578 25.2269C32.5433 25.1482 32.7109 25.0329 32.8508 24.888C32.9907 24.7431 33.1 24.5715 33.1721 24.3834C33.2443 24.1953 33.2778 23.9946 33.2707 23.7933V14.6009L33.2721 13.1004L31.773 13.1004L22.5806 13.1004C22.1874 13.1071 21.8125 13.2679 21.5367 13.5483C21.2608 13.8287 21.1062 14.2062 21.106 14.5995C21.1058 14.9928 21.2601 15.3705 21.5357 15.6511C21.8112 15.9318 22.186 16.093 22.5792 16.1L28.1512 16.1L13.4731 30.7781C13.1918 31.0594 13.0338 31.4409 13.0338 31.8388C13.0338 32.2366 13.1918 32.6181 13.4731 32.8994C13.7544 33.1807 14.1359 33.3388 14.5338 33.3388C14.9316 33.3388 15.3131 33.1807 15.5944 32.8994L30.2725 18.2213L30.2725 23.7933Z"
                          fill="#F2F2F2" />
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            )}
          </div>
        </div>
        <div id="work_experience_section">
          <p className="font-bold md:text-7xl text-4xl text-gray-1 text-center">WORK <br /> EXPERIENCE</p>
          <div className="space-y-12 mt-10">
            {experiences?.map((experience, index) =>
              <div key={index}>
                <div className="lg:grid lg:grid-cols-2">
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
                  <div className="lg:grid lg:grid-cols-2 lg:ml-0 ml-6">
                    <div className="text-gray-3">{experience.description}</div>
                    <div className="font-medium justify-self-end">({experience.stay})</div>
                  </div>
                </div>
                <div className="h-0.5 w-full bg-gray-4 lg:mt-20 mt-10"></div>
              </div>
            )}
          </div>
        </div>
        {welcome.articles.length > 0 ? (
          <div className="space-y-12">
            <div className="grid grid-cols-2 justify-between">
              <div>
                <p className="text-7xl font-bold text-gray-1">ARTICLE</p>
              </div>
              <Link href={`/article`}
                className="justify-self-end mt-auto text-gray-3 relative after:block after:content-[''] after:h-0.5 after:w-full after:bg-gray-3">Read
                More<i className="ml-2 fa-solid fa-arrow-right"></i>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-x-8">
              {welcome?.articles?.map((post, index) =>
                <Link
                  key={index}
                  href={`/article/${post.slug}`}>
                  <div
                    className="space-y-5 h-80">
                    <Image src={post.header_image_url}
                      alt={post.slug}
                      className="rounded-lg object-cover"
                      height={100}
                      width={100}
                      quality={100}
                      style={{ width: '100%', height: '100%' }}
                    />
                    <div className="grid gap-x-3">
                      <p className="text-gray-3">{post.created_at}</p>
                      <p className="text-gray-1 font-medium text-2xl">{post.title}</p>
                    </div>
                  </div>
                </Link>
              )}
            </div>
          </div>
        ) : (<></>)}

      </div>
      <footer className="bg-gray-1 mt-40">
        <div className="flex justify-center items-center py-20">
          <div className="max-w-4xl">
            <p className="text-gray-3 md:text-6xl text-center font-bold">
              <span className="text-gray-5">CONTACT ME NOW </span>FOR
              FURTHER
              DISCUSSION!
            </p>
            <p className="text-gray-3 text-xl text-center mb-10 mt-2.5">
              I&apos;m ready to help you make your project a reality by combining <br /> attractive design with powerful
              functionality.
            </p>
            <div className="flex justify-center">
              <a href="mailto:sheenazien08gmail.com"
                className="py-3 px-8 border border-gray-5 text-gray-5 rounded-3xl transition-all hover:bg-primary hover:text-white hover:border-primary">sheenazien08@gmail.com</a>
            </div>

          </div>
        </div>
        <div className="flex justify-center pb-5">
          <a
            target="_blank"
            href={welcome?.profile?.socials_button?.github}
            className="rounded-full h-12 w-12 text-white">
            <Image src="/assets/github.svg" alt="" height={40} width={40} />
          </a>
          <a
            target="_blank"
            href={welcome?.profile?.socials_button?.facebook}
            className="rounded-full h-12 w-12 text-white">
            <Image src="/assets/facebook.svg" alt="" height={40} width={40} />
          </a>
          <a
            target="_blank"
            href={welcome?.profile?.socials_button?.instagram}
            className="rounded-full h-12 w-12 text-white">
            <Image src="/assets/instagram.svg" alt="" height={40} width={40} />
          </a>
        </div>
        {/* <div className="flex justify-center pb-5"> */}
        {/*   <a href="https://www.jagoweb.com/" target="_blank"><img src="https://www.jagoweb.com/image/media/small/media_2109014358png" alt="web hosting murah gratis domain" /></a> */}
        {/* </div> */}
      </footer>
    </div >
  );
}
