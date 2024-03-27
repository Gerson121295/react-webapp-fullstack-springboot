import PropTypes from 'prop-types'

//recibe las props datos del product de su padre CatalogView, 
//asi tambien recibe la funcion que agrega los products seleccionado con el boton para agregar al carro. 
//Y esa funcion handler tambien permite pasarle al padre y este a su padre el producto seleccionado a agregar al carro.
export const ProductCardView = ({handler, id, name, description, price}) => { 

  const onAddProduct = (product) => {
    console.log(product);
    handler(product); //funcion handler recibe el product que se agregará al carro
  }

  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text"> {description} </p>
          <p className="card-text"> $ {price} </p>
          <button className="btn btn-primary"
          onClick={() => onAddProduct({id, name, description, price})}
          >
            Agregar
            </button>
        </div>
      </div>
    </>
  );
}

ProductCardView.propTypes = {
    handler: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    name : PropTypes.string.isRequired,
    description : PropTypes.string.isRequired,
    price : PropTypes.number.isRequired
}
