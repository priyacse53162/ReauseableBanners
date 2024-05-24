import './index.css'
const Banner = props => {
  const {key, bannersDetails} = props
  console.log(key)
  const {headerText, description, className} = bannersDetails
  return (
    <li className={`${className}`}>
      <div className="banner-text-part">
        <h1 className="main-heading">{headerText}</h1>
        <p className="paragraph">{description}</p>
        <button className="button">Show More</button>
      </div>
    </li>
  )
}

export default Banner
