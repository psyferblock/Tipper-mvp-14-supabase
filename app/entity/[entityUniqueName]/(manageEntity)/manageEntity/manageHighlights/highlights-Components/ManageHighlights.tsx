"use client";
import ToggleButton from "@/app/root-components/tools-Components/ToggleButton";
import deleteHighlight from "@/app/lib/delete/deleteHighlight";
import updateIsHighlightPublic from "@/app/lib/update/updateIsHighlightPublic";
import { useState } from "react";
import AddNewHighlightModal from "./AddNewHighlightModal";
import DeleteHighlightModal from "./DeleteHighlightModal";
import EditHighlightModal from "./EditHighlightModal";
import { useEntityContext } from "@/app/context/entityContext/entityContextStore";

export default function ManageHighlights({ listOfHighlights }) {
  const { entityId } = useEntityContext();
  //Add new highlight modal
  const [isAddHighlightModalOpen, setIsAddHighlightModalOpen] = useState(false);
  const [isEditHighlightModalOpen, setIsEditHighlightModalOpen] =
    useState(false);
  const [isDeleteHighlightModalOpen, setIsDeleteHighlightModalOpen] =
    useState(false);
  //Storing the Id of the highlight being edited
  const [highlightBeingEditedId, setHighlightBeingEditedId] = useState();
  //Storing the item being edited to send it to the modal
  const [highlightObjectBeingEdited, setHighlightObjectBeingEdited] =
    useState();
  //Storing the id of the highlight to be deleted and passing it as props to the delete highlight modal
  const [highlightIdToDelete, setHighlightIdToDelete] = useState();

  const handleAddHighlightButton = (e) => {
    e.preventDefault();
    setIsAddHighlightModalOpen(true);
  };

  const closeHighlightModal = () => {
    setIsAddHighlightModalOpen(false);
  };

  //EDIT HIGHLIGHT MODAL
  const closeEditHighlightModal = () => {
    setIsEditHighlightModalOpen(false);
  };

  //DELETE HIGHLIGHT MODAL
  const closeDeleteHighlightModal = () => {
    setIsDeleteHighlightModalOpen(false);
  };

  //Function used to find the highlight being edited and its Id
  function handleEditHighlightButton(highlightId) {
    setHighlightBeingEditedId(highlightId);
    listOfHighlights.map((highlight) => {
      if (highlight.id == highlightId) {
        setHighlightObjectBeingEdited(highlight);
      }
    });
    setIsEditHighlightModalOpen(true);
  }

  function handleRemoveHighlightButton(highlightId) {
    setHighlightIdToDelete(highlightId);
    setIsDeleteHighlightModalOpen(true);
  }

  //Storing the highlight Id that is being toggled to public or not public
  let highlightIdToggled;
  async function handleToggleButton(boolean) {
    await updateIsHighlightPublic(boolean, highlightIdToggled);
  }

  return (
    <>
      <div className="min-h-screen bg-gray-300 py-4 sm:h-fit sm:min-h-screen sm:px-0 sm:py-0">
        <div className="flex h-fit flex-col rounded-lg bg-white p-3 drop-shadow-lg sm:p-4">
          {/* HIGHLIGHTS and ADD HIGHLIGHTS ROW */}
          <div className="flex pb-6">
            <div className="hidden grow text-xl font-bold sm:block">
              Highlights
            </div>
            <button
              onClick={handleAddHighlightButton}
              className="flex w-full items-center justify-end space-x-1 text-amethyst "
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
              Add Highlight
            </button>
          </div>

          {/* DESKTOP HIGHLIGHTS COMPONENT */}
          <div className="sm:block">
            <table className="w-full table-fixed">
              <thead>
                <tr>
                  <th className="pb-4 pr-96">Highlight</th>
                  <th className=" pb-4 pr-96">Publish</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300 text-gray-500">
                {listOfHighlights.map((highlight, index) => (
                  <tr key={index}>
                    <td>{highlight.highlight_name}</td>
                    <td className="flex items-center justify-between">
                      <div className="my-3 flex items-center space-x-1 pt-1 sm:my-3 sm:space-x-2">
                        <ToggleButton
                          switchedOn={highlight.is_highlight_public}
                          handleToggleButton={(booleanProp) => {
                            highlightIdToggled = highlight.id;
                            handleToggleButton(booleanProp);
                          }}
                        />
                        toggle button
                        <div className="pb-1">
                          {highlight.is_highlight_public ? "Yes" : "No"}
                        </div>
                      </div>
                      <div className="flex items-center space-x-1 text-amethyst sm:space-x-10">
                        <button
                          className="hidden sm:block"
                          onClick={() => {
                            handleEditHighlightButton(highlight.id);
                          }}
                        >
                          Edit
                        </button>

                        <button
                          className="hidden sm:block"
                          onClick={() =>
                            handleRemoveHighlightButton(highlight.id)
                          }
                        >
                          Delete
                        </button>

                        {/* EDIT ICON */}
                        <button
                          className="sm:hidden"
                          onClick={() => {
                            handleEditHighlightButton(highlight.id);
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
                          className="sm:hidden"
                          onClick={() =>
                            handleRemoveHighlightButton(highlight.id)
                          }
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="m-1 h-6 w-6 text-amethyst"
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

          {/* MOBILE VERSION HIGHLIGHT TABLE */}
          <div className="grid grid-cols-2 sm:hidden ">
            <div>
              <div className="pb-2 font-bold">Highlight</div>
              <div className="divide-y">
                <div className="py-2 text-gray-500">Events</div>
                <div className="py-2 text-gray-500">Events</div>
                <div className="py-2 text-gray-500">
                  <div className="... truncate">Our Customers ugadgub</div>
                </div>
              </div>
            </div>
            <div className="grid overflow-x-auto pb-4">
              <div className="flex space-x-7">
                <div className="mb-2 font-bold">Publish</div>
                {/* <div className="font-bold mb-2">Edit/Remove</div> */}
              </div>
              <div className="divide-y">
                <div className="flex items-center space-x-1 pb-1">
                  <div className="flex w-20 items-center space-x-2 pt-2">
                    <ToggleButton />
                    <div className="pb-1 text-gray-500">Yes</div>
                  </div>
                  <div className="flex items-center space-x-4 pt-1 text-amethyst">
                    <button>Edit</button>
                    <button>Remove</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AddNewHighlightModal
        open={isAddHighlightModalOpen}
        closeModal={closeHighlightModal}
        entityId={entityId}
      />
      <EditHighlightModal
        open={isEditHighlightModalOpen}
        closeModal={closeEditHighlightModal}
        highlight={highlightObjectBeingEdited}
        highlightBeingEditedId={highlightBeingEditedId}
        entityId={entityId}
      />
      <DeleteHighlightModal
        open={isDeleteHighlightModalOpen}
        closeModal={closeDeleteHighlightModal}
        highlightIdToDelete={highlightIdToDelete}
        entityId={entityId}
      />
    </>
  );
}
