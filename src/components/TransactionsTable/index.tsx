import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de web site</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>01/07/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">-R$1.000</td>
            <td>Casa</td>
            <td>27/06/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}