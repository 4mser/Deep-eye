import React, { Component } from "react";
import Chart from "react-apexcharts";

class GraficoConsumo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [{
        name: 'Consumo Recreativo',
        type: 'column',
        data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
      }, {
        name: 'Consumo Medicinal',
        type: 'line',
        data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
      }],
      options: {
        chart: {
          height: 350,
          type: 'line',
          background: 'none'
        },
        stroke: {
          width: [0, 4]
        },
        title: {
          text: 'Consumo año 2022',
        },
        dataLabels: {
          enabled: true,
          enabledOnSeries: [1]
        },
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'Mayo', 'Jun', 'Jul', 'Agos', 'Sept', 'Oct', 'Nov', 'Dic'],
        xaxis: {
          type: 'date'
        },
        yaxis: [{
          title: {
            text: 'Consumo recreativo',
          },
        }, {
          opposite: true,
          title: {
            text: 'Consumo medicinal'
          }
        }],
        theme: {
          mode: this.props.tema === "dark" ? "light" : "dark"
        },
        colors: ['#7fa7d5','#be63d0']
      },
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
          <div className="grafico-consumo">
            <Chart
              className="graficoConsumo"
              options={this.state.options}
              series={this.state.series}
              type="line"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default GraficoConsumo;
