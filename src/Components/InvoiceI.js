import axios from 'axios';
import { useEffect, useState } from 'react';

const InvoiceI = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://inventorymanagement2.herokuapp.com/api/inventory').then((response) =>{
            setProducts(response.data);
        })
    })
    
    
}

export default InvoiceI;