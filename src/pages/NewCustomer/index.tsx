import { ReactNode } from 'react';
import Layout from '../../components/Layout';

import { Container, Form } from './styles';

interface NewCustomerProps {
  children: ReactNode;
}

function NewCustomer({ children }: NewCustomerProps) {
  return (
    <Layout title="Novo registro">
      <Form>
        
      </Form>
    </Layout>
  );
};

export default NewCustomer;
