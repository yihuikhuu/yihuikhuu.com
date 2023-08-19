import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { m } from "framer-motion";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Fragment } from "react";
import {
  siAndroid,
  siBootstrap,
  siCsharp,
  siDjango,
  siDotnet,
  siElixir,
  siGo,
  siGooglechrome,
  siGraphql,
  siIos,
  siMicrosoftsqlserver,
  siNextdotjs,
  siPostgresql,
  siPython,
  siReact,
  siSwift,
  siTailwindcss,
  siTypescript,
  siVuedotjs,
  siWindows,
} from "simple-icons";
import Hero from "components/Hero";
import IconCard, { IconType } from "components/IconCard";
import Subtitle from "components/Subtitle";
import Title from "components/Title";
import { classNames } from "helpers/classnames";

const languages: IconType[] = [
  {
    name: "C#",
    icon: siCsharp,
    href: "https://dotnet.microsoft.com/en-us/languages/csharp",
    className: "bg-green-50 hover:bg-green-100",
  },
  {
    name: "TypeScript",
    icon: siTypescript,
    href: "https://www.typescriptlang.org/",
    className: "bg-blue-50 hover:bg-blue-100",
  },
  {
    name: "Python",
    icon: siPython,
    href: "https://www.python.org/",
    className: "bg-blue-50 hover:bg-blue-100",
  },
  {
    name: "Elixir",
    icon: siElixir,
    href: "https://elixir-lang.org/",
    className: "bg-purple-50 hover:bg-purple-100",
  },
  {
    name: "Swift",
    icon: siSwift,
    href: "https://www.swift.org/",
    className: "bg-orange-50 hover:bg-orange-100",
  },
  {
    name: "Go",
    icon: siGo,
    href: "https://golang.org/",
    className: "bg-cyan-50 hover:bg-cyan-100",
  },
];

const databases: IconType[] = [
  {
    name: "Postgresql",
    icon: siPostgresql,
    href: "https://www.postgresql.org/",
    className: "bg-indigo-50 hover:bg-indigo-100",
  },
  {
    name: "SQL Server",
    icon: siMicrosoftsqlserver,
    href: "https://www.microsoft.com/en-au/sql-server",
    className: "bg-red-50 hover:bg-red-100",
  },
];

const frameworks: IconType[] = [
  {
    name: "React",
    icon: siReact,
    href: "https://reactjs.org/",
    className: "bg-cyan-50 hover:bg-cyan-100",
  },
  {
    name: "Next.js",
    icon: siNextdotjs,
    href: "https://nextjs.org/",
    className: "bg-gray-50 hover:bg-gray-100",
  },
  {
    name: "Vue.js",
    icon: siVuedotjs,
    href: "https://vuejs.org/",
    className: "bg-green-50 hover:bg-green-100",
  },
  {
    name: "Phoenix Framework",
    icon: undefined,
    imageLink: "/images/phoenix.svg",
    href: "https://www.phoenixframework.org/",
    className: "bg-orange-50 hover:bg-orange-100",
  },
  {
    name: "Django",
    icon: siDjango,
    href: "https://www.djangoproject.com/",
    className: "bg-gray-50 hover:bg-gray-100",
  },
  {
    name: ".NET",
    icon: siDotnet,
    href: "https://dotnet.microsoft.com/",
    className: "bg-purple-50 hover:bg-purple-100",
  },
  {
    name: "GraphQL",
    icon: siGraphql,
    href: "https://graphql.org/",
    className: "bg-pink-50 hover:bg-pink-100",
  },
  {
    name: "TailwindCSS",
    icon: siTailwindcss,
    href: "https://tailwindcss.com/",
    className: "bg-teal-50 hover:bg-teal-100",
  },
  {
    name: "Bootstrap",
    icon: siBootstrap,
    href: "https://getbootstrap.com/",
    className: "bg-purple-50 hover:bg-purple-100",
  },
];

const platforms: IconType[] = [
  {
    name: "Web",
    icon: siGooglechrome,
    className: "bg-blue-50 hover:bg-blue-100",
  },
  { name: "iOS", icon: siIos, className: "bg-gray-50 hover:bg-gray-100" },
  {
    name: "Windows",
    icon: siWindows,
    className: "bg-blue-50 hover:bg-blue-100",
  },
  {
    name: "Android",
    icon: siAndroid,
    className: "bg-green-50 hover:bg-green-100",
  },
];

