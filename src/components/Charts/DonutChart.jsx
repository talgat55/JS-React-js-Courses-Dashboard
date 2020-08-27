import React from 'react';
import "./style.css";
class  DonutChart  extends  React.Component{
    constructor(props) {
        super(props);
        this.valuelabel =  '';
        this.size =  50;
        this.strokewidth =  5;
    }

    render() {

        const halfsize = (this.size * 0.5);
        const radius = halfsize - (this.strokewidth * 0.5);
        const circumference = 2 * Math.PI * radius;
        const strokeval = ((this.props.value * circumference) / 100);
        const dashval = (strokeval + ' ' + circumference);

        const trackstyle = {strokeWidth: this.strokewidth};
        const indicatorstyle = {strokeWidth: this.strokewidth, strokeDasharray: dashval}
        const rotateval = 'rotate(-90 '+halfsize+','+halfsize+')';

        return (
            <svg width={this.props.size} height={this.props.size} className="donutchart">
                <circle r={radius} cx={halfsize} cy={halfsize} transform={rotateval} style={trackstyle} className="donutchart-track"/>
                <circle r={radius} cx={halfsize} cy={halfsize} transform={rotateval} style={indicatorstyle} className="donutchart-indicator"/>
                <text className="donutchart-text" x={halfsize} y="30" style={{textAnchor:'middle'}} >
                    <tspan className="donutchart-text-val">{this.props.value}</tspan>
                    <tspan className="donutchart-text-percent">%</tspan>
                    <tspan className="donutchart-text-label" x={halfsize} y={halfsize+10}>{this.props.valuelabel}</tspan>
                </text>
            </svg>
        );
    }
};

export  default DonutChart;