import "./FreeProduct.css"
import privacy from "../../assets/images/privacy.png"
import TandC from "../../assets/images/TandC.png"
import Domain from "../../assets/images/Domain.png"
import Invoice from "../../assets/images/Invoice.png"

function FreeProduct(){
    return(
        <div className="product__container">
            <h1 className="primary__heading">Try our other free products</h1>
            <div className="product__primary-container">
            <div className="product__sub-container">
                <img src={privacy} alt="privacy-img"/>
                <p className="product__primary-text">Privacy Policy Generator</p>
                <p className="product__sub-text">Stock your store with 100s of products and start selling to customers in minutes, 
                    without the hassle of inventory or packaging.</p>
            </div>
            <div className="product__sub-container">
                <img src={TandC} alt="terms-img"/>
                <p className="product__primary-text">Terms & Conditions Generator</p>
                <p className="product__sub-text">Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.</p>
            </div>
            <div className="product__sub-container">
                <img src={Domain} alt="domain-img"/>
                <p className="product__primary-text">Domain Name Generator</p>
                <p className="product__sub-text">Stock your store with 100s of products and start selling to customers in minutes, 
                    without the hassle of inventory or packaging.</p>
            </div>
            <div className="product__sub-container">
                <img src={Invoice} alt="invoice-img"/>
                <p className="product__primary-text">Invoice Generator</p>
                <p className="product__sub-text">Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.</p>
            </div>
            </div>
        </div>
    )
}

export {FreeProduct}