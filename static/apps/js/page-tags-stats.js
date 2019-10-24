'use strict';


class PageTagsStats extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: []};
        Object.entries(props.state.data).forEach(e => {
            this.state.data.push([...e, 1]);
        });
        this.state.data.sort((a, b) => a[1] - b[1]).reverse();
    }

    render() {
        return (
            <div id="high-charts">
            </div>
        );
    }

    highChartsRender() {
        Highcharts.chart('high-charts', {
            chart: {
                type: 'variwide'
            },
            title: {
                text: this.props.state.url
            },
            xAxis: {
                type: 'category'
            },
            caption: {
                text: 'Count of each tag'
            },
            legend: {
                enabled: false
            },
            series: [{
                name: 'Tag',
                data: this.state.data,
                dataLabels: {
                    enabled: true,
                    format: '{point.y:.0f}'
                },
                tooltip: {
                    pointFormat: 'Tag: <b> {point.y}</b>'
                },
                colorByPoint: true
            }]
        });
    }

    componentDidMount() {
        this.highChartsRender();
    }
}