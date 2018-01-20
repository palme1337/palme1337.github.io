import React, { PureComponent } from 'react';

export default class ScoringRow extends PureComponent {

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange({target}) {
    const {onChange, type} = this.props;
    return onChange(type, Number(target.value));
  }

  render() {
    const {index, type, value} = this.props;

    return <div className='score-row' title={type.description}>
      <label>{type.formattedName}</label>
      <input
        value={value}
        onChange={this.onChange}
        min={0}
        step={5}
        tabIndex={index + 1}
        type="number"/>
    </div>;
  }
}
