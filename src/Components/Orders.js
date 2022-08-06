import axios from 'axios';
import { useEffect, useState } from 'react';

const Orders = () => {
    const [orders,setOrder] = useState([]);

    useEffect(() => {
        axios.get('https://inventorymanagement2.herokuapp.com/api/orders').then((response) =>{
            setOrder(response.data);
        })
    });

    return (
        <div className="mt-2">
            {orders.map((order) => <div>
                <div class="d-flex justify-content-center mt-2 ms-2">
            <div >
                <div class="card text-center" style={{width:"280px"}}>
                <div class="card-header">Order</div>
                <div class="card-body">
                <div class="input-group flex-wrap" style={{width:"200px"}}>
                    <span class="input-group-text" id="addon-wrapping"><i class="fas fa-user"></i></span>
                    <input type="text" class="form-control" aria-label="Username" aria-describedby="addon-wrapping" value={order.user_name}/>
                </div>
                <br/>
                Date : {order.Date}
                    <table class="table align-middle mb-0 bg-white w-25 mt-2 rounded-5 w-25">
                        <thead>
                            <tr>
                            <td>Product</td>
                            <td>Qty</td>
                            <td>Cost</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                order.Products.map((item)=>
                                    <tr>
                                        <td>{item.Pname}</td>
                                        <td>{item.qty}</td>
                                        <td>{item.tc}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <div class="card-footer text-muted" style={{display:"flex",justifyContent: "space-between",alignItems: "center"}}>Total Cost : {order.tc} <button type="button" className="btn btn-primary btn-floating ms-5">
                <i className="fas fa-download"></i>
              </button>
                </div>
                </div>
            </div>
           
        </div></div>
            )}
        </div>
    )
}

export default Orders;