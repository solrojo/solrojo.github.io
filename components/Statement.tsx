import PropTypes from 'prop-types'
import { ActionLinkExternal } from '@/components/Action'
import styles from '@/styles/Statement.module.css'
import { StatementLangObject } from '@/constants/types'

type Props = {
  data: StatementLangObject
}

const Statement = ({ data }: Props) => (
  <div className={styles.container}>
    <div className={styles.text}>
      <p className={styles.element}>{data.title}</p>
      <ActionLinkExternal href={data.action.link} withBg>
        {data.action.text}
      </ActionLinkExternal>
    </div>

    <div className={`${styles.image} ${styles[data.imageClass]}`}></div>
  </div>
)

Statement.propTypes = {
  data: PropTypes.object.isRequired
}

export default Statement
