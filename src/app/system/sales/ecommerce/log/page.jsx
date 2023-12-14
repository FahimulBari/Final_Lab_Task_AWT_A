'use client'
import { useRouter } from "next/navigation";

export default function Log(){
    const router = useRouter();
    return(
        <div>
            
            This is Log page for Ecommerce Sales. <br />
            <button onClick={()=>router.back()}>Back</button>
        </div>
    );
}