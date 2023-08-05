import GridLoader from 'react-spinners/GridLoader';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 400;
`;

function Loader() {
  return (
    <Container>
      <GridLoader
        color="#7B61FF"
        speedMultiplier={0.9}
        loading="true"
        data-testid="loader"
        height="80"
        width="80"
        radius="12.5"
      />
    </Container>
  );
}

export default Loader;
