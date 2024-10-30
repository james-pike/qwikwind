import { component$ } from "@builder.io/qwik";

// @ts-ignore
import logoSrc from "~/assets/images/newlogo.png?width=64&height=64&png";

export default component$(() => (
  <span class="self-center ml-2 text-2xl md:text-xl font-bold text-gray-900 whitespace-nowrap dark:text-white flex items-center">
    <img
      src={logoSrc}
      class="inline-block mr-1"
      width={160}
      height={160}
      alt="Qwind Logo"
      loading="lazy"
    />
    
  </span>
));
