import React ,{useState} from 'react'

const ProductPage = (props) => {
    const [product, setProduct] = useState({});
    const  id = props.match.params.id;
    
    /*const getProduct = async (id) =>  {
        try {
            const res = await axios.get(`http://localhost:8000/product/${id}`);
            setProduct(res.data);
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
        getProduct(id);
    }, [])
    */
    return (
        <div className='container '>
            <div className="productSection">
                <div className="pImages"></div>
                <div className="pDesc"></div>
            </div>
            <div className="productsSemillar">
            
            </div>
        </div>
    )
}

export default ProductPage;
