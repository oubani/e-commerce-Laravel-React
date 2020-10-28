import React ,{useEffect} from 'react'
import connect from 'react-redux';

const ProductPage = (props) => {
    const  id = props.match.params.id;
        

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
