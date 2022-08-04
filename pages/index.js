import Card from "../components/Card";

export default function Page() {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Card>
            <div className="text-center py-32">
              <h2 className="text-6xl font-extrabold tracking-tight text-gray-900 sm:text-8xl">
                <span className="block">Are you ready</span>
                <span className="block">
                  to ship like a{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-tr from-red-600 via-red-500 to-orange-400">
                    boss
                  </span>
                  ?
                </span>
              </h2>
              <div className="mt-14 flex justify-center">
                <div className="inline-flex rounded-md shadow">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-7 py-3 border border-transparent text-xl font-base rounded-md text-white bg-red-600 hover:bg-red-700"
                  >
                    Get started
                  </a>
                </div>
                <div className="ml-3 inline-flex">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-7 py-3 border border-transparent text-xl font-base rounded-md text-red-700 bg-red-100 hover:bg-red-200"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
        </Card>
      </div>
    </>
  );
}
