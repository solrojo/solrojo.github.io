import PropTypes from 'prop-types'
import { LinkObject, ListsProps } from '@/constants/types'

const List = ({ list, listClass, listItemClass }: ListsProps) => (
  <ul className={listClass}>
    {list.map((item: LinkObject) =>
        <li key={item.id}>
          <a
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className={listItemClass}
          >
            {item.text}
          </a>
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
