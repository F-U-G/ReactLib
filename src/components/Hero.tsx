import Button from "./Button.tsx";

export default function Hero() {
  return (
    <section className="pt-20">
      <div className="w-full md:w-2xl lg:w-4xl mx-auto my-15 px-8 md:px-0">
        <h2 className="text-5xl max-w-3xl md:text-6xl lg:text-7xl">
          Welcome To the Lib Website
        </h2>
        <div className="my-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <Button />
      </div>
    </section>
  )
}
