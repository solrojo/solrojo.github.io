import PropTypes from 'prop-types'
import { LinkObject, ListsProps } from '@/constants/types'

function List(props: ListsProps) {
  return (
    <ul className={props.listClass}>
      {props.list.map((item: LinkObject) =>
          <li key={item.id} className={props.listItemClass}>
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
            >
              {item.text}
            </a>
          </li>
      )}
    </ul>
  )
}

List.propTypes = {
  list: PropTypes.array.isRequired,
  listClass: PropTypes.string,
  listItemClass: PropTypes.string
}

export default List
