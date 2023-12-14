import Link from 'next/link';

export default function SalesLayout({children}){
    return(
        <div>
            <Link href='sales/ecommerce'>Ecommerce</Link><br />
            <Link href='sales/physical_store'>Physical Store</Link><br />
            <Link href='sales/social_media'>Social Media</Link><br />
            <Link href='sales/sellproduct'>Sell Product</Link><br />
            {children}
        </div>
    );
}