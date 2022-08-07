// components/layout.js
import { useState } from "react";
import Navbar from "./navbar";

export default function Layout({ children }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <div className="relative h-full w-screen bg-100 min-h-screen">
      {modalVisible && (
        <div className="z-[100] top-0 left-0 absolute bg-black/75 w-screen h-screen"></div>
      )}

      <div className="relative">
        <Navbar />
        <div className="pt-10 sm:pt-20 min-h-screen h-full bg-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="px-4 py-10">
              <main>{children}</main>
            </div>
          </div>
        </div>
        <div className="p-4 bg-white border-t border-gray-200">Footer</div>
      </div>
    </div>
  );
}
