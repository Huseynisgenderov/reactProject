import { useContext } from "react";
//scss
import "./product.scss";
//react-router
import { Link } from "react-router-dom";
//images
import banner1 from "../../assets/image/banner_basic_tshirt.jpg";
import banner2 from "../../assets/image/block_tee_machine.jpg";
import banner3 from "../../assets/image/designers.jpg";
import bannerMob from "../../assets/image/designers_mob.jpg";
//components
import CategorySwiper from "../../components/categorySwiper/CategorySwiper";
//useContext
import { CartContext } from "../../cartContext";

// import axios from "axios";

const Product = () => {
  const { data } = useContext(CartContext);

  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/api/products/")
  //     .then((res) => setData(res.data))
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <div className="product-page">
      <div className="product-list">
        <div className="products">
          {data.map((product) => (
            <div className="product" key={product.id}>
              <Link className="product-top" to={`/products/${product.id}`}>
                <img
                  src={`http://localhost:5000/${product.productImage}`}
                  alt="product"
                />
              </Link>
              <div className="product-bottom">
                <div className="info">
                  <Link>
                    <p className="product-title">{product.name}</p>
                    <p className="price">$ {product.price}</p>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <CategorySwiper />
      <div className="square-banners">
        <div className="banner">
          <Link>
            <img src={banner1} alt="bannerLeft" />
            <div className="text">
              <div className="mini">
                For those who want beautiful designs but also need simplicity.
              </div>
              <h4>BASIC T-SHIRTS</h4>
            </div>
          </Link>
        </div>
        <div className="banner">
          <Link>
            <img src={banner2} alt="bannerRight" />
            <div className="text">
              <div className="mini">
                Fun way to get Kaft t-shirts <br />
                at a <span>discount</span>.
              </div>
              <h4>TEEMACHINE</h4>
            </div>
          </Link>
        </div>
      </div>
      <div className="collection">
        <div className="creators">
          <Link>
            <img className="big" src={banner3} alt="banner" />
            <img className="small" src={bannerMob} alt="bannerMob" />
            <div className="text">
              <div className="mini">Who creates these original designs?</div>
              <h4>DESIGNERS</h4>
              <div className="view">View</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
