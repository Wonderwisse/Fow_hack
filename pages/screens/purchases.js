import purchasesData from '/data/purchases.json';
import AppBar from './appbar';

export default function Purchases() {
  return (
    <div>
      {AppBar()}  
      <div className='blankpur'></div>
      <h1 id = "purc">Purchase History</h1>
      <table >
        <thead>
          <tr>
            <th>Date</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Seller</th>
          </tr>
        </thead>
        <tbody>
          {purchasesData.map((purchase) => (
            <tr key={purchase.id}>
              <td>{purchase.date}</td>
              <td>{purchase.product}</td>
              <td>{purchase.quantity}</td>
              <td>{purchase.price}</td>
              <td>{purchase.seller}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
