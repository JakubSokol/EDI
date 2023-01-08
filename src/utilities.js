function createURL() {
    return "https://my.api.mockaroo.com/groupProject.json?key=018bd330"
}
async function apiRequest() {
    var response = await fetch(createURL())
    return response.json()
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


apiRequest()
    .then(data => cars(data))
    .then(dict => createChart(dict))
    .then(dict => console.log(dict))

apiRequest()
    .then(data => earnings(data))
    .then(dict => createChart2(dict))
    .then(dict => console.log(dict))