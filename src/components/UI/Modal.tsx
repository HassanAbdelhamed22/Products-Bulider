import {
  Dialog,
  DialogTitle,
  Transition,
} from "@headlessui/react";
import { Fragment, ReactNode } from "react";

interface IProps {
  isOpen: boolean;
  closeModal: () => void;
  title?: string;
  children: ReactNode;
}

export default function Modal({ closeModal, isOpen, title, children }: IProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black bg-opacity-30">
            <div className="flex min-h-full items-center justify-center p-4">
              <Dialog.Panel className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl">
                {title && (
                  <DialogTitle
                    as="h3"
                    className="text-base font-medium text-black"
                  >
                    {title}
                  </DialogTitle>
                )}

                <div className="mt-4">{children}</div>
              </Dialog.Panel>
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}
