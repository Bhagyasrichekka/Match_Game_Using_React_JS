import './index.css'

const TabItem = props => {
  const {eachTab, isActiveTab, tabChange} = props
  const {tabId, displayText} = eachTab
  const tabClassNames = isActiveTab ? `tabItem active-tab` : `tabItem`

  const calTabChange = () => {
    tabChange(tabId)
  }
  return (
    <li>
      <button type="button" className="invisible-btn" onClick={calTabChange}>
        <p className={tabClassNames}>{displayText}</p>
      </button>
    </li>
  )
}
export default TabItem
