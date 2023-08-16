"use client";

import BasicSearchBar from "@/app/rootComponents/toolsComponents/BasicSearchBar";
import { useEffect, useState } from "react";

import { getEntityMenu } from "@/app/lib/get/getEntityMenu";
import { useEntityContext } from "@/app/context/entityContext/entityContextStore";
import { getMenuCategories } from "@/app/lib/get/getMenuCategories";
import AddNewMenuCategoryModal from "./menuCategoriesComponents/AddNewMenuCategoryModal";
import DeleteMenuCategoryModal from "./menuCategoriesComponents/DeleteMenuCategoryModal";
import MenuCategoryCard from "./menuCategoriesComponents/MenuCategoryCard";
import EditMenuCategoryNameModal from "./menuCategoriesComponents/EditMenuCategoryNameModal";

export default function ManageMenuCategories() {
  // //Owner chooses between pdf and manually inputting items
  const [isPdf, setIsPdf] = useState(false);
  const [menuId, setMenuId] = useState("");
  const [menuCategories, setMenuCategories] = useState(null);

  const { entityId } = useEntityContext();

  useEffect(() => {
    const menuInfo = async () => {
      const menuFromEntity = await getEntityMenu(entityId);
      let menuId = menuFromEntity.id;
      setMenuId(menuId);
      const menuCategoriesData = await getMenuCategories({ menuId: menuId });
      setMenuCategories(menuCategoriesData);
    };
    menuInfo();
  }, [entityId]);

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

  // const firstMenuCategoryIdOfEntity = props.firstMenuCategoryIdOfEntity;

  function handleEditCategoryNameButton(categoryId) {
    setEditNameCategoryId(categoryId);
    menuCategories?.map((category) => {
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

  // const entityId = props.entityId;

  return (
    <>
      <div className="flex w-full flex-col space-y-3 sm:space-y-2 p-2">
        {/* MENU HEADER AND ADD CATEGORY BUTTON */}
        <div className="flex  items-center justify-end">
          {/* ADD CATEGORY BUTTON */}
          <button
            // onClick={handleAddCategoryButton}
            className=" hidden h-10 w-32 rounded-3xl bg-amethyst text-xs text-white hover:bg-amethyst sm:block"
          >
            Add New Category
          </button>
        </div>

        {isPdf ? (
          <div className="mt-1  h-56 rounded-lg border-2 border-dashed border-gray-400 bg-gray-100">
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
                    className="relative cursor-pointer rounded-md bg-gray-100 font-medium text-amethyst focus-within:outline-none focus-within:ring-2 focus-within:ring-amethyst focus-within:ring-offset-2 hover:text-indigo-400"
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
              className="flex w-fit items-center justify-between space-x-1 text-amethyst sm:hidden"
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
              Add New Category
            </button>
            <div>
              {/* MENU CATEGORIES */}
              <div>
                {menuCategories ? (
                  <div className="grid gap-4 sm:grid-cols-4">
                    {menuCategories.map((category, index) => (
                      <div key={index}>
                        <MenuCategoryCard
                          categoryName={category.menu_category_name}
                          categoryId={category.id}
                          // firstMenuCategoryIdOfEntity={firstMenuCategoryIdOfEntity}
                          isMenuCategoryPublic={category.category_public}
                          openEditNameModal={handleEditCategoryNameButton}
                          openDeleteMenuCategoryModal={
                            handleDeleteCategoryButton
                          }
                          menuId={menuId}
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  "here is where the categories will show up"
                )}
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
      />
      <AddNewMenuCategoryModal
        open={isAddCategoryModalOpen}
        closeModal={closeAddCategoryModal}
        menuId={menuId}
      />

      <DeleteMenuCategoryModal
        open={isDeleteMenuCategoryModalOpen}
        closeModal={closeDeleteCategoryModal}
        entityId={entityId}
        categoryIdToDelete={menuCategoryIdToDelete}
      />
    </>
  );
}
