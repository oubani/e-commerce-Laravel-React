import React ,{useEffect} from 'react'
import axios from 'axios';

const ProductPage = (props) => {
    const  id = props.match.params.id;

    useEffect(() => {
        
    },[])

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

export default connect(mapPrrops,{showProduct})(ProductPage);
