"use client";

import { trpc } from "@/trpc/react";

export function LetsQuerySomethingDuringSSR() {
  const [data] = trpc.app.info.useSuspenseQuery();

  return <pre>{JSON.stringify({ data }, null, 4)}</pre>;
}
