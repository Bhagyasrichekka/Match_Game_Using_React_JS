import './index.css'

const ImageItem = props => {
  const {eachImg, onClickImg} = props
  const {id, thumbnailUrl} = eachImg

  const calImgUpdate = () => {
    onClickImg(id)
  }
  return (
    <li>
      <button type="button" className="invisible-btn" onClick={calImgUpdate}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
      </button>
    </li>
  )
}
export default ImageItem
