import { NextPage } from "next";
import { MailIcon, PhoneIcon } from "@heroicons/react/outline";
import Head from "next/head";

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact - Yihui Khuu</title>
      </Head>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="relative bg-white">
          <h2 className="sr-only">Get in touch</h2>

          <h1 className="text-4xl tracking-tight font-semibold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Get in touch.</span>
          </h1>

          <div className="py-10 lg:col-span-2 xl:py-12">
            <form
              name="contact"
              method="POST"
              className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
            >
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-900"
                >
                  First name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="py-3 px-4 block w-full text-gray-900 focus:ring-violet-500 focus:border-violet-500 border-gray-300 rounded"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="py-3 px-4 block w-full text-gray-900 focus:ring-violet-500 focus:border-violet-500 border-gray-300 rounded"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-900"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="py-3 px-4 block w-full text-gray-900 focus:ring-violet-500 focus:border-violet-500 border-gray-300 rounded"
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Phone
                  </label>
                  <span id="phone-optional" className="text-sm text-gray-500">
                    Optional
                  </span>
                </div>
                <div className="mt-1">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    className="py-3 px-4 block w-full text-gray-900 focus:ring-violet-500 focus:border-violet-500 border-gray-300 rounded"
                    aria-describedby="phone-optional"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-900"
                >
                  Subject
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    className="py-3 px-4 block w-full text-gray-900 focus:ring-violet-500 focus:border-violet-500 border-gray-300 rounded"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="flex justify-between">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Message
                  </label>
                  {/* <span id="message-max" className="text-sm text-gray-500">
                    Max. 500 characters
                  </span> */}
                </div>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="py-3 px-4 block w-full text-gray-900 focus:ring-violet-500 focus:border-violet-500 border border-gray-300 rounded"
                    aria-describedby="message-max"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="sm:col-span-2 sm:flex sm:justify-end">
                <button
                  type="submit"
                  className="mt-2 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded text-base font-medium text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 sm:w-auto"
                >
                  Fire away
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
