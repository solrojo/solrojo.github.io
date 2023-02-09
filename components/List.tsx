import PropTypes from 'prop-types'
import { LinkObject, ListsProps } from '@/constants/types'
import { ActionLinkExternal } from '@/components/Action'

const List = ({ list, listClass, listItemClass }: ListsProps) => (
  <ul className={listClass}>
    {list.map((item: LinkObject) =>
        <li key={item.id}>
          <ActionLinkExternal
            href={item.href}
            cssClass={listItemClass}
          >
            {item.text}
          </ActionLinkExternal>
        </li>
    )}
  </ul>
)

List.propTypes = {
  list: PropTypes.array.isRequired,
  listClass: PropTypes.string.isRequired,
  listItemClass: PropTypes.string.isRequired
}

export default List
