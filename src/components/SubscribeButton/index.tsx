import { useSession, signIn } from 'next-auth/client';
import { api } from '../../services/api';
import { getStripeJs } from '../../services/stripe-js';
import styles from './styles.module.scss';

interface SubscriberButtonProps{
  priceId: string;
}

// getServerSideProps (SSR)
// getStaticPros (SSG)
// API routes

export function SubscriberButton({priceId}: SubscriberButtonProps){
  const [session] = useSession();

 async function handleSubscribe(){
    // se nao existe auteticação
    if(!session){
      signIn('github')
        return;
    }
    try{
      const response = await api.post('/subscribe')
      const {sessionId} = response.data;


      const stripe = await getStripeJs();
      await stripe.redirectToCheckout({sessionId});

    }catch (error){
      alert(error.message);
  }

  } 
  

  return (
    <button 
        type="button"
        className={styles.subscriberButton}
        onClick={handleSubscribe}
    >
      Subscribe now
    </button>
  )
}