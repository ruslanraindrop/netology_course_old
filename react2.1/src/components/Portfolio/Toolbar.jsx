import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Toolbar extends Component {
  static propTypes = {
    filters: PropTypes.arrayOf(PropTypes.string),
    selected: PropTypes.string,
    onSelectFilter: PropTypes.func,
  }

  onSelectFilter = (filter) => {
    this.props.onSelectFilter(filter);
  }

  render() {
    const { filters, selected } = this.props;
    
    return (
      <div className="toolbar-box">
        {filters.map((filter) => 
          <div
            key={filter}
            onClick={() => this.onSelectFilter(filter)}
            className={`filter-tab${filter === selected ? ' selected-tab' : ''}`}>
              {filter}
          </div>)}
      </div>             
    );
  }
}