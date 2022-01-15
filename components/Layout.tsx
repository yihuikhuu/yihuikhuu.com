import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";
import LetsTalkButton from "./LetsTalkButton";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Layout: React.FC = ({ children }) => {
  const router = useRouter();

  return (
    <div className="h-full">
      <div className="relative overflow-hidden">
        <div className="relative pt-6 pb-16 sm:pb-24">
          <Popover>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <nav
                className="relative flex items-center justify-between sm:h-10 md:justify-center"
                aria-label="Global"
              >
                <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <a href="#">
                      <div className="text-xl font-semibold">Yihui Khuu</div>
                    </a>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open main menu</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex md:space-x-10">
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <a
                        className={classNames(
                          router.pathname == item.href
                            ? "bg-gray-200 text-gray-800"
                            : "text-gray-600 hover:text-gray-800 hover:bg-gray-100",
                          "transition px-3 py-2 font-medium text-sm rounded-md"
                        )}
                        aria-current={
                          router.pathname == item.href ? "page" : undefined
                        }
                      >
                        {item.name}
                      </a>
                    </Link>
                  ))}
                </div>
                <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
                  <LetsTalkButton />
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div className="text-xl font-semibold">Yihui Khuu</div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close main menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <a
                          className={classNames(
                            router.pathname == item.href
                              ? "bg-gray-200 text-gray-800"
                              : "text-gray-600 hover:text-gray-800 hover:bg-gray-100",
                            "transition block px-3 py-2 rounded-md text-base font-medium text-gray-700"
                          )}
                          aria-current={
                            router.pathname == item.href ? "page" : undefined
                          }
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                  <Link href="/contact">
                    <a className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700">
                      Lets talk
                    </a>
                  </Link>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </div>

        {children}
      </div>
      <div className="max-w-7xl mx-auto flex flex-col items-center px-4 sm:px-6">
        <h1 className="text-lg tracking-tight font-semibold text-gray-900 sm:text-xl md:text-2xl">
          <span className="block">Want to chat?</span>
        </h1>
        <LetsTalkButton className="mt-6" />
      </div>
      <div>
        <div className="max-w-7xl mx-auto pt-12 pb-8 px-4 sm:pt-16 sm:pb-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-gray-400 text-sm tracking-wide">
            © 2022 Yihui Khuu
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Layout;
