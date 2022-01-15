import {
  ArrowLeftIcon,
  DeviceMobileIcon,
  GlobeAltIcon,
} from "@heroicons/react/outline";
import Hero from "components/Hero";
import Subtitle from "components/Subtitle";
import Timeline, { TimelineEntry } from "components/Timeline";
import Title from "components/Title";
import { motion } from "framer-motion";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import {
  siBootstrap,
  siCsharp,
  siDjango,
  siDotnet,
  siJavascript,
  siNextdotjs,
  siPython,
  siTailwindcss,
  siTypescript,
  siVuedotjs,
} from "simple-icons/icons";

const timeline: TimelineEntry[] = [
  {
    header: "Web - Django and Next.js",
    shortDescription: "Inheriting incomplete system",
    content: [
      "Originally developed by freelancers",
      "Liase with users of the system to determine expected functionality, and introduced extensive tests and documentation to existing system",
      "Bridged gaps in functionality and customised provided Bootstrap theme to achieve required results",
    ],
    icon: GlobeAltIcon,
    iconBackground: "bg-gray-400",
    iconList: [siPython, siJavascript, siDjango, siNextdotjs, siBootstrap],
  },
  {
    header: "Web - Django and Next.js",
    shortDescription: "Redesigning UI according to user feedback",
    content: [
      "Redesigned and reimplemented UI in-place using TailwindCSS instead of Bootstrap for greater flexibility",
      "Championed and converted frontend to use TypeScript",
    ],
    icon: GlobeAltIcon,
    iconBackground: "bg-gray-400",
    iconList: [siPython, siJavascript, siDjango, siNextdotjs, siTailwindcss],
  },
  {
    header: "Web - ASP.NET and Vue.js",
    shortDescription: "Version 2",
    content: [
      "Following change in scope of software platform, designed and architected the second generation of the system.",
      "Liased with stakeholders to determine required technology stack for new system according to resource and business requirements.",
      "Liased with users to determine new functionality and collect feedback for existing features.",
      "Championed and implemented continuous integration and deployment via Github actions",
      "Designed and implemented core functionality and UI.",
      "Designed and implemented document management system, leveraging Microsoft Sharepoint/Onedrive to allow users to collaborate and share documents with ease.",
    ],
    icon: GlobeAltIcon,
    iconBackground: "bg-gray-400",
    iconList: [siCsharp, siTypescript, siDotnet, siVuedotjs, siTailwindcss],
  },
];

const AndreyevLawyers: NextPage = () => (
  <>
    <Head>
      <title>Andreyev Lawyers - Yihui Khuu</title>
    </Head>
    <Hero>
      <Title size="large">
        <span className="block">Andreyev Lawyers.</span>

        <motion.span
          className="block text-violet-500"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {
              opacity: 0,
            },
            show: {
              opacity: 1,
              transition: {
                delay: 0.75,
              },
            },
          }}
        >
          Fullstack Web + DevOps + Design + Business Analyst.
        </motion.span>
      </Title>
      <Subtitle className="mt-3 max-w-md">
        <motion.span
          className="text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {
              opacity: 0,
            },
            show: {
              opacity: 1,
              transition: {
                delay: 1.5,
              },
            },
          }}
        >
          2019 - 2021
        </motion.span>
      </Subtitle>
    </Hero>
    <div className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 min-h-[32.4rem] sm:min-h-[27.9rem] md:min-h-[26.9rem]">
        <div className="relative overflow-hidden">
          <motion.div
            className="mx-1 mt-16"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {
                opacity: 0,
              },
              show: {
                opacity: 1,
                transition: {
                  delay: 1.5,
                },
              },
            }}
          >
            <div className="transition-colors dark:text-white">
              <div>
                Andreyev Lawyers provides personalised legal services for
                businesses and families.
              </div>
              <div>
                I was responsible for the end-to-end development of the
                firm&apos;s internal software systems.
              </div>
              <div>
                Originally a CRM, the system quickly evolved into a full service
                business managment platform used daily by all members of the
                firm across multiple Australian states.
              </div>
            </div>

            <Timeline className="mt-16 -mb-8 pb-8 px-3" timeline={timeline} />

            <Link href="/about">
              <a className="my-8 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500">
                <ArrowLeftIcon className="mr-2 w-5 h-5" />
                Go back
              </a>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  </>
);

export default AndreyevLawyers;
