import PropTypes from 'prop-types';

export const TotalView = ({total}) =>{
    return(
        <>
        <div className="d-flex justify-content-end">
            <div className="text-end"></div>
            <span className="badge bg-success">Total: {total}</span>
            </div>
        </>
    )
}

TotalView.propTypes = {
    total: PropTypes.number.isRequired
}