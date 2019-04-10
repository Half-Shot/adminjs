import React from 'react'

export default class Filter extends React.PureComponent {
  handleChange(event) {
    this.props.onChange(this.props.property.name, event.target.value)
  }

  render() {
    const { property, filter } = this.props
    const filterKey = `filter-${property.name}`
    const value = filter[property.name] || ''
    return (
      <div className="filter">
        <label htmlFor={filterKey} className="label">{property.label} contains:</label>
        <div className="control">
          <i className="search-icon fas fa-search"></i>
          <input
            type="text"
            className="input filter"
            name={filterKey}
            onChange={this.handleChange.bind(this)}
            value={value} />
        </div>
      </div>
    )
  }
}
