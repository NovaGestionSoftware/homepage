import Image from "next/image";

function ListaPrecios() {
  return (
    <div className="w-full pt-16 flex flex-col md:flex-row items-center">
      <div className="rounded-md w-[90%]  md:w-min-1/3 mx-auto items-center border border-gray-300 py-16 px-4 xl:px-24 mb-4 flex flex-col">
        <p className="text-gray-700 dark:text-gray-300 text-2xl">Basic</p>
        <h1 className="font-semibold text-6xl pt-2 pb-3 dark:text-white">$0</h1>
        <p className="text-gray-500">per month</p>
        <ul className="mt-10  dark:text-gray-300">
          <li className="mb-2">
            <Image
              src="https://www.svgrepo.com/show/453892/checkmark.svg"
              className="inline h-6 w-6 text-gray-500 mr-3 -mt-1" width={50} height={50}
            />{" "}
            Access to all modules
          </li>
          <li className="mb-2">
            <Image
              src="https://www.svgrepo.com/show/453892/checkmark.svg"
              className="inline h-6 w-6 text-gray-500 mr-3 -mt-1" width={50} height={50}
            />{" "}
            Community support
          </li>
          <li className="mb-2">
            <Image
              src="https://www.svgrepo.com/show/453892/checkmark.svg"
              className="inline h-6 w-6 text-gray-500 mr-3 -mt-1" width={50} height={50}
            />{" "}
            Online Playground
          </li>
          <li className="mb-2">
            <Image
              src="https://www.svgrepo.com/show/453892/checkmark.svg"
              className="inline h-6 w-6 text-gray-500 mr-3 -mt-1" width={50} height={50}
            />{" "}
            Custom you profile
          </li>
          <li className="mb-2">
            <Image
              src="https://www.svgrepo.com/show/453892/checkmark.svg"
              className="inline h-6 w-6 text-gray-500 mr-3 -mt-1" width={50} height={50}
            />{" "}
            Personal subdomain
          </li>
          <li className="mb-2">
            <Image
              src="https://www.svgrepo.com/show/453892/checkmark.svg"
              className="inline h-6 w-6 text-gray-500 mr-3 -mt-1" width={50} height={50}
            />{" "}
            Points to earn and use{" "}
          </li>
        </ul>
        <button className="mt-6 bg-gray-100 rounded-md py-2 px-4 text-black text-xl">
          Request Access
        </button>
        <small className="text-sm mt-2 dark:text-gray-300">It's free.</small>
      </div>
      <div className="rounded-md w-[90%] mx-auto md:w-min-1/3 bg-emerald-50/50 dark:bg-gray-50  md:!mx-4 items-center border border-gray-300 py-24 px-4 xl:px-24 mb-4 flex flex-col">
        <p className="text-gray-700 dark:text-gray-500 text-2xl">Premium</p>
        <h1 className="font-semibold text-6xl pt-2 pb-3 dark:text-black">
          $25
        </h1>
        <p className="text-gray-400">per month</p>
        <ul className="mt-10  dark:text-gray-300">
          <li className="mb-2 dark:text-gray-600">
            <Image
              src="https://www.svgrepo.com/show/453892/checkmark.svg"
              className="inline h-6 w-6 text-gray-500 mr-3 -mt-1" width={50} height={50}
            />{" "}
            Access to all modules
          </li>
          <li className="mb-2 dark:text-gray-600">
            <Image
              src="https://www.svgrepo.com/show/453892/checkmark.svg"
              className="inline h-6 w-6 text-gray-500 mr-3 -mt-1" width={50} height={50}
            />{" "}
            Community support
          </li>
          <li className="mb-2 dark:text-gray-600">
            <Image
              src="https://www.svgrepo.com/show/453892/checkmark.svg"
              className="inline h-6 w-6 text-gray-500 mr-3 -mt-1" width={50} height={50}
            />{" "}
            Online Playground
          </li>
          <li className="mb-2 dark:text-gray-600">
            <Image
              src="https://www.svgrepo.com/show/453892/checkmark.svg"
              className="inline h-6 w-6 text-gray-500 mr-3 -mt-1" width={50} height={50}
            />{" "}
            Custom you profile
          </li>
          <li className="mb-2 dark:text-gray-600">
            <Image
              src="https://www.svgrepo.com/show/453892/checkmark.svg"
              className="inline h-6 w-6 text-gray-500 mr-3 -mt-1" width={50} height={50}
            />{" "}
            Personal subdomain
          </li>
          <li className="mb-2 dark:text-gray-600">
            <Image
              src="https://www.svgrepo.com/show/453892/checkmark.svg"
              className="inline h-6 w-6 text-gray-500 mr-3 -mt-1" width={50} height={50}
            />{" "}
            Points to earn and use{" "}
          </li>
        </ul>
        <button className="mt-6 bg-emerald-500 rounded-md py-2 px-4 text-white text-xl">
          Request Access
        </button>
        <small className="text-sm mt-2 dark:text-gray-500">
          Perfect, all inclusive.
        </small>
      </div>
      <div className="rounded-md w-[90%]  md:w-min-1/3 mx-auto items-center border border-gray-300 py-16 px-4 xl:px-24 mb-4 flex flex-col">
        <p className="text-gray-700 dark:text-gray-300 text-2xl">Standard</p>
        <h1 className="font-semibold text-6xl pt-2 pb-3 dark:text-white">
          $12
        </h1>
        <p className="text-gray-500">per month</p>
        <ul className="mt-10  dark:text-gray-300">
          <li className="mb-2">
            <Image
              src="https://www.svgrepo.com/show/453892/checkmark.svg"
              className="inline h-6 w-6 text-gray-500 mr-3 -mt-1" width={50} height={50}
            />{" "}
            Access to all modules
          </li>
          <li className="mb-2">
            <Image
              src="https://www.svgrepo.com/show/453892/checkmark.svg"
              className="inline h-6 w-6 text-gray-500 mr-3 -mt-1" width={50} height={50}
            />{" "}
            Community support
          </li>
          <li className="mb-2">
            <Image
              src="https://www.svgrepo.com/show/453892/checkmark.svg"
              className="inline h-6 w-6 text-gray-500 mr-3 -mt-1" width={50} height={50}
            />{" "}
            Online Playground
          </li>
          <li className="mb-2">
            <Image
              src="https://www.svgrepo.com/show/453892/checkmark.svg"
              className="inline h-6 w-6 text-gray-500 mr-3 -mt-1" width={50} height={50}
            />{" "}
            Custom you profile
          </li>
          <li className="mb-2">
            <Image
              src="https://www.svgrepo.com/show/453892/checkmark.svg"
              className="inline h-6 w-6 text-gray-500 mr-3 -mt-1" width={50} height={50}
            />{" "}
            Personal subdomain
          </li>
          <li className="mb-2">
            <Image
              src="https://www.svgrepo.com/show/453892/checkmark.svg"
              className="inline h-6 w-6 text-gray-500 mr-3 -mt-1" width={50} height={50}
            />{" "}
            Points to earn and use{" "}
          </li>
        </ul>
        <button className="mt-6 bg-gray-200 rounded-md py-2 px-4 text-black text-xl">
          Request Access
        </button>
        <small className="text-sm mt-2 dark:text-gray-300">
          Creators on the way.
        </small>
      </div>
    </div>
  );
}

export default ListaPrecios;
