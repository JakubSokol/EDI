
function createChart2(dict) {
    labels = []
    for (var i=0, size=dict.length;i<size;i++){
        labels.push(dict[i][1])
    }

    data = []
    for (var i=0, size=dict.length;i<size;i++){
        data.push(dict[i][0])
    }

    var ctx = document.getElementById('myChart2');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'most money made',
                data: data,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: false
                }
            }
        }
    });

    return dict
}