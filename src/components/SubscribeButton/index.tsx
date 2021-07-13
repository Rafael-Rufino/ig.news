import styles from './styles.module.scss';

interface SubscriberButtonProps{
  priceId: string;
}


export function SubscriberButton({priceId}: SubscriberButtonProps){

  return (
    <button 
        type="button"
        className={styles.subscriberButton}
    >
      Subscribe now
    </button>
  )
}