import React from 'react';

export default class CalculatorButton extends React.Component {

    buildStyleString = () => {
        const gridPlacement = this.props.gridPlacement;
        let output = '';
        output += `--row-start: ${gridPlacement.rowStart};`;
        output += `--col-start: ${gridPlacement.colStart};`;
        output += `--row-end: ${gridPlacement.rowEnd};`;
        output += `--col-end: ${gridPlacement.colEnd};`;
        return output;
    };

    handleClick = () => {
        this.props.onClick();
    }

    componentDidMount() {
        const thisButton = document.querySelector(`#calcButton-${this.props.id}`);
        thisButton.setAttribute('style', this.buildStyleString());
    }

    render() {
        return(
            <button onClick={this.handleClick} className={this.props.className} id={`calcButton-${this.props.id}`}>
                {this.props.display}
            </button>
        );
    }
}