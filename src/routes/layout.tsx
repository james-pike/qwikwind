import { component$, Slot } from "@builder.io/qwik";

import Footer from "~/components/widgets/Footer";
import Header from "~/components/widgets/Header";
import { Navbar } from "~/components/widgets/navbar";

export default component$(() => {
  return (
    <>
      <Header />
     
      <main>
        <Slot />
      </main>
      <Footer />
    </>
  );
});
