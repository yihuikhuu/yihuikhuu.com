import {
  ArrowLeftIcon,
  DesktopComputerIcon,
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
  siAndroid,
  siCsharp,
  siDjango,
  siDotnet,
  siFlask,
  siIos,
  siJava,
  siJavascript,
  siJquery,
  siLeaflet,
  siPython,
  siThreedotjs,
  siVuedotjs,
  siXaml,
} from "simple-icons/icons";

const timeline: TimelineEntry[] = [
  {
    header: "Mobile - Android and iOS",
    shortDescription: "Data Visualisation and Hardware Configuration",
    content: [
      "Native iOS and Android applications for visualising user data in the form of charts, and for remotely configuring the client's custom hardware.",
      "Inherited project from previous developer.",
      "Created custom charting code using Core Graphics API for iOS and assisted in the development of similar library with Android's Canvas API.",
      "Implemented app design and custom communications protocol according to client specifications.",
    ],
    icon: DeviceMobileIcon,
    iconBackground: "bg-gray-400",
    iconList: ["Obj-C", siJava, siIos, siAndroid],
  },
  {
    header: "Web - ASP.NET, Razor and JQuery",
    shortDescription: "Client Product Portfolio Management",
    content: [
      "A tool for the creation and management of detailed client product profiles, along with the generation of tailored documentation and marketing material for each client.",
      "Worked with client to develop a sensible workflow for the tool and to create a design to fit within the client's company style guidelines.",
      "Implemented generation of marketing materials based on user-provided templates and the Adobe Indesign SDK.",
      "Responsible for ongoing maintenance and additional features.",
    ],
    icon: DeviceMobileIcon,
    iconBackground: "bg-gray-400",
    iconList: [siCsharp, siJquery, siDotnet],
  },
  {
    header: "Desktop - .NET and WPF",
    shortDescription: "Bookkeeper Management System",
    content: [
      "An all-in-one internal management tool for the client to manage clients, schedule tasks, and generate forms.",
      "Worked with client to redesign interface and workflow.",
    ],
    icon: DesktopComputerIcon,
    iconBackground: "bg-gray-400",
    iconList: [siCsharp, siXaml, siDotnet],
  },
  {
    header: "Web - Django and Vue.js",
    shortDescription: "Brokering Business Management System",
    content: [
      "A tool for managing available client stock, generating contracts and invoices, and handling of financial payments and reconciliation. The tool also acts as a client gateway to view their existing stock, contracts, and invoices.",
      "Designer and developer of project.",
      "Supports the import of existing data and to simplify the transition from the existing tool.",
    ],
    icon: GlobeAltIcon,
    iconBackground: "bg-gray-400",
    iconList: [siPython, siJavascript, siDjango, siVuedotjs],
  },
  {
    header: "Web - Flask and Vue.js",
    shortDescription: "Real-Time Building and User Visualisation System",
    content: [
      "A prototype system for the real-time visualisation of user data and handling of events.",
      "This included charts for displaying statistics, an interface for displaying and executing actions for events, and an interface for visualising the basic floor structure of multistorey buildings, along with the real-time position of users within that building in both 2D (on a flat map) and in 3D with WebGL technology.",
      "Designer and developer of the front-end interface.",
      "Worked with developers of the existing system to develop a RESTful API to retrieve static data, and a web socket-based interface to access a stream of real-time data.",
    ],
    icon: GlobeAltIcon,
    iconBackground: "bg-gray-400",
    iconList: [
      siPython,
      siJavascript,
      siFlask,
      siVuedotjs,
      siThreedotjs,
      siLeaflet,
    ],
  },
];

const LumientFirst: NextPage = () => (
  <>
    <Head>
      <title>Lumient - Yihui Khuu</title>
    </Head>
    <Hero>
      <Title size="large">
        <span className="block">Lumient.</span>

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
          Fullstack Web + Mobile + DevOps.
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
          2014 - 2018
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
                Lumient provides software development services for their
                clients.
              </div>
              <div>
                I was responsible for the development of several projects using
                a variety of different technologies based on what best suits the
                project.
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

export default LumientFirst;
