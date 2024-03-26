import PropTypes from 'prop-types'


export const RowItemView = ({id, product, price, quantity, handlerDeleteItem}) => { //recibe props de su padre: ListItemsView 
    return (
      <>
        <tr >
          <td>{product}</td>
          <td>{price}</td>
          <td>{quantity}</td>
          <td>
            <button 
              className='btn btn-danger'
              onClick={() => handlerDeleteItem(id)}
            >
              Eliminar
            </button>
          </td>
        </tr>
      </>
    )
}

RowItemView.propTypes={
    product: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    id:PropTypes.number,
    handlerDeleteItem: PropTypes.func
}