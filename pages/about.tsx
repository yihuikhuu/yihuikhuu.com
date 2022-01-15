import { motion } from "framer-motion";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Fragment } from "react";
import {
  siAmazonaws,
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
  siJava,
  siMicrosoftazure,
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
} from "simple-icons/icons";
import Hero from "../components/Hero";
import IconCard, { IconType } from "../components/IconCard";
import Subtitle from "../components/Subtitle";
import Title from "../components/Title";

const languages: IconType[] = [
  {
    name: "C#",
    icon: siCsharp,
    href: "https://dotnet.microsoft.com/en-us/languages/csharp",
  },
  {
    name: "TypeScript",
    icon: siTypescript,
    href: "https://www.typescriptlang.org/",
  },
  { name: "Python", icon: siPython, href: "https://www.python.org/" },
  { name: "Elixir", icon: siElixir, href: "https://elixir-lang.org/" },
  { name: "Swift", icon: siSwift, href: "https://www.swift.org/" },
  { name: "Java", icon: siJava, href: "https://www.java.com/" },
  { name: "Go", icon: siGo, href: "https://golang.org/" },
];

const databases: IconType[] = [
  {
    name: "Postgresql",
    icon: siPostgresql,
    href: "https://www.postgresql.org/",
  },
  {
    name: "SQL Server",
    icon: siMicrosoftsqlserver,
    href: "https://www.microsoft.com/en-au/sql-server",
  },
];

const frameworks: IconType[] = [
  { name: "React", icon: siReact, href: "https://reactjs.org/" },
  { name: "Next.js", icon: siNextdotjs, href: "https://nextjs.org/" },
  { name: "Vue.js", icon: siVuedotjs, href: "https://vuejs.org/" },
  {
    name: "Phoenix Framework",
    icon: undefined,
    href: "https://www.phoenixframework.org/",
  },
  { name: "Django", icon: siDjango, href: "https://www.djangoproject.com/" },
  { name: ".NET", icon: siDotnet, href: "https://dotnet.microsoft.com/" },
  { name: "GraphQL", icon: siGraphql, href: "https://graphql.org/" },
  {
    name: "TailwindCSS",
    icon: siTailwindcss,
    href: "https://tailwindcss.com/",
  },
  { name: "Bootstrap", icon: siBootstrap, href: "https://getbootstrap.com/" },
];

const platforms: IconType[] = [
  { name: "Web", icon: siGooglechrome },
  { name: "iOS", icon: siIos },
  { name: "Windows", icon: siWindows },
  { name: "Android", icon: siAndroid },
  { name: "AWS", icon: siAmazonaws },
  { name: "Azure", icon: siMicrosoftazure },
];

const toolbox = [
  { name: "Languages", items: languages },
  { name: "Databases", items: databases },
  { name: "Frameworks + Other", items: frameworks },
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

const About: NextPage = () => (
  <>
    <Head>
      <title>About - Yihui Khuu</title>
    </Head>
    <Hero className="text-left">
      <Title size="large">
        <span className="block">Developer.</span>

        <motion.span
          className="block text-violet-600 flex flex-col sm:flex-row"
          initial="hidden"
          animate="show"
          variants={container}
        >
          <motion.span variants={variants}></motion.span>
          <motion.span variants={variants}>Curious.</motion.span>
          <span className="hidden sm:block">&nbsp;&nbsp;&nbsp;</span>
          <motion.span variants={variants}>Passionate.</motion.span>
          <span className="hidden sm:block">&nbsp;&nbsp;&nbsp;</span>
          <motion.span variants={variants}>Experienced.</motion.span>
        </motion.span>
      </Title>
      <Subtitle className="mt-3 max-w-md">
        <motion.span
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
        </motion.span>
      </Subtitle>
    </Hero>
    <div>
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 min-h-[16rem] pb-16">
          <div className="relative overflow-hidden">
            <div>
              <Title className="mt-16" size="base">
                <span className="block">My Toolbox</span>
              </Title>

              {toolbox.map((t) => (
                <Fragment key={t.name}>
                  <Title className="mt-12" size="small">
                    <span className="block">{t.name}</span>
                  </Title>
                  <div className="mt-8 px-8 grid gap-4 grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12">
                    {t.items.map((l) =>
                      l.href ? (
                        <Link key={l.name} href={l.href}>
                          <a key={l.name} target="_blank">
                            <IconCard icon={l} />
                          </a>
                        </Link>
                      ) : (
                        <IconCard key={l.name} icon={l} />
                      )
                    )}
                  </div>
                </Fragment>
              ))}
            </div>

            {/* <Title className="mt-16" size="base">
              <span className="block">My Experience</span>
            </Title> */}
          </div>
        </div>
      </div>
    </div>
  </>
);

export default About;
