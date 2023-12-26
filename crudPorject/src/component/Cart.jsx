import { useContext,useState } from "react";
import { data } from "../App";
import Layout from "../layout/Layout";

function Cart() {
  const [count, setCount] = useContext(data);
  
  const totalPrice = () => {
      let total = 0;
      count?.map((item) => {
        total = total + item.price;
        console.log(total);
      });
      return total;
  };

  const deleteItem = (id)=>{
    const filterProduct = count.filter((c)=>c.id!==id)
    setCount(filterProduct)

  }
  
  return (
    <Layout>
      {/* {JSON.stringify(count,null,4)} */}
      <div className="row">
        <div className="col-md-8 mt-2">
          {count.map((product) => (
            <>
              <div className="col-md-12 d-flex justify-content-center mb-1">
                <div className="card mb-1" style={{ maxWidth: 750 }}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={product.image}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8 d-flex justify-content-center align-items-center">
                      <div className="card-body">
                        <h5 className="card-title">Title : {product.title}</h5>
                        <h6 className="card-title">
                          Category: {product.category}
                        </h6>
                        <h6 className="card-title">Price : {product.price}</h6>

                        <p className="card-text"></p>
                      </div>
                      <div>
                        <button className="btn btn-danger mx-3" onClick={()=>deleteItem(product.id)}>Remove</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="col-md-4">
          <div className="w-75 text-center">
            <h2 >Cart Summary</h2>
            <h6 className="text-center">Total | Checkout | Payment</h6>
            <hr />
            <h2>Total: {totalPrice()}</h2>
            <button className="btn btn-primary">Pay Now</button><br /><br />
          
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Cart;
