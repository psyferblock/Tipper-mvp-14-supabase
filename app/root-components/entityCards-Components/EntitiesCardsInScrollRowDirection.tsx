import EntityCard from "./EntityCard";

export default function EntityCardsInScrollRowDirection(props) {
  const verifiedEntities = props.listOfEntities;
  return (
    <>
      <div className="bg-white grid h-auto grid-flow-col grid-rows-1 gap-4 overflow-x-auto pb-2 sm:gap-3 sm:pb-5">
        {verifiedEntities.map((entity, index) => (
          <div key={index}>
            {" "}
            <EntityCard entity={entity} />
          </div>
        ))}
      </div>
    </>
  );
}
