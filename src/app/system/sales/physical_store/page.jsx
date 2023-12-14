import Link from 'next/link'
export default function PhysicalStore() {

    const products = [
      {
        name: "T-Shirt",
        amount: 2,
        price: 10,
        sold: 643  
      },
      {
        name: "Shoes",
        amount: 1,
        price: 50,
        sold: 864
      },
      {
        name: "Backpack", 
        amount: 3,
        price: 30,
        sold: 134
      }
    ];
  
    return (
      <div>
        <Link href="physical_store/log">Log</Link><br />
       This is Physical Store Page.
  
       <table>
         <thead>
           <tr>
             <th>Name</th>
             <th>Amount</th>
             <th>Price</th>
             <th>Sold</th>    
           </tr>
         </thead>
  
         <tbody>
           {products.map(product => (
             <tr key={product.name}> 
               <td>{product.name}</td>
               <td>{product.amount}</td>
               <td>{product.price}</td>
               <td>{product.sold}</td>
             </tr>
           ))}
         </tbody>
       </table>
  
      </div>
    );
  }