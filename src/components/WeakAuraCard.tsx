import { css, styled } from "../theme";
import { WagoWeakAura } from "../types/wago";

interface Props {
  wagoWeakAura: WagoWeakAura;
}

const Card = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 800px;
    border-radius: 10px;
    padding: 10px;
    margin: 10px 0;
    background: ${theme.colors.card};
    color: ${theme.colors.onCard};
  `}
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: baseline;
`;

const Name = styled.h3``;

const Author = styled.p`
  ${({ theme }) => css`
    opacity: ${theme.textOpacity.secondary};
  `}
`;

export const WeakAuraCard: React.FC<Props> = ({ wagoWeakAura }) => {
  const { name, user, versions } = wagoWeakAura;
  const author = user.name;

  return (
    <Card>
      <Header>
        <Name>{name}</Name>
        <Author>by {author}</Author>
      </Header>
    </Card>
  );
};
