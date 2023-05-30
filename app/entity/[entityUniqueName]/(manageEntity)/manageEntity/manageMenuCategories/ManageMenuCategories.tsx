"use client";

import BasicSearchBar from "@/app/root-components/tools-Components/BasicSearchBar";
import { useEffect, useState } from "react";
import EditMenuCategoryNameModal from "../../../(menu)/menu/menuCategories-Components/EditMenuCategoryNameModal";
import AddNewMenuCategoryModal from "../../../(menu)/menu/menuCategories-Components/AddNewMenuCategoryModal";
import DeleteMenuCategoryModal from "../../../(menu)/menu/menuCategories-Components/DeleteMenuCategoryModal";
import MenuCategoryCard from "../../../(menu)/menu/menuCategories-Components/MenuCategoryCard";
import { getEntityMenu } from "@/app/lib/get/getEntityMenu";
import { useEntityContext } from "@/app/context/entityContext/entityContextStore";


export default function ManageMenuCategories() {
  // //Owner chooses between pdf and manually inputting items
  const [isPdf, setIsPdf] = useState(false);
  const menuCategories=["love","breakfast","lunch","dinner","specials"]
  const [menuId,setMenuId]=useState("")

  // const {entityId}= useEntityContext()

  useEffect(()=>{
    const menuInfo = async () =>{
      await getEntityMenu(entityId)
      let menuId=menuInfo.id
      setMenuId(menuId)
    }
    menuInfo()
  },[entityId])

  //Edit Category Name Modal
  const [isEditCategoryNameModalOpen, setIsEditCategoryNameModalOpen] =
    useState(false);
  //State variable to store the menu category name being edited to send to modal
  const [
    categoryNameInEditCategoryNameModal,
    setCategoryNameInEditCategoryNameModal,
  ] = useState();
  //State to know what is the Id of the menu category name having its name edited
  const [editNameCategoryId, setEditNameCategoryId] = useState();
  //Add New Category Modal
  const [isAddCategoryModalOpen, setIsAddCategoryModalOpen] = useState(false);
  //DELETE CATEGORY MODAL
  const [isDeleteMenuCategoryModalOpen, setIsDeleteMenuCategoryModalOpen] =
    useState(false);
  const [menuCategoryIdToDelete, setMenuCategoryIdToDelete] = useState();

  const firstMenuCategoryIdOfEntity = props.firstMenuCategoryIdOfEntity;

  function handleEditCategoryNameButton(categoryId) {
    setEditNameCategoryId(categoryId);
    menuCategories.map((category) => {
      if (category.id == categoryId) {
        setCategoryNameInEditCategoryNameModal(category.menu_category_name);
      }
    });
    setIsEditCategoryNameModalOpen(true);
  }

  function handleDeleteCategoryButton(categoryIdToDelete) {
    setMenuCategoryIdToDelete(categoryIdToDelete);
    setIsDeleteMenuCategoryModalOpen(true);
  }

  const closeEditCategoryNameModal = () => {
    setIsEditCategoryNameModalOpen(false);
  };

  const handleAddCategoryButton = (e) => {
    e.preventDefault();
    setIsAddCategoryModalOpen(true);
  };

  const closeAddCategoryModal = () => {
    setIsAddCategoryModalOpen(false);
  };

  const closeDeleteCategoryModal = () => {
    setIsDeleteMenuCategoryModalOpen(false);
  };

  const entityId = props.entityId;

  return (
    <>
      <div className="flex flex-col space-y-3 sm:space-y-2 w-full">
        {/* MENU HEADER AND ADD CATEGORY BUTTON */}
        <div className="flex  items-center justify-end">
          {/* ADD CATEGORY BUTTON */}
          <button
            onClick={handleAddCategoryButton}
            className="hidden sm:block w-32 h-10 hover:bg-blue-600 text-xs rounded-3xl bg-blue-500 text-white -mt-2"
          >
            Add New Category
          </button>
        </div>

        {isPdf ? (
          <div className="bg-gray-100  h-56 rounded-lg border-2 border-dashed border-gray-400 mt-1">
            <div className=" flex justify-center rounded-md px-6 pt-[52px] ">
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-gray-100 font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-400"
                  >
                    <span className="">Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PDF, JPG up to 10MB</p>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* "SEARCH FOR A CATEGORY" SEARCH BAR */}
            <BasicSearchBar placeHolder="Seach for a category" />
            {/* ADD CATEGORY FOR MOBILE */}
            <button
              onClick={handleAddCategoryButton}
              className="sm:hidden w-fit text-blue-500 flex items-center justify-between space-x-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              Add New Category
            </button>
            <div>
              {/* MENU CATEGORIES */}
              <div className="grid sm:grid-cols-4 gap-4">
                {menuCategories.map((category,index) => (
                  <MenuCategoryCard
                    categoryName={category.menu_category_name}
                    categoryId={category.id}
                    firstMenuCategoryIdOfEntity={firstMenuCategoryIdOfEntity}
                    isMenuCategoryPublic={category.is_menu_category_public}
                    openEditNameModal={handleEditCategoryNameButton}
                    openDeleteMenuCategoryModal={handleDeleteCategoryButton}
                    entityId={entityId}
                  />
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}

      {/* MODALS */}
      <EditMenuCategoryNameModal
        open={isEditCategoryNameModalOpen}
        closeModal={closeEditCategoryNameModal}
        currentName={categoryNameInEditCategoryNameModal}
        categoryId={editNameCategoryId}
        entityId={entityId}
      /> <div>edit modal</div>
      <AddNewMenuCategoryModal
        open={isAddCategoryModalOpen}
        closeModal={closeAddCategoryModal}
        entityId={entityId}
      /><div>add menu catefory modal</div>

      <DeleteMenuCategoryModal
        open={isDeleteMenuCategoryModalOpen}
        closeModal={closeDeleteCategoryModal}
        entityId={entityId}
        categoryIdToDelete={menuCategoryIdToDelete}
      /> <div>delete menu category </div>
    </>
  );
}
