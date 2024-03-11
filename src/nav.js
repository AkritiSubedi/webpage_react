// from all products

<Link to="/desc" state={{ from: value }}>
            <div className="buy">Buy Now</div>
          </Link>
// from description

const [data, setData] = useState([]);
  const [firstPage, setFirstPage] = useState([]);

  const location = useLocation();
  const { from } = location.state;
  console.log(from);


  <div className="cart" onClick={() => props.setCartCount(props.count + 1)}> Add To Cart</div>