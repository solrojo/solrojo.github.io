import styles from '@/styles/Header.module.css'
import List from '@/components/List'
import socialMediaLinks from '@/constants/socialMediaLinks'

const Header = () => {
  const listsProps = {
    listClass: styles.contacts,
    listItemClass: styles.contactsItem,
    list: socialMediaLinks
  }

  return (
    <nav>
      <List {...listsProps} />
    </nav>
  )
}

export default Header
