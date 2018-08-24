import React from 'react'
import PropTypes from 'prop-types'

import { ceil, map, range } from 'lodash'

export default class Pagination extends React.Component {
  static propTypes = {
    currentPage: PropTypes.number.isRequired,
    itemCount: PropTypes.number.isRequired,
    onNext: PropTypes.func.isRequired,
    onPrevious: PropTypes.func.isRequired,
    onSpecific: PropTypes.func.isRequired,
    pageSize: PropTypes.number.isRequired,
  }

  render = () => {
    const {
      currentPage,
      itemCount,
      onNext,
      onPrevious,
      onSpecific,
      pageSize,
    } = this.props

    return (
      <div>
        <button type="button" onClick={onPrevious}>{'<'} Prev</button>
        {
          map(
            range(ceil(itemCount / pageSize)),
            (page) => (
              <button
                key={page}
                type="button"
                onClick={() => { onSpecific(page) }}
              >
                {page} {currentPage === page && '(current)'}
              </button>
            ),
          )
        }
        <button type="button" onClick={onNext}>Next {'>'}</button>
      </div>
    )
  }
}
