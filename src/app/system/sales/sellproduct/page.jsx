'use client'

import { useRouter } from "next/navigation";

export default function SellProduct(){ 
    
    const router = useRouter(); 

    function handleSubmit(event) {
        event.preventDefault();
        alert("Successfully Sold")
        router.push(`/login`);
      }
    

    return (
        <>
        <h1>Sell Product</h1>
        <form onSubmit={handleSubmit}>
        Customer Name: <input type="text"  name="name"  placeholder="Name" /> <br />   
        Product Name: <input type="text"  name="productname"  placeholder="Product Name"/> <br />          
        Product Quantity: <input type="text"  name="productquantiy"  placeholder="Product Quantity"/> <br />  
        Address <input type="text"  name="address" placeholder="A"/> <br />
        Phone Number<input type="text"  name="number" placeholder="Phone Number"/> <br />
    
        <button type="submit">Sign Up</button>
        </form>
        </>
    );
}