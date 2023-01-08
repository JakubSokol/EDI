function createChart(dict) {
    labels = Object.keys(dict)
    data = []
    for (var i=0, size=labels.length;i<size;i++){
        data.push(dict[labels[i]])
    }
    var ctx = document.getElementById('myChart');

    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                label: 'most popular cars',
                data: data,
                borderWidth: 1
            }]
        },
        options: {
        }
    });
}
