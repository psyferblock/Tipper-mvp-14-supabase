import EntityCard from "./EntityCard";

export default function EntityCardsInScrollRowDirection(props) {
  const entitiesPerIndustry = props.listOfEntities.filter(
    (entity) => entity.industry_id == props.industryId
  );

  const verifiedEntities = entitiesPerIndustry.filter(
    (entity) => entity.is_verified == true
  );

  return (
    <>
      <div className="grid grid-rows-1 grid-flow-col gap-4 sm:gap-3 pb-2 sm:pb-5 overflow-x-auto">
        {verifiedEntities.map((entity) => (
          <EntityCard entity={entity} />
        ))}
      </div>
    </>
  );
}
