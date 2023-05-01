import { api } from "@/services/api";
import { getStripeJs } from "@/services/stripe-js";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";

interface SubscribeButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const { data: session } = useSession();
  const router = useRouter();

  async function handleSubscribe() {
    if(!session){
      signIn('github')
      return;
    }

    if(session.activeSubscription){
      router.push('/posts');
      return
    }

    // criação da checkout session
    try {
      const response = await api.post('/subscribe')
      const { sessionId } = response.data;

      const stripe = await getStripeJs();
      await stripe.redirectToCheckout({ sessionId })

    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <button type="button" onClick={handleSubscribe} className="h-16 w-[260px] border-none rounded-[2rem] bg-yellow-500 text-gray-900 text-xl font-bold flex items-center justify-center transition-all duration-200 hover:brightness-105 dark:hover:brightness-[0.8]">
      Subscribe now
    </button>
  );
}
