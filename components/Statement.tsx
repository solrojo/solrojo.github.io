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
      <p
        className={styles.element}
        data-test-id="statement-text"
      >
        {data.title}
      </p>

      <ActionLinkExternal
        href={data.action.link}
        withBg
        testId="statement-action"
      >
        {data.action.text}
      </ActionLinkExternal>
    </div>

    <div
      className={`${styles.image} ${styles[data.imageClass]}`}
      data-test-id="statement-image"
    ></div>
  </div>
)

Statement.propTypes = {
  data: PropTypes.object.isRequired
}

export default Statement
