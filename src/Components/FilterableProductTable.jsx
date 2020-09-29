import React from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

const PRODUCTS = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

export default class FilterableProductTable extends React.Component{

    constructor(props) {
        super(props);
        this.state = {filterText: '', inStockOnly: false}
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
        this.handleInStockChange = this.handleInStockChange.bind(this)
    }

    handleInStockChange (inStockOnly) {
        this.setState({inStockOnly})
    }

    handleFilterTextChange (filterText) {
        this.setState({filterText})
    }

    render() {
        return (
            <div className={"container mt-4 col-md-4"}>
                <SearchBar
                    filterText={this.state.filterText}
                    onFilterTextChange={this.handleFilterTextChange}
                    onStockChange={this.handleInStockChange}
                    inStockOnly={this.state.inStockOnly}
                />
                <ProductTable
                    products={PRODUCTS}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                />
            </div>
        )
    }

}