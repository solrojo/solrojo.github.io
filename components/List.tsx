import PropTypes from "prop-types";
import { LinkObject, ListsProps } from "@/constants/types";
import { ActionLinkExternal } from "@/components/Action";

const List = ({
  list,
  listClass,
  listItemClass,
  listRole,
  itemRole,
}: ListsProps) => (
  <ul className={listClass} role={listRole}>
    {list.map((item: LinkObject) => (
      <li key={item.id} role={itemRole} data-test-id={itemRole}>
        <ActionLinkExternal href={item.href} cssClass={listItemClass}>
          {item.text}
        </ActionLinkExternal>
      </li>
    ))}
  </ul>
);

List.propTypes = {
  list: PropTypes.array.isRequired,
  listClass: PropTypes.string.isRequired,
  listItemClass: PropTypes.string.isRequired,
  listRole: PropTypes.string,
  itemRole: PropTypes.string,
};

export default List;
