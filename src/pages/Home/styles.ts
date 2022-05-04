import styled from "styled-components";

export const InputSearch = styled.input`
  width: 40%;
  padding: 0.8rem 1.2rem;
  margin: 1.2rem 0;
  display: inline-block;
  outline: none;
  border: 0.1rem solid #b3b3b3;
  border-radius: 0.2rem;
  box-sizing: border-box;
  font-size: 1.4rem;

  &:focus {
    border: 1px solid #999999;
    outline: #999999;
  }

  @media (max-width: 640px) {
    font-size: 1.2rem;
  }
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 95%;
  background: var(--primary);

  > tr,
  th {
    background: var(--blue);
    font-size: 1.4rem;
    color: var(--white);
    padding: 0.8rem;
  }

  td {
    text-align: center;
    padding: 0.8rem;
    font-size: 1.4rem;
    color: var(--black);

    > button + button {
      margin-left: 1rem;
    }
    > img {
      border-color: green;
    }
  }

  td:nth-child(4) {
    width: 40px;
  }
  thead,
  tbody {
    border-collapse: collapse;
    border-radius: 1.5rem;
  }
  tr:nth-child(even) {
    background-color: #dbdbdb;
  }
  tr:hover {
    background: #ccddff;
    transition: all ease 100ms;
  }

  @media (max-width: 640px) {
    th,
    td {
      font-size: 1.2rem;
    }

    img {
      width: 1.6rem;
      height: 1.6rem;
    }
  }

  @media (max-width: 520px) {
    th,
    td {
      font-size: 1rem;
    }

    img {
      width: 1.2rem;
      height: 1.2rem;
    }
  }

  @media (max-width: 450px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    thead {
      display: none;
    }

    tbody tr td {
      display: block;
      text-align: right;
    }

    tbody tr {
      margin-bottom: 10px;
      display: block;
      border: 1px solid #dad6eb;
    }
  }
`;
