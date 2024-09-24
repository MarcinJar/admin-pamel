import DefaultLayout from "@/components/layouts/defaultLayout/DefaultLayout";
import TableWrapper from "@/components/ui/table/tableWrapper/TableWrapper";
import Th from "@/components/ui/table/th/Th";
import Td from "@/components/ui/table/td/Td";

export default function Table() {
  return (
    <DefaultLayout title="Lista użytkowników">
      <TableWrapper>
        <thead>
          <tr>
            <Th>Imię</Th>
            <Th>Nazwisko</Th>
            <Th>Adres Email</Th>
            <Th>Telefon</Th>
            <Th>Data rejestracji</Th>
            <Th/>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td>Jan</Td>
            <Td>Kowalski</Td>
            <Td>jan.kowalski@example.com</Td>
            <Td>670-123-853</Td>
            <Td>2022-01-01</Td>
            <Td className="td-actions">
              <a href="#" className="btn btn-sm btn-info">
                Zobacz
              </a>
            </Td>
          </tr>
          <tr>
            <Td>Anna</Td>
            <Td>Nowak</Td>
            <Td>anna.nowak@example.com</Td>
            <Td>555-987-253</Td>
            <Td>2021-12-31</Td>
            <Td className="td-actions">
              <a href="#" className="btn btn-sm btn-info">
                Zobacz
              </a>
            </Td>
          </tr>
          <tr>
            <Td>Adam</Td>
            <Td>Słoneczny</Td>
            <Td>adam.słoneczny@example.com</Td>
            <Td>450-000-666</Td>
            <Td>2021-10-12</Td>
            <Td className="td-actions">
              <a href="#" className="btn btn-sm btn-info">
                Zobacz
              </a>
            </Td>
          </tr>      
          <tr>
            <Td>Katarzyna</Td>
            <Td>Janik</Td>
            <Td>kasia.janik@example.com</Td>
            <Td>520-121-853</Td>
            <Td>2023-03-01</Td>
            <Td className="td-actions">
              <a href="#" className="btn btn-sm btn-info">
                Zobacz
              </a>
            </Td>
          </tr>      
        </tbody>
      </TableWrapper>
    </DefaultLayout>
  )
}