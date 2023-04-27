import { useSession, signIn } from "next-auth/react";

interface SubscribeButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const { data: session } = useSession();

  function handleSubscribe() {
    if(!session){
      signIn('github')
      return;
    }

    // criação da checkout session

  }

  return (
    <button type="button" onClick={handleSubscribe} className="h-16 w-[260px] border-none rounded-[2rem] bg-yellow-500 text-gray-900 text-xl font-bold flex items-center justify-center transition-all duration-200 hover:brightness-105 dark:hover:brightness-[0.8]">
      Subscribe now
    </button>
  );
}
