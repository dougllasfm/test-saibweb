import styled from "styled-components";

type Props = {
  modalEnable: number
}

export const Container = styled.div<Props>`
  display: block; 
  position: fixed;  
  z-index: 1; 
  padding-top: 10rem; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto;  
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4); 
  
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fefefe;
  margin: auto;
  border: 1px solid #888;
  width: 20%;

  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;
    width: 100%;
    background-color: red;

    > h2 {
      font-size: 1.6rem;
      color: var(--white);
    }
  }

  > span {
    margin: 2rem;
    font-size: 1.4rem;
    color: var(--black);
  }

  .actions {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;
    margin: 0.5rem 0;

    > input {
      padding: 0.5rem 1rem;
      color: var(--white);
      background: var(--blue);
      border: 0;
      outline: none;
      border-radius: 0.2rem;
      font-size: 1.4rem;
      cursor: pointer;
    }

    > button {
      padding: 0.5rem 1rem;
      color: var(--white);
      background: var(--red);
      border: 0;
      outline: none;
      border-radius: 0.2rem;
      font-size: 1.4rem;
      cursor: pointer;
    }
  }
`;
