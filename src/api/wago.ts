import { WagoWeakAura } from "../types/wago";

export async function getWagoWeakAura(id: string): Promise<WagoWeakAura> {
  const params = new URLSearchParams({ id });

  const response = await fetch(
    `https://data2.wago.io/lookup/wago?${params.toString()}`,
    {
      method: "GET",
    }
  );

  return await response.json();
}
