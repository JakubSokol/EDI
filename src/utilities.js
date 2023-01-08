function createURL() {
    return "https://my.api.mockaroo.com/groupProject.json?key=018bd330"
}

async function apiRequest() {
    try {
        var response = await fetch(createURL())
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

apiRequest()
    .then(data => cars(data))
    .then(dict => createChart(dict))
