import classnames from 'classnames';
interface FilterItemProps {
  isActive?: boolean;
  title?: string;
  items?: string;
}
const FilterItem: React.FC<FilterItemProps> = ({
  isActive = false,
  title = 'Activos',
  items = 12,
}) => {
  return (
    <div
      className={classnames(
        'px-4 py-2 max-w-[130px] flex border-1 rounded-lg cursor-pointer gap-2 items-center justify-start lg:max-w-[130px] ',
        isActive ? 'bg-blue-100 border-none' : 'bg-[rgba(255,255,255,0.5)]',
      )}
    >
      <div
        className={classnames(
          'w-6 h-6 flex  items-center justify-center rounded',
          isActive ? 'bg-blue-600' : ' bg-slate-300',
        )}
      >
        <p
          className={classnames(
            ' text-sm',
            !isActive ? 'text-slate-800' : 'text-white',
          )}
        >
          {items}
        </p>
      </div>
      <div>
        <p
          className={classnames(isActive ? 'text-blue-800' : 'text-slate-900')}
        >
          {title}
        </p>
      </div>
    </div>
  );
};

export default FilterItem;
