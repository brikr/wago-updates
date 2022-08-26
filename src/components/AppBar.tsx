import { css, styled } from "../theme";

const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: 0 10px;

    background: ${theme.colors.appBar};
    color: ${theme.colors.onAppBar};

    display: flex;
    flex-direction: row;
    align-items: baseline;
  `}
`;

export const AppBar: React.FC = ({}) => {
  return (
    <Wrapper>
      <h1>Wago updates</h1>
    </Wrapper>
  );
};
