import React from 'react';
import CalculatorButton from './CalculatorButton';
import './Calculator.css'

export default class Calculator extends React.Component {
    buildGridPlacement = (rowStart, colStart, rowEnd = '', colEnd = '') => {
        const output = {
            rowStart: rowStart,
            colStart: colStart,
        }
        if(rowEnd !== '') output.rowEnd = rowEnd;
        else output.rowEnd = rowStart;
        if(colEnd !== '') output.colEnd = colEnd;
        else output.colEnd = colStart;
        return output;
    }
    render() {
        return(
            <div className='calculator'>
                <CalculatorButton display='0' onClick={() => true} className='grid-element' gridPlacement={this.buildGridPlacement(5, 1)} id='0' />
                <CalculatorButton display='1' onClick={() => true} className='grid-element' gridPlacement={this.buildGridPlacement(4, 1)} id='1' />
                <CalculatorButton display='2' onClick={() => true} className='grid-element' gridPlacement={this.buildGridPlacement(4, 2)} id='2' />
                <CalculatorButton display='3' onClick={() => true} className='grid-element' gridPlacement={this.buildGridPlacement(4, 3)} id='3' />
                <CalculatorButton display='4' onClick={() => true} className='grid-element' gridPlacement={this.buildGridPlacement(3, 1)} id='4' />
                <CalculatorButton display='5' onClick={() => true} className='grid-element' gridPlacement={this.buildGridPlacement(3, 2)} id='5' />
                <CalculatorButton display='6' onClick={() => true} className='grid-element' gridPlacement={this.buildGridPlacement(3, 3)} id='6' />
                <CalculatorButton display='7' onClick={() => true} className='grid-element' gridPlacement={this.buildGridPlacement(2, 1)} id='7' />
                <CalculatorButton display='8' onClick={() => true} className='grid-element' gridPlacement={this.buildGridPlacement(2, 2)} id='8' />
                <CalculatorButton display='9' onClick={() => true} className='grid-element' gridPlacement={this.buildGridPlacement(2, 3)} id='9' />
                <CalculatorButton display='.' onClick={() => true} className='grid-element' gridPlacement={this.buildGridPlacement(5, 2)} id='dot' />
                <CalculatorButton display='+' onClick={() => true} className='grid-element' gridPlacement={this.buildGridPlacement(4, 4, 'span 2')} id='plus' />
                <CalculatorButton display='-' onClick={() => true} className='grid-element' gridPlacement={this.buildGridPlacement(3, 4)} id='minus' />
                <CalculatorButton display='*' onClick={() => true} className='grid-element' gridPlacement={this.buildGridPlacement(2, 4)} id='times' />
                <CalculatorButton display='/' onClick={() => true} className='grid-element' gridPlacement={this.buildGridPlacement(1, 4)} id='divide' />
                <CalculatorButton display='=' onClick={() => true} className='grid-element' gridPlacement={this.buildGridPlacement(5, 3)} id='equals' />
                <CalculatorButton display='C' onClick={() => true} className='grid-element' gridPlacement={this.buildGridPlacement(1, 2)} id='C' />
                <CalculatorButton display='AC' onClick={() => true} className='grid-element' gridPlacement={this.buildGridPlacement(1, 1)} id='AC' />
                <CalculatorButton display='%' onClick={() => true} className='grid-element' gridPlacement={this.buildGridPlacement(1, 3)} id='percent' />
                {/* <CalculatorButton display='0' onClick={() => true} className='grid-5-1'/>
                <CalculatorButton display='1' onClick={() => true} className='grid-4-1'/>
                <CalculatorButton display='2' onClick={() => true} className='grid-4-2'/>
                <CalculatorButton display='3' onClick={() => true} className='grid-4-3'/>
                <CalculatorButton display='4' onClick={() => true} className='grid-3-1'/>
                <CalculatorButton display='5' onClick={() => true} className='grid-3-2'/>
                <CalculatorButton display='6' onClick={() => true} className='grid-3-3'/>
                <CalculatorButton display='7' onClick={() => true} className='grid-2-1'/>
                <CalculatorButton display='8' onClick={() => true} className='grid-2-2'/>
                <CalculatorButton display='9' onClick={() => true} className='grid-2-3'/>
                <CalculatorButton display='.' onClick={() => true} className='grid-5-2'/>
                <CalculatorButton display='+' onClick={() => true} className='grid-4-4-span2-span1'/>
                <CalculatorButton display='-' onClick={() => true} className='grid-3-4'/>
                <CalculatorButton display='*' onClick={() => true} className='grid-2-4'/>
                <CalculatorButton display='/' onClick={() => true} className='grid-1-4'/>
                <CalculatorButton display='=' onClick={() => true} className='grid-5-3'/>
                <CalculatorButton display='C' onClick={() => true} className='grid-1-2'/>
                <CalculatorButton display='AC' onClick={() => true} className='grid-1-1'/>
                <CalculatorButton display='%' onClick={() => true} className='grid-1-3'/> */}
            </div>
        );
    }

    // function insertToGrid(element, row, col) {
    //     element.setAttribute('style', `grid-area: ${row} / ${col}`);
    // }
}