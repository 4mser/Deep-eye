import React, { Component } from "react";
import Chart from "react-apexcharts";

class GraficoRadar extends Component {
  constructor(props) {
    super(props);

    this.state = {
        series: [{
            name: 'Cambio',
            data: [10, 8, 5, 9, 8, 7, 7],
          }],
          options: {
            chart: {
              height: 350,
              type: 'radar',
              background: 'none'
            },
            colors: ['#7fa7d5'],
            theme: {
              mode: this.props.tema === "dark" ? "light" : "dark"
            },
            tooltip: {
              y: {
                formatter: function(val) {
                  return val
                }
              }
            },
            xaxis: {
              categories: ['Estado de ánimo', 'Sentidos', 'Autopercepción', 'Percepción del tiempo', 'Cambios cognitivos', 'Socialización', 'Energía']
            },
            markers: {
              size: 6
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

export default GraficoRadar