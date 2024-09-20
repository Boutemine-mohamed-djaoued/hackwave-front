"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

export default function Drawer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button className="p-2 bg-accent text-white" onClick={() => setIsOpen(!isOpen)}>
        Open Drawer
      </button>
      <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />
          <Dialog.Content className="absolute left-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform">
            <button className="absolute top-4 right-4" onClick={() => setIsOpen(false)}>
              <IoClose />
            </button>
            <div className="p-4">
              <h2 className="text-xl font-semibold">Drawer Content</h2>
              <p>Here is the content inside the drawer.</p>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
      <div className={`transition-transform duration-300 ${isOpen ? "translate-x-64" : ""}`}>
        <p>Main content inside SideInfo.</p>
      </div>
    </div>
  );
}
