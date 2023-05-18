import EntityCard from "./EntityCard";

export default function EntityCardsInGridDirection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <EntityCard />
      <EntityCard />
      <EntityCard />
      <EntityCard />
      <EntityCard />
      <EntityCard />
    </div>
  );
}
