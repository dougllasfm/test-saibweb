import { useLocation } from "react-router-dom";
import {Layout }from "../components/Layout";

import { FormCustomer } from "../components/FormCustomer";

type Props = {
  id: number
  name: string;
  address: string;
  city: string;
  uf: string;
  phone: string;
};

export function UpdateCustomer() {
  const location = useLocation();
  const state = location.state as Props

  return (
    <Layout title="Atualizar registro">
      <FormCustomer
        TECL_ID={state.id}
        TECL_NOME={state.name}
        TECL_ENDERECO={state.address}
        TECL_CIDADE={state.city}
        TECL_UF={state.uf}
        TECL_TELEFONE={state.phone}
      />
    </Layout>
  );
}
