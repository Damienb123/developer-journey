import { CMS_NAME } from "@/lib/constants";

export function Intro() {
  return (
    <section className="flex flex-col items-left md:flex-col md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        A Developers Journey.
      </h1>

      <h2 className="text-lg  md:text-4xl font-bold tracking-tighter leading-tight md:pr-8">
        By Damien Beltran
      </h2>
      <h4 className="text-left md:text-left text-lg mt-5 md:pl--1">
        A statically generated blog using{" "}
        <a
          href="https://nextjs.org/"
          className="underline hover:text-blue-600 duration-200 transition-colors"
        >
          Next.js
        </a>{" "}
        and {CMS_NAME}.
      </h4>
    </section>
  );
}
