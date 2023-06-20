"use client";

import BasicSearchBar from "@/app/root-components/tools-Components/BasicSearchBar";
import ToggleButton from "@/app/root-Components/tools-Components/ToggleButton";
import { lazy, Suspense, useState } from "react";
import ManageMenuItemsMobile from "../menuItemsComponents/ManageMenuItemsMobile";
import Link from "next/link";
import Image from "next/image";
import AddNewItemModal from "../menuItemsComponents/AddNewItemModal";
import EditItemModal from "../menuItemsComponents/EditItemModal";
import { useSearchParams } from "next/navigation";
import DeleteMenuItemModal from "../menuItemsComponents/DeleteMenuItemModal";
import { useSupabase } from "@/app/supabase-provider";
import updateIsMenuItemPublic from "@/app/lib/update/updateIsMenuItemPublic";
import { useEntityContext } from "@/app/context/entityContext/entityContextStore";

export default function ManageMenuItems({
  categoryItems,
  menuCategoryId,
  entityUniqueName,
  categoryName,
}) {
  const searchParams = useSearchParams();
  console.log("entityUniqueName", entityUniqueName);

  const { entityId } = useEntityContext();

  //Add New Item Modal
  const [isAddItemModalOpen, setIsAddItemModalOpen] = useState(false);

  //DELETE ITEM MODAL
  const [isDeleteItemModalOpen, setIsDeleteItemModalOpen] = useState(false);
  const [itemIdToDelete, setItemIdToDelete] = useState();

  const handleAddItemButton = (e) => {
    e.preventDefault();
    setIsAddItemModalOpen(true);
  };

  const closeAddCategoryModal = () => {
    setIsAddItemModalOpen(false);
  };

  //Edit Item Modal
  const [isEditItemModalOpen, setIsEditItemModalOpen] = useState(false);

  //Storing the Id of the menu item being edited
  const [menuItemBeingEditedId, setMenuItemBeingEditedId] = useState();
  //Storing the item being edited to send it to the modal
  const [itemBeingEdited, setItemBeingEdited] = useState();

  //Function used to find the item being edited and its Id
  function handleEditItemButton(menuItemId) {
    setMenuItemBeingEditedId(menuItemId);
    categoryItems.map((item) => {
      if (item.id == menuItemId) {
        setItemBeingEdited(item);
      }
    });
    setIsEditItemModalOpen(true);
  }

  function handleRemoveItemButton(menuItemIdToDelete) {
    setItemIdToDelete(menuItemIdToDelete);
    setIsDeleteItemModalOpen(true);
  }

  //Function to close the Edit Modal
  const closeEditItemModal = () => {
    setIsEditItemModalOpen(false);
  };

  //Function to close the Edit Modal
  const closeDeleteItemModal = () => {
    setIsDeleteItemModalOpen(false);
  };

  let menuItemIdToggled;
  async function handleToggleButton(boolean) {
    await updateIsMenuItemPublic(boolean, menuItemIdToggled);
  }

  return (
    <>
      {/* DESKTOP VERSION */}
      <div className=" block w-full sm:h-fit sm:min-h-screen">
        <div className=" w-full flex-col space-y-3 sm:flex">
          <div className="flex h-fit flex-col rounded-lg bg-white p-4 drop-shadow-lg">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                {/* CATEGORY NAME HEADER */}
                <Link
                  href={`/entity/${entityUniqueName}/manageEntity/manageMenuCategories`}
                  className="flex items-center space-x-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                  <Link
                    href={`entity/${entityUniqueName}/manageEntity/manageMenuCategories`}
                    className="text-3xl font-bold"
                  >
                    {categoryName}
                  </Link>
                </Link>
                {/* ADD Menu Item BUTTON */}
                {/* DESKTOP */}
                <button
                  onClick={handleAddItemButton}
                  className=" -mt-2 hidden h-10 w-32 rounded-3xl bg-blue-500 text-xs text-white hover:bg-blue-600 sm:block"
                >
                  Add Item
                </button>
                {/* MOBILE */}
                <button
                  onClick={handleAddItemButton}
                  className="mt-1 flex items-center justify-end space-x-1 text-sm text-blue-500 sm:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                  Add Item
                </button>
              </div>

              {/* SEARCH CATEGORY SEARCH BAR */}
              <BasicSearchBar placeHolder="Seach for an item" />
              <div id="one" className="flex pb-6">
                <table id="two" className="w-full table-fixed">
                  <thead>
                    <tr>
                      <th className="pb-4 pr-96">Item</th>
                      <th className="pb-4 pr-96">Publish</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-300 text-gray-500">
                    {categoryItems.map((item, index) => (
                      <tr key={index}>
                        <td>
                          <div className="my-3 flex items-center">
                            <td>
                              <div className="relative mr-3 h-10 w-10 overflow-hidden rounded-full ring-2 ring-white">
                                <Image
                                  src={
                                    item.item_picture_url
                                      ? item.item_picture_url
                                      : ""
                                  }
                                  alt=""
                                  fill
                                />
                              </div>
                            </td>
                            <td>{item.item_name}</td>
                          </div>
                        </td>
                        <td className="my-3 flex items-center justify-between pt-0 sm:my-3 sm:pt-1">
                          <div className="flex items-center space-x-1 pt-2 sm:space-x-2">
                            <ToggleButton
                              switchedOn={item.is_menu_item_public}
                              handleToggleButton={(booleanProp) => {
                                menuItemIdToggled = item.id;
                                handleToggleButton(booleanProp);
                              }}
                            />
                            <div id="four" className="pb-1">
                              {item.is_menu_item_public ? "Yes" : "No"}
                            </div>
                          </div>
                          <div className="flex items-center space-x-1 text-blue-600 sm:space-x-10">
                            <button
                              className="hidden sm:block"
                              onClick={() => {
                                handleEditItemButton(item.id);
                              }}
                            >
                              Edit
                            </button>
                            <button
                              className="hidden sm:block"
                              onClick={() => {
                                handleRemoveItemButton(item.id);
                              }}
                            >
                              Remove
                            </button>

                            {/* EDIT ICON */}
                            <button
                              className="pt-1 sm:hidden"
                              onClick={() => {
                                handleEditItemButton(item.id);
                              }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="h-6 w-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                />
                              </svg>
                            </button>

                            {/* TRASH ICON */}
                            <button
                              className="pt-1 sm:hidden"
                              onClick={() => {
                                handleRemoveItemButton(item.id);
                              }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="m-1 h-6 w-6 text-blue-500"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //////////////////////////////////////////////////////////////////////////// */}

      {/* //THOSE 2 MODALS ARE AVAILABLE ON DESKTOP, FOR MOBILE VERSION THE EDIT ITEM MODAL IS IN THE "MANAGE MENU ITEMS MOBILE COMPONENT" */}

      <AddNewItemModal
        open={isAddItemModalOpen}
        closeModal={closeAddCategoryModal}
        categoryName={categoryName}
        menuCategoryId={menuCategoryId}
        entityId={entityId}
        entityUniqueName={entityUniqueName}
      />

      <EditItemModal
        open={isEditItemModalOpen}
        closeModal={closeEditItemModal}
        item={itemBeingEdited}
        menuItemBeingEditedId={menuItemBeingEditedId}
        categoryName={categoryName}
        menuCategoryId={menuCategoryId}
        entityId={entityId}
        entityUniqueName={entityUniqueName}
      />

      <DeleteMenuItemModal
        open={isDeleteItemModalOpen}
        closeModal={closeDeleteItemModal}
        itemIdToDelete={itemIdToDelete}
        categoryName={categoryName}
        menuCategoryId={menuCategoryId}
        entityId={entityId}
        entityUniqueName={entityUniqueName}
      />
    </>
  );
}
