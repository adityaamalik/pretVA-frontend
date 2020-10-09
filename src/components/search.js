import React from 'react';
import '../css/search.css';
import axios from 'axios';
import Card from './card';

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      searchValue: "",
      foundResult: [],
      allProducts: [],
      filteredProducts: [],
      filter: {
        product_name: "",
        quantity: "",
        cost: "",
        lead_time: "",
        weight: ""
      }
    };
    this.onProductNameChange = this.onProductNameChange.bind(this);
    this.onQuantityValChange = this.onQuantityValChange.bind(this);
    this.onCostValChange = this.onCostValChange.bind(this);
    this.onLeadTimeValChange = this.onLeadTimeValChange.bind(this);
    this.onWeightValChange = this.onWeightValChange.bind(this);
    this.applyFilterHandler = this.applyFilterHandler.bind(this);
    this.handleClearFilter = this.handleClearFilter.bind(this);
  }

  componentDidMount(){
    axios.get('http://localhost:5000/all')
      .then(response => {
        this.setState({allProducts: response.data});
      });
  }

  onSearchValChange(value){
    this.setState({
         searchValue: value
    });
  }

  searchHandler = () => {
    const sendData = {
      buyerName : this.state.searchValue
    };

    axios({
      method: 'post',
      url: 'http://localhost:5000/search',
      data: sendData
    }).then(response => {
      this.setState({ foundResult: response.data });
    });
  }

  onProductNameChange(event) {
    this.setState({
      ...this.state,
      filter: {
        ...this.state.filter,
        product_name: event.target.value
      }
    });
  }

  onQuantityValChange(value){
    this.setState({
      ...this.state,
      filter: {
        ...this.state.filter,
        quantity: value
      }
    });
  }

  onCostValChange(value){
    this.setState({
      ...this.state,
      filter: {
        ...this.state.filter,
        cost: value
      }
    });
  }

  onLeadTimeValChange(value){
    this.setState({
      ...this.state,
      filter: {
        ...this.state.filter,
        lead_time: value
      }
    });
  }

  onWeightValChange(value){
    this.setState({
      ...this.state,
      filter: {
        ...this.state.filter,
        weight: value
      }
    });
  }

  applyFilterHandler(){
    axios({
      method: 'post',
      url: 'http://localhost:5000/filter',
      data: this.state.filter
    }).then(response => {
      this.setState({ filteredProducts: response.data });
    });
  }

  handleClearFilter(){
    this.setState({
      ...this.state,
      filter: {
        product_name: "",
        quantity: "",
        cost: "",
        lead_time: "",
        weight: ""
      }
    })
  }

  render() {

    let cards;
    if(this.state.foundResult.length !== 0){
      cards = this.state.foundResult.map(card => {
        return <Card 
          key={card._id} 
          buyerName={card.buyer_name} 
          productId={card.product_id}
          productName={card.product_name}
          leadTime={card.lead_time}
          weight={card.weight_gsm}
          price={card.price_rs}
          quantity={card.quantity}
        />
      });
    }else if(this.state.filter.cost!=="" || this.state.filter.product_name!=="" || this.state.filter.quantity!=="" || this.state.filter.lead_time!=="" || this.state.filter.weight!==""){
      cards = this.state.filteredProducts.map(card => {
        return <Card 
          key={card._id} 
          buyerName={card.buyer_name} 
          productId={card.product_id}
          productName={card.product_name}
          leadTime={card.lead_time}
          weight={card.weight_gsm}
          price={card.price_rs}
          quantity={card.quantity}
        />
      });
    }
    else{
      cards = this.state.allProducts.map(card => {
        return <Card 
          key={card._id} 
          buyerName={card.buyer_name} 
          productId={card.product_id}
          productName={card.product_name}
          leadTime={card.lead_time}
          weight={card.weight_gsm}
          price={card.price_rs}
          quantity={card.quantity}
        />
      });
    }

    return (
      <div id="centeredcontent" className="container">
          <p id="searchline"><strong>Search</strong> / Search Buyer Requirements</p>
          <div>
              <button id="searchbuttonleft" className="btn btn-lg btn-outline-dark">Search Supplier Products</button>
              <button id="searchbuttonright" className="btn btn-lg btn-outline-warning active ml-2">Search Buyer Requirements</button>
          </div>
          <div id="searchfiltercontainer">
              <h5 id="searchfilterheading">Search Filters</h5>
              <div className="row justify-content-between mt-5 ml-2 mr-2">

                  <div className="dropdown">
                    <span>Product Name<i className="fa fa-caret-down" aria-hidden="true"></i></span>
                    <div onChange={this.onProductNameChange} className="dropdown-content">
                      <input type="radio" id="Jacket" name="productName" value="Jacket" />
                      <label className="ml-2" htmlFor="Jacket">Jacket</label><br />
                      <input type="radio" id="Sweater" name="productName" value="Sweater" />
                      <label className="ml-2" htmlFor="Sweater">Sweater</label><br />
                      <input type="radio" id="Blazer" name="productName" value="Blazer" />
                      <label className="ml-2" htmlFor="Blazer">Blazer</label><br />
                      <input type="radio" id="tshirts" name="productName" value="T-Shirts" />
                      <label className="ml-2" htmlFor="tshirts">T-Shirts</label><br />
                      <input type="radio" id="Trousers" name="productName" value="Trousers" />
                      <label className="ml-2" htmlFor="Trousers">Trousers</label><br />
                      <input type="radio" id="Skirt" name="productName" value="Skirt" />
                      <label className="ml-2" htmlFor="Skirt">Skirt</label><br />
                      <input type="radio" id="Raincoat" name="productName" value="Raincoat" />
                      <label className="ml-2" htmlFor="Raincoat">Raincoat</label><br />
                      <input type="radio" id="Dress" name="productName" value="Dress" />
                      <label className="ml-2" htmlFor="Dress">Dress</label><br />
                      <input type="radio" id="Jeans" name="productName" value="Jeans" />
                      <label className="ml-2" htmlFor="Jeans">Jeans</label><br />
                      <input type="radio" id="Short" name="productName" value="Short" />
                      <label className="ml-2" htmlFor="Short">Short</label><br />
                    </div>
                  </div>

                  <div className="dropdown">
                    <span>Quantity<i className="fa fa-caret-down" aria-hidden="true"></i></span>
                    <div className="dropdown-content">
                      <input type="text" placeholder="Quantity" value={this.state.filter.quantity} onChange={e => this.onQuantityValChange(e.target.value)}/>
                    </div>
                  </div>

                  <div className="dropdown">
                    <span>Cost<i className="fa fa-caret-down" aria-hidden="true"></i></span>
                    <div className="dropdown-content">
                      <input type="text" placeholder="Cost" value={this.state.filter.cost} onChange={e => this.onCostValChange(e.target.value)}/>
                    </div>
                  </div>

                  <div className="dropdown">
                    <span>Lead Time<i className="fa fa-caret-down" aria-hidden="true"></i></span>
                    <div className="dropdown-content">
                      <input type="text" placeholder="Lead Time" value={this.state.filter.lead_time} onChange={e => this.onLeadTimeValChange(e.target.value)}/>
                    </div>
                  </div>

                  <div className="dropdown">
                    <span>Weight<i className="fa fa-caret-down" aria-hidden="true"></i></span>
                    <div className="dropdown-content">
                      <input type="text" placeholder="Weight" value={this.state.filter.weight} onChange={e => this.onWeightValChange(e.target.value)}/>
                    </div>
                  </div>

                  <button className="btn btn-outline-dark roundbtn" onClick={this.applyFilterHandler}>Apply Filters</button>
              </div>
              <div className="row mt-5 justify-content-between">
                  <input id="searchbar" className="mr-1" type="text" placeholder="Search" value={this.state.searchValue} onChange={e => this.onSearchValChange(e.target.value)}></input>
                  <button className="btn btn-outline-dark roundbtn" onClick={this.searchHandler}>Search Buyer Name</button>
              </div>
              <hr className="bottomline mt-5"></hr>
              <div className="row">
                  <h5>Search Filters: </h5>
                  <h6 className="ml-3">Product Name : </h6>
                  <p className="filterCapsule">{this.state.filter.product_name}</p>
                  <h6 className="ml-3">Cost : </h6>
                  <p className="filterCapsule">{this.state.filter.cost}</p>
                  <h6 className="ml-3">Quantity : </h6>
                  <p className="filterCapsule">{this.state.filter.quantity}</p>
                  <h6 className="ml-3">Weight : </h6>
                  <p className="filterCapsule">{this.state.filter.weight}</p>
                  <h6 className="ml-3">Lead Time : </h6>
                  <p className="filterCapsule">{this.state.filter.lead_time}</p>
                  <button className="btn btn-outline-dark roundbtn ml-5" onClick={this.handleClearFilter}>Clear Filters</button>
              </div>
              <hr className="bottomline mt-5"></hr>
              <div className="row justify-content-between">
                {cards}
              </div>
          </div>
      </div>
    );
  }
}

export default Search;