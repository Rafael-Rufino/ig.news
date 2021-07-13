import styles from './styles.module.scss';
export function SubscriberButton(){

  return (
    <button 
        type="button"
        className={styles.subscriberButton}
    >
      Subscribe now
    </button>
  )
}