import Layout from "../layout/Layout";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { data } from "../App";


export default function Home() {
  
  const [products, setProducts] = useState([]);
  const [p,setP] =useState([])
  const [count,setCount] = useContext(data)

 
  //  getProducts 
  async function getProducts(){
       const {data} = await  axios.get(`http://localhost:3000/Products`)
       setProducts(data)
       setP(data)  
  }
  useEffect(()=>{
    getProducts()
  },[])


  const filterProduct = (name) => {
       
    let newProducts = p.filter((product) => {
      return product.category === name;
    });
    setProducts(newProducts)
  };
  return (
    <Layout>
  

      <div className="row">
        <div className="col-md-3">
          <h3 className="text-center">Category Filter</h3>
          <div className="list-group m-3">
            <button
              type="button"
              className="list-group-item list-group-item-action"
              aria-current="true"
              onClick={() => filterProduct("Men")}
            >
              Men
            </button>
            <button
              type="button"
              className="list-group-item list-group-item-action"
              onClick={() => filterProduct("Women")}
            >
              Women
            </button>
            <button
              type="button"
              className="list-group-item list-group-item-action"
              onClick={() => filterProduct("Shirts")}
            >
              Shirts
            </button>
            <button
              type="button"
              className="list-group-item list-group-item-action"
              onClick={()=>setProducts(p)}
            >
              All
            </button>
          </div>
        </div>
        <div className="col-md-9">
          <div className="row">
            {/* {JSON.stringify(count,null,4)} */}
            {/* {count.length} */}
            <h3 className="text-center">List of Products</h3>
            {products.map((p) => (
              <>
                <div className="col-md-4 my-2">
                  <div className="card" style={{ width: "18rem" }}>
                    <img src={p.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Title : {p.title}</h5>
                      <h6 className="card-title">Price : {p.price}</h6>
                      <h6 className="card-title">Category : {p.category}</h6>
                      <h6 className="card-title">Description : {p.description.slice(1,10)}...</h6>
                      <Link to={`/productDetail/${p.id}`} className="btn btn-primary">
                       More details...
                     
                      </Link>
                      <button  className="btn btn-success mx-2" onClick={()=>setCount([...count,p])} >Add to cart</button>
                    

                     
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
