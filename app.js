/*** Created by HJH on 2016/8/5.**/
var app = angular.module('lineChart', ['chart.js']);

app.controller('myCtrl', [function () {
    var own = this;
    own.labels = ["January", "February", "March", "April", "May", "June", "July"];
    own.series = ['Series A', 'Series B'];
    own.data = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];
    own.onClick = function (points, evt) {
        console.log(points, evt);
    };
    own.datasetOverride = [{ yAxisID: 'y-axis-1' }];
    own.options = {
        scales: {
            yAxes: [
                {
                    id: 'y-axis-1',
                    type: 'linear',
                    display: true,
                    position: 'left'
                }
            ]
        }
    };
}]);