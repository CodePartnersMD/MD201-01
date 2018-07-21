//declaring empty image array that will stor our image objects
let imageArray = []
//finding image tag in html so that we can change it's src attribute later
let elImage = document.getElementById('random-image')
//declaring image index so that we have global access
let imageIndex
//getting the canvas element by ID
let elCanvas = document.getElementById('chart')
//setting canvas element context as 2d
let ctx = elCanvas.getContext('2d')


// new Constructor function for creating image objects
let Image = function(name, filePath, clicked) {
    this.name = name;
    this.filePath = filePath;
    this.clicked = clicked;
}

//instanitating new image object
let Thanos = new Image('Thanos', './assets/thanos.jpg', 0)
let Thor = new Image('Thor', './assets/thor.jpg', 0)
let Deadpool = new Image('Deadpool', './assets/deadpool.jpeg', 0)

//pushing new image objects to image array
imageArray.push(Thanos, Thor, Deadpool)

//creating function that will select a random image from array of image objects
let randomImage = function() {
    //assigning random number that will be determined by lenght of image array and use it as index
    let randomIndex = Math.floor(Math.random() * imageArray.length)

    //using random number to retrieve random image from array
    imageIndex = imageArray[randomIndex]
    console.log(imageIndex.name)

    // assigning the src of our image tag to the random image
    elImage.src = imageIndex.filePath
}

function populateChart(props) {
    let labels = []
    for(let i=0; i < imageArray.length; i++) {
        labels.push(imageArray[i][props])
    }
    return labels
}

//creating event handler to track number of times image is clicked
let imageClick = function(e) {

    //accessing clicked property on random image object and incrementing by 1 each time clicked
    imageIndex.clicked += 1
    console.log('index', imageIndex.clicked)
    //invoking random image function to populate a new image
    randomImage()
    //setting an item in local storage passing the name of the local storage key as the first argument and the stringified version of our image objects array as the second argument
    localStorage.setItem("imageArr", JSON.stringify(imageArray))

    console.log('Stringified', localStorage.imageArr)
    //retreiving our image objects array from locatl storage by passing the local storage key as an argument and parsing the value back into an array of objects which we can then mutate
    imageArray = JSON.parse(localStorage.getItem("imageArr"))
    // instatiating new chart and using image object properties to populate labels and datasets
    new Chart(ctx, {
        //setting the type of chart to bar
        type: 'bar',
        //giving data property to chart
        data: {
            //setting the lables as image names
            labels: populateChart('name'),
            //passing in array of datasets to populate individual bars, each dataset will create a new bar for our chart
            datasets: [
            {
                //setting the label of the key to Clicked and giving bars styles
                label: 'Clicked',
                backgroundColor: 'rgb(255, 99, 130)',
                borderColor: 'rgb(255, 99, 130)',
                //passing in clicked property as data to calculate bars for each label
                data: populateChart('clicked')
            }
            // {
            // label: 'Ages',
            //     backgroundColor: 'blue',
            //     borderColor: 'blue',
            //     data: [0, 10, 20, 30]
            // }
        ]
        }
    })
}

//attaching event listener to image tag
elImage.addEventListener('click', imageClick)

//calling random image function that will display random image
if(localStorage.imageArr) {
    imageArray = JSON.parse(localStorage.getItem("imageArr"))
}
console.log(imageArray)
randomImage()