const toolbox = [
  { name: "Programming Languages", items: languages },
  { name: "Databases", items: databases },
  { name: "Frameworks & Tools", items: frameworks },
  { name: "Platforms", items: platforms },
];

const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.75,
    },
  },
};

const variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

const experiences = [
  {
    organisation: "Lumient",
    when: "2014 - 2018",
    description:
      "My first developer role. Backend, frontend, mobile, and everything in between.",
    href: "/about/lumient-first",
  },
  {
    organisation: "Andreyev Lawyers",
    when: "2019 - 2021",
    description:
      "Full service legal business management software. Legacy and cutting edge.",
    href: "/about/andreyev-lawyers",
  },
  {
    organisation: "Lumient",
    when: "2021 - 2022",
    description:
      "Developing a comprehensive management system for the AgTech industry.",
    href: "/about/lumient-second",
  },
  {
    organisation: "KPMG Origins",
    when: "2022 - Now",
    description: "Developing core parts of the Origins platform.",
    href: "/about/kpmg-origins",
  },
];

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About - Yihui Khuu</title>
        <meta name="description" content="About Yihui Khuu" />
      </Head>
      <Hero className="text-left">
        <Title size="large">
          <span className="block">Developer.</span>

          <m.span
            className={classNames(
              "flex flex-col sm:flex-row",
              `transition-colors text-accent-500`
            )}
            initial="hidden"
            animate="show"
            variants={container}
          >
            <m.span variants={variants}></m.span>
            <m.span variants={variants}>Curious.</m.span>
            <span className="hidden sm:block">&nbsp;&nbsp;&nbsp;</span>
            <m.span variants={variants}>Passionate.</m.span>
            <span className="hidden sm:block">&nbsp;&nbsp;&nbsp;</span>
            <m.span variants={variants}>Experienced.</m.span>
          </m.span>
        </Title>
        <Subtitle className="my-3 max-w-md">
          <m.span
            initial="hidden"
            animate="show"
            variants={{
              hidden: {
                opacity: 0,
              },
              show: {
                opacity: 1,
                transition: {
                  delay: 3.0,
                },
              },
            }}
          >
            Well versed in Backend, Frontend and Mobile development.
          </m.span>
        </Subtitle>
      </Hero>
      <div>
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 min-h-[16rem] pb-16">
            <div className="relative overflow-hidden">
              <div>
                {toolbox.map((t) => (
                  <Fragment key={t.name}>
                    <Title className="mt-16" size="base">
                      <span
                        className={classNames(
                          "transition-colors block",
                          `text-accent-600 dark:text-accent-400`
                        )}
                      >
                        {t.name}
                      </span>
                    </Title>
                    <div className="mt-8 grid gap-4 grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
                      {t.items.map((icon) =>
                        icon.href ? (
                          <Link
                            key={icon.name}
                            href={icon.href}
                            target="_blank"
                            rel="noopener nofollow"
                          >
                            <IconCard icon={icon} />
                          </Link>
                        ) : (
                          <IconCard key={icon.name} icon={icon} />
                        )
                      )}
                    </div>
                  </Fragment>
                ))}
              </div>

              <Title className="mt-16" size="base">
                <span className="block">My Experience</span>
              </Title>

              <ul
                role="list"
                className="transition-colors mt-8 divide-y divide-gray-200 dark:divide-gray-600"
              >
                {experiences
                  .slice(0)
                  .reverse()
                  .map((experience, index) => (
                    <li key={`experience-${index}`}>
                      <Link
                        href={experience.href}
                        className="transition block hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <div className="flex items-center px-4 py-6 sm:px-6">
                          <div className="min-w-0 flex-1 flex items-center gap-8">
                            <p className="transition-colors flex-shrink-0 dark:text-white">
                              {(experiences.length - index)
                                .toString()
                                .padStart(2, "0")}
                            </p>
                            <div className="min-w-0 flex-1 px-4 items-center md:grid md:grid-cols-2 md:gap-4">
                              <Title size="small">
                                <p className="font-medium truncate">
                                  {experience.organisation}
                                </p>
                              </Title>
                              <div>
                                <div>
                                  <p className="transition-colors text-sm text-gray-900 dark:text-white">
                                    {experience.when}
                                  </p>
                                </div>
                              </div>
                              <Subtitle className="col-span-2">
                                <span>{experience.description}</span>
                              </Subtitle>
                            </div>
                          </div>
                          <div>
                            <ArrowRightIcon
                              className="h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
