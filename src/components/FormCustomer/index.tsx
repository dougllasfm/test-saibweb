import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import api from "../../services/api";

import { Form, FormControl, FormActions } from "./styles";
import { useNavigate } from "react-router-dom";

type Inputs = {
  TECL_ID?: number;
  TECL_NOME: string;
  TECL_ENDERECO: string;
  TECL_CIDADE: string;
  TECL_UF: string;
  TECL_TELEFONE: string;
};

const schema = yup
  .object({
    TECL_NOME: yup.string().required(),
    TECL_ENDERECO: yup.string().required(),
    TECL_CIDADE: yup.string().required(),
    TECL_UF: yup.string().required(),
    TECL_TELEFONE: yup.string().required(),
  })
  .required();

export function FormCustomer(props: Inputs) {
  const navigation = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      TECL_ID: props.TECL_ID,
    },
  });

  async function onSubmit(data: Inputs) {
    try {
      if (!data.TECL_ID) {
        const res = await api.post("/v1/teste/cliente", data);
        if (res.data.sucess) {
          navigation("/");
        }
      } else {
        const res = await api.put("/v1/teste/cliente", data);
        if (res.data.sucess) {
          navigation("/");
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <div>
          <label htmlFor="fname">Nome</label>
          <input
            type="text"
            id="fname"
            placeholder="Nome"
            {...register("TECL_NOME", { value: props.TECL_NOME })}
          />
          {errors.TECL_NOME && <span>Nome é obrigatório! </span>}
        </div>

        <div>
          <label htmlFor="faddress">Endereço</label>
          <input
            type="text"
            id="faddress"
            placeholder="Endereço"
            {...register("TECL_ENDERECO", { value: props.TECL_ENDERECO })}
          />
          {errors.TECL_ENDERECO && <span>Informe um endereço!</span>}
        </div>
      </FormControl>
      <FormControl>
        <div>
          <label htmlFor="fcity">Cidade</label>
          <input
            type="text"
            id="fcity"
            placeholder="Cidade"
            {...register("TECL_CIDADE", { value: props.TECL_CIDADE })}
          />
          {errors.TECL_CIDADE && <span>Informe a cidade!</span>}
        </div>
        <div>
          <label htmlFor="fUF">UF</label>
          <input
            type="text"
            id="fUF"
            placeholder="UF"
            maxLength={2}
            {...register("TECL_UF", { value: props.TECL_UF })}
          />
          {errors.TECL_UF && <span>Informe o estado!</span>}
        </div>
        <div>
          <label htmlFor="fphone">Telefone</label>
          <input
            type="text"
            id="fphone"
            placeholder="Telefone"
            {...register("TECL_TELEFONE", { value: props.TECL_TELEFONE })}
          />
          {errors.TECL_TELEFONE && <span>Informe seu telefone!</span>}
        </div>
      </FormControl>
      <FormActions>
        <input type="button" onClick={() => reset()} value="Cancelar" />
        <input
          type="submit"
          value={props.TECL_ID ? "Atualizar" : "Cadastrar"}
        />
      </FormActions>
    </Form>
  );
}
