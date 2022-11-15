//Style
import styles from './loginTitle.module.scss'

export default function LoginTitle(props) {
    // const {items} = props;

    return (
      <div className={styles.centerTitle}>
        <h2 className={styles.loginTitleHeading}>
          {props.titleText}
        </h2>
      </div>
    );
  }