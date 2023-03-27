import React, { Component } from "react";
import Chart from "react-apexcharts";

class GraficoRadarMultiple extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [{
        name: 'Primera hora de ingesta',
        data: [6, 8, 5, 6, 5, 2],
      }, {
        name: '4 horas desde la ingesta',
        data: [2, 3, 4, 10, 2, 8],
      }, {
        name: '10 horas desde la ingesta',
        data: [4, 7, 7, 1, 4, 1],
      }, {
        name: 'Siguiente día',
        data: [3, 5, 4, 0, 2, 2],
      }],
      options: {
        chart: {
          height: 350,
          type: 'radar',
          background: 'none',
          dropShadow: {
            enabled: true,
            blur: 1,
            left: 1,
            top: 1
          }
        },
        stroke: {
          width: 2
        },
        theme: {
          mode: this.props.tema === "dark" ? "light" : "dark",
        },
        // colors: ['#FF4560'],
        fill: {
          opacity: 0.1
        },
        markers: {
          size: 0
        },
        xaxis: {
          categories: ['Fisiológicos', 'Otros', 'Comportamiento', 'Sensorial y perceptivo', 'Cognitivos', 'Estado de ánimo'],
          style: {
            colors: ['red']
          }
        },
        yaxis: {
          tickAmount: 7,
          labels: {
            formatter: function(val, i) {
              if (i % 2 === 0) {
                return val
              } else {
                return ''
              }
            }
          }
        }
      }
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.tema !== this.props.tema) {
      this.setState({
        options: {
          ...this.state.options,
          theme: {
            mode: this.props.tema === "dark" ? "light" : "dark"
          }
        }
      });
    }
  }

  render() {
    return (
      <div className="grafico">
        <div className="row">
          <div className="mixed-chart">
            <Chart 
              options={this.state.options}
              series={this.state.series}
              type="radar"
              width="350"
              height='350'
            />
          </div>
        </div>
      </div>
    );
  }
}

export default GraficoRadarMultiple;
