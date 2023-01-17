function createURL(number) {
    return "https://raw.githubusercontent.com/JakubSokol/EDI/main/jsonfiles/file"+number+".json"
}


async function apiRequest(URL) {
    try {
        var response = await fetch(URL)
        return response.json()
    } catch (error) {
        console.error(error)
    }
}

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

function cars(data){
    var carsList=[]
    for (var i=0, size=data.length;i<size;i++) {
        carsList.push(data[i]["car"])
    }
    carsList= carsList.filter(onlyUnique)

    var carsDict={}
    for (var i=0, size=carsList.length;i<size;i++) {
        carsDict[carsList[i]]=0
    }

    for (var i=0, size=data.length;i<size;i++) {
        carsDict[data[i]["car"]] += 1
    }

    return carsDict
}
function earnings(data){
    var earningsList=[]
    for (var i=0, size=data.length;i<size;i++) {
        earningsList.push([data[i]["earnings"], data[i]["ranking"]])
    }
    earningsList.sort(function (a, b) {
        return b[0]-a[0]});
    earningsList = earningsList.slice(0,5)
    return earningsList

}



function createCharts(number){ 
    apiRequest(createURL(number))
        .then(data => cars(data))
        .then(dict => createChart(dict))

    apiRequest(createURL(number))
        .then(data => earnings(data))
        .then(dict => createChart2(dict))
}