const fs=require('fs')
//const book={
    //title: 'Ego is the Enemy',
    //author: 'Ryan holiday'
//}

//const bookJSON=JSON.stringify(book)
//console.log(bookJSON)

//const parsedData= JSON.parse(bookJSON)
//console.log(parsedData)
const databuffer=fs.readFileSync('1-json.json')
const dataJSON=databuffer.toString()
const data=JSON.parse(dataJSON)

data.age=21

const userJSON=JSON.stringify(data)
fs.writeFileSync('1-json.json',userJSON)

