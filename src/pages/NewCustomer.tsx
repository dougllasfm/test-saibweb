import {Layout} from "../components/Layout";

import { FormCustomer } from "../components/FormCustomer";

export function NewCustomer() {
  return (
    <Layout title="Novo registro">
      <FormCustomer
        TECL_NOME={""}
        TECL_ENDERECO={""}
        TECL_CIDADE={""}
        TECL_UF={""}
        TECL_TELEFONE={""}
      />
    </Layout>
  );
}
