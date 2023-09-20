"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import updateMenuCategoryName from "@/app/lib/update/updateMenuCategoryName";
import { useRouter } from "next/navigation";
import { useSupabase } from "@/app/supabase-provider";
import { useEntityContext } from "@/app/context/entityContext/entityContextStore";

const EditMenuCategoryNameModal = (props) => {
  const [categoryName, setCategoryName] = useState();
  const { entityUniqueName } = useEntityContext();
  const categoryId = props.categoryId;

  const buttonRef = useRef(null);

  const router = useRouter();

  const currentName = props.currentName;
  useEffect(() => {
    setCategoryName(currentName);
  }, [currentName]);

  const entityId = props.entityId;

  async function handleSaveButton() {
    //After save button in modal is clicked:
    await updateMenuCategoryName(categoryName, categoryId);

    //refresh page by rerouting since we cant use router.refresh since calls to DB are in page.tsx (server component)
    router.push(`entity/${entityUniqueName}/manageEntity/manageMenuCategories`);

    //Close the modal
    props.closeModal();
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

        <div className="fixed inset-0 z-10 ">
          <div className="flex min-h-full items-end justify-center p-3 text-center sm:items-center sm:p-4 ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative mb-52 transform overflow-hidden  rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className=" sm:flex sm:items-start">
                    <div className=" mt-3 w-full text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="mb-4 text-start text-lg font-medium leading-6 text-gray-900"
                      >
                        Edit Category Name
                      </Dialog.Title>

                      <div className="text-start text-xs">Category Name</div>
                      {/* CATEGORY NAME INPUT FIELD */}
                      <input
                        type="text"
                        id="price"
                        className="mb-3 mt-1 block h-12 w-full rounded-md border-gray-300 pl-3 focus:border-amethyst focus:ring-amethyst sm:pl-7 sm:pr-12 sm:text-sm"
                        placeholder="Type new name for category"
                        ref={buttonRef}
                        value={categoryName}
                        onChange={(e) => {
                          setCategoryName(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-end bg-gray-50 px-4 py-3 sm:px-6">
                  <button
                    type="button"
                    className="mr-5 inline-flex justify-center rounded-3xl border border-gray-300 bg-white px-8 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-amethyst focus:ring-offset-2 sm:ml-3 sm:mr-2 sm:mt-0 sm:w-auto sm:text-sm"
                    onClick={props.closeModal}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-3xl border border-transparent bg-amethyst px-9 py-2 text-base font-medium text-white shadow-sm hover:bg-amethyst-shade focus:outline-none focus:ring-2 focus:ring-amethyst focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => handleSaveButton()}
                  >
                    Save
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default EditMenuCategoryNameModal;