// components/layout.js

import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <div className="h-full w-screen bg-100 min-h-screen">
      <Navbar />

      <div className="pt-20  min-h-screen h-full bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="py-10">
            <main>{children}</main>
          </div>
        </div>
      </div>
    </div>
  );
}
