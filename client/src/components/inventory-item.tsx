export default function InventoryItem() {
  return (
    <div>
      <table>
        <tr>
          <td><img src="/vite.svg" /></td>
          <td>
            <ul style={{color:"blue"}}>
              <li>Name:</li>
              <li>ID:</li>
              <li>Condition:</li>
              <li>Date Acquired:</li>
              <li>Replacement Cost:</li>
            </ul>
          </td>
        </tr>
      </table>
    </div>

  );

}