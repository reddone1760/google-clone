import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src="https://www.google.de/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png"
          height={40}
          width={120}
          onClick={() => {
            router.push(`/`);
          }}
          className="cursor-pointer"
        />

        <form className="flex border border-gray-200 rounded-full shadow-lg max-w-3xl flex-grow px-6 py-3 ml-10 mr-5 items-center">
          <input
            type="text"
            className="flex-grow w-full focus:outline-none"
            ref={searchInputRef}
            defaultValue={router.query.term}
          />
          <XIcon
            onClick={() => (searchInputRef.current.value = "")}
            className="h-7 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125 sm:mr-3"
          />
          <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
          <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
          <button onClick={search} hidden type="submit">
            Search
          </button>
        </form>
        <Avatar
          className="ml-auto"
          url="https://lh4.googleusercontent.com/-18kKLa6OHtU/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclqgiZlY1uXibigZ-h2uFUA5d_aNA/s100/photo.jpg"
        />
      </div>

      <HeaderOptions />
    </header>
  );
}

export default Header;
