import React from "react";
import Shop_Data from "./shopdata";
import CollectionPreview from "../../Components/preview/preview";
class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            collections:Shop_Data
      }
    }
    render() {
        const {collections} = this.state;
        return (<div className='shop-page' >
            {
                collections.map(({id, ...otherCollectionProps}) =>(
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }

        </div>);
    }
}

export default ShopPage