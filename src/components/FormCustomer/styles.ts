import styled from "styled-components";

export const Form = styled.form`
  width: 95%;
  border: 1px solid #999999;
  padding: 3rem 2rem;
  border-radius: 1rem;
`;

export const FormControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5%;
  margin-bottom: 2rem;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;

    > label {
      font-size: 1.6rem;
    }

    > input {
      width: 100%;
      padding: 1.2rem;
      margin: 0.8rem 0;
      display: inline-block;
      outline: none;
      border: 1px solid #b3b3b3;
      border-radius: 2px;
      box-sizing: border-box;
      font-size: 1.6rem;

      &:focus {
        border: 1px solid #999999;
        outline: #999999;
      }
    }

    > span {
      font-size: 1.2rem;
      color: var(--red);
    }

    @media (max-width: 600px) {
      label,
      input {
        font-size: 1.2rem;
      }
    }
  }
`;

export const FormActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  gap: 0.5rem;

  > input {
    width: 20%;
    background-color: var(--blue);
    color: var(--white);
    padding: 1.4rem 2rem;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all ease 0.2s;
    font-size: 1.6rem;
    font-weight: bold;
  }

  @media (max-width: 600px) {
    input {
      font-size: 1.2rem;
      padding: 1rem;
    }
  }

  @media (max-width: 460px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > input {
      margin: 0;
      width: 100%;
    }
  }
`;
