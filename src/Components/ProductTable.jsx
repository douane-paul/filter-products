import React from "react";

const ProductRow = React.memo(function ({product}) {
    const name = product.stocked ? product.name : <span className="text-danger">{product.name}</span>
    return <tr>
        <td>{name}</td>
        <td>{product.price}</td>
    </tr>
})

function ProductCategoryRow ({category}) {
    return <tr>
        <th colSpan="2">{category}</th>
    </tr>
}

export default class ProductTable extends React.Component{

    render() {
        const { products, inStockOnly, filterText } = this.props
        let row;
        row = [];
        let lastCategory = null

        products.forEach((product) => {
            if (
                (inStockOnly && !product.stocked) ||
                (product.name.indexOf(filterText) === -1)
            ){
                return
            }

            if (product.category !== lastCategory) {
                lastCategory = product.category
                row.push(<ProductCategoryRow key={product.category} category={product.category} />)
            }
            row.push(<ProductRow key={product.name} product={product}/>)
        })

        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {row}
                    </tbody>
                </table>
            </div>
        )
    }
}