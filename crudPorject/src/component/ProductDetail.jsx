import { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const [product, setProduct] = useState("");
  const { id } = useParams();
  async function getDetail() {
    // console.log(id);
    const { data } = await axios.get(`http://localhost:3000/Products/${id}`);
    console.log(data);
    setProduct(data);
  }
  useEffect(() => {
    getDetail();
  }, []);
  return (
    <Layout>
      <div className="row ">
        {/* <img src={product.image} alt="" className="w=100" /> */}
        <div className="col-md-12 d-flex justify-content-center my-5">
          <div className="card mb-3" style={{ maxWidth: 750 }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={product.image} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Title : {product.title}</h5>
                  <h6 className="card-title">Category: {product.category}</h6>
                  <h6 className="card-title">Price : {product.price}</h6>
                  <h6 className="card-title">Description : {product.description}</h6>



                  <p className="card-text">
                    
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      Last updated 3 mins ago
                    </small>
                  </p>
                  <button  className="btn btn-secondary" >Add to cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>

       
      </div>
    </Layout>
  );
}
