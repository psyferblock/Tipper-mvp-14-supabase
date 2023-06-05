import EntityCard from "./EntityCard";

export default function EntityCardsInScrollRowDirection(props) {
 
  return (
    <>
      <div className="grid grid-rows-1 grid-flow-col gap-4 sm:gap-3 pb-2 sm:pb-5 overflow-x-auto">
        {/* {verifiedEntities.map((entity,index) => (
          <div> key={index}

          <EntityCard entity={entity} />
          </div>
        ))} */}
        verified entities cards 
      </div>
    </>
  );
}
