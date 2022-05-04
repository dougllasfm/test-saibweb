import { useState } from "react";
import api from "../../services/api";
import { Container, Content } from "./styles";
import type { Customers } from "../../pages/Home"

interface Props {
  onRemoveCustomer: (arg0: number) => void;
  onUpdateList: (type: Customers[]) => void;
  customerId: number;
}

export function ModalConfirmation({ onRemoveCustomer, onUpdateList, customerId }: Props) {
  const [modalEnable, setModalEnable] = useState(1);

  function handleModal() {
    setModalEnable(0);
    onRemoveCustomer(0);
  }

  async function deleteCustomer() {
    try {
      const res = await api.delete(`/v1/teste/cliente/${customerId}`);
      if (res.data.sucess) {
        setModalEnable(0);
        onRemoveCustomer(0);
        const response = await api.get("/v1/teste/clientes");
        onUpdateList(response.data.data)
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container modalEnable={modalEnable}>
      <Content>
        <div className="title">
          <h2>Remover cliente</h2>
        </div>

        <span>Tem certeza que deseja excluir?</span>
        <div className="actions">
          <button onClick={handleModal}>Cancelar</button>
          <input type="button" onClick={deleteCustomer} value="Excluir" />
        </div>
      </Content>
    </Container>
  );
}
