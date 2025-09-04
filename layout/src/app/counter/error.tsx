"use client";
// this must be client component for error.tsx
import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {

    // Recovering from error
    const router = useRouter();
    const reload = () => {
        startTransition(() => {
            router.refresh();
            reset();
        })
    }

  return (
    <div>
      <p>{error.message}</p>
      <button onClick={() => reload()}>Try Again</button>
    </div>
  );
}
