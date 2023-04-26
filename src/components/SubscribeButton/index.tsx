interface SubscribeButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  return (
    <button type="button" className="h-16 w-[260px] border-none rounded-[2rem] bg-yellow-500 text-gray-900 text-xl font-bold flex items-center justify-center transition-all duration-200 hover:brightness-105 dark:hover:brightness-[0.8]">
      Subscribe now
    </button>
  );
}
