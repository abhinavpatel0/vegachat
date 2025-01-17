import { createSignal } from 'solid-js';
import { onCleanup } from 'solid-js';
import { createEffect } from 'solid-js';
import { onMount } from 'solid-js';

// import styles from '../../App.module.css';
import logo from '../../logo.webp';


const navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = createSignal(false);

  onCleanup(() => {
    setIsMenuOpen(false);
  });

  onMount(() => {
    setIsMenuOpen(false);
  });

  // Toggle menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen());
  };

  return (
    <>
    <div class='fixed w-full z-20'>
      <nav class="bg-white border-gray-200 dark:bg-gray-900 fixed w-full ">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 	">
          <A href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} class=" h-8 select-none	" alt="Vegachat Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Vegachat
            </span>
          </A>
          <button
            onClick={toggleMenu}
            type="button"
            class="inline-flex items-center  p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen() ? "true" : "false"}
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            class={`${
              isMenuOpen() ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul
              class="font-medium flex flex-col p-4 md:p-0 mt-4  border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
            >
              <li>
                <A
                  href="/"
                  class="block py-2 px-3 text-white bg-pink-700 rounded md:bg-transparent md:text-pink-700 md:p-0 dark:text-white md:dark:text-pink-500"
                  aria-current="page"
                >
                  Home
                </A>
              </li>
              <li>
                <A
                  href="/about"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-700 md:p-0 dark:text-white md:dark:hover:text-pink-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </A>
              </li>
              <li>
                <A
                  href="/services"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-700 md:p-0 dark:text-white md:dark:hover:text-pink-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Services
                </A>
              </li>
              <li>
                <A
                  href="/pricing"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-700 md:p-0 dark:text-white md:dark:hover:text-pink-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Pricing
                </A>
              </li>
              <li>
                <A
                  href="/pricing"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-700 md:p-0 dark:text-white md:dark:hover:text-pink-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </A>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class='h-96'></div>
      </div>
    </>
  );
};

export default navbar;
