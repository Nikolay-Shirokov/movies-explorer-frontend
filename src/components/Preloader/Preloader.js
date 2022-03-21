import './Preloader.css'

const Preloader = (props) => {
  if (!props.isVisible) {
    return null;
  }

  return (
      <div className="preloader">
          <div className="preloader__container">
              <span className="preloader__round"></span>
          </div>
      </div>
  )
};

export default Preloader
