import FilterItem from './components/FilterItem/FilterItem';

const FilterOptions = () => {
  return (
    <div className="w-full order-2 lg:order-1 flex gap-4">
      <FilterItem isActive title="Activos" items="20" />
      <FilterItem />
    </div>
  );
};

export default FilterOptions;
