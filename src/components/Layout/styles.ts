import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;

  background: var(--red);
  width: 100%;
  height: 6rem;

  padding: 0.5rem 2rem;

  > h1 {
    font-size: 2.4rem;
    font-weight: 400;
    color: var(--white);
  }

  button {
    border: 0;
    outline: none;
    cursor: pointer;
    background: none;
  }

  @media (max-width: 640px) {
    height: 5rem;

    > h1 {
      font-size: 1.6rem;
    }
  }

  @media (max-width: 450px) {
    height: 4rem;

    > h1 {
      font-size: 1.2rem;
    }

    img {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 2rem;
  width: 100%;

  button {
    border: 0;
    outline: none;
    cursor: pointer;
    background: none;
  }
`;
