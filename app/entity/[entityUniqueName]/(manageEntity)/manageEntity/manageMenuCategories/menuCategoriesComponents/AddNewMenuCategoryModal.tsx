"use client";

import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import createMenuCategory from "@/app/lib/create/createMenuCategory";
import { useRouter } from "next/navigation";
import { useSupabase } from "@/app/supabase-provider";
import { useEntityContext } from "@/app/context/entityContext/entityContextStore";

const AddNewMenuCategoryModal = (props) => {
  //State
  const [categoryName, setCategoryName] = useState<string | undefined>();

  //Apply "buttonRef" to field to decide which section is focused on when modal is opened
  const buttonRef = useRef(null);
  const { entityUniqueName } = useEntityContext();
  const menuId = props.menuId;

  const router = useRouter();

  async function handlePublishButton() {
    //After published button in modal is clicked:
    await createMenuCategory({
      categoryName: categoryName,
      isPublic: true,
      menuId: menuId,
    });

    props.closeModal();

    //refresh page by rerouting since we cant use router.refresh since calls to DB are in page.tsx (server component)
    router.push(`entity/${entityUniqueName}/manageEntity/manageMenuCategories`);
  }

  async function handleSaveAsDraftButton() {
    //After published button in modal is clicked:
    await createMenuCategory({
      categoryName: categoryName,
      isPublic: false,
      menuId: menuId,
    });

    props.closeModal();

    //refresh page by rerouting since we cant use router.refresh since calls to DB are in page.tsx (server component)
    router.push(`entity/${entityUniqueName}/manageEntity/manageMenuCategories`);
  }

  return (
    <Transition.Root show={props.open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={buttonRef}
        onClose={props.closeModal}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-50">
          <div className="flex min-h-full items-end justify-center p-0 text-center sm:items-center sm:p-4 ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative mb-52 transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:rounded-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className=" sm:flex sm:items-start">
                    <div className=" mt-3 w-full text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <div className="mb-5 flex items-center justify-between sm:mb-0">
                        <Dialog.Title
                          as="h3"
                          className="text-start text-lg font-medium leading-6 text-gray-900 sm:mb-4 sm:text-center"
                        >
                          Add New Category
                        </Dialog.Title>
                        <button
                          onClick={props.closeModal}
                          className="sm:hidden"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-6 w-6 text-gray-600"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="flex justify-between text-xs">
                        <p>Category Name</p>
                        <p className="text-gray-400">150</p>
                      </div>
                      {/* CATEGORY NAME INPUT FIELD */}
                      <input
                        type="text"
                        name="tags"
                        id="price"
                        className="mb-3 mt-1 block h-12 w-full rounded-md border-gray-300 pl-4 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Type new category name"
                        ref={buttonRef}
                        onChange={(e) => {
                          setCategoryName(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end space-x-5 bg-gray-50 px-4 py-3 sm:justify-between sm:space-x-0 sm:px-6 ">
                  <div className="hidden sm:block">
                    <button onClick={props.closeModal}>Cancel</button>
                  </div>
                  <div className="space-x-3 sm:space-x-3">
                    <button
                      type="button"
                      className="mt-3 inline-flex justify-center rounded-3xl border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:mt-0 sm:w-auto sm:text-sm"
                      onClick={() => handleSaveAsDraftButton()}
                    >
                      Save as Draft
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-3xl border border-transparent bg-blue-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => handlePublishButton()}
                    >
                      Publish
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
export default AddNewMenuCategoryModal;
