import { useEffect, useState } from "react";
import { getWagoWeakAura } from "../api/wago";
import { styled } from "../theme";
import { WagoWeakAura } from "../types/wago";
import { WeakAuraCard } from "./WeakAuraCard";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface Props {
  slugs: string[];
}

export const WeakAuraCardList: React.FC<Props> = ({ slugs }) => {
  const [wagoWeakAuras, setWagoWeakAuras] = useState<WagoWeakAura[]>([]);

  useEffect(() => {
    (async () => {
      const wagoResponses = await Promise.all(
        slugs.map(async (slug) => {
          return await getWagoWeakAura(slug);
        })
      );

      setWagoWeakAuras(wagoResponses);
    })();
  }, [slugs]);

  return (
    <Wrapper>
      {wagoWeakAuras.map((wa) => (
        <WeakAuraCard key={wa.slug} wagoWeakAura={wa} />
      ))}
    </Wrapper>
  );
};
