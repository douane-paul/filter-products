import React from "react";

export default class SearchBar extends React.Component{

    constructor(props) {
        super(props);

        this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
        this.handleInStockChange = this.handleInStockChange.bind(this)
    }

    handleFilterTextChange (e) {
        this.props.onFilterTextChange(e.target.value)
    }

    handleInStockChange (e) {
        this.props.onStockChange(e.target.checked)
    }

    render() {
        const { filterText, inStockOnly } = this.props
        return (
            <>
                <div className="form-group">
                    <input type="text" className="form-control" id="search" aria-describedby="search" value={filterText} onChange={this.handleFilterTextChange} placeholder="Search..."/>
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="stock" onChange={this.handleInStockChange} checked={inStockOnly}/>
                        <label className="form-check-label" htmlFor="stock">Only show products in stock</label>
                </div>
            </>
        )
    }
}