import {Link} from 'react-router-dom';
const Invoice = () => {
return <div className="mt-5">
    <Link to="/orders" ><button className="btn btn-primary mx-2">Order Invoice</button></Link>
    <button className="btn btn-secondary">Inventory Invoice</button>
</div>
}

export default Invoice;