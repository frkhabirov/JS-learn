// alert ("Привет");
// confirm ("фильтруете хрюканину?");
// prompt ("вам уже есть 18?", "да");
const skill=document.getElementById("LastName");
const isFiltered = document.getElementById("isFiltered");
const string=document.getElementById("string");

// const skilltext = prompt ("какой язык вы учите?", "в Бабруйск, животное!");
// const isFilteredText = confirm ("фильтруете хрюканину?");

// skill.innerText = skilltext;
// isFiltered.innerText = isFilteredText;

// const userName = prompt("Who are You?", "noname");
// if(userName==="admin") {
//     alert("Hello, boss")
// }
// else if (!userName || userName==="noname") {
//     alert("I don't know You")
// }
// else {
//     alert(`Hi, ${userName}`)
// }

// const count=prompt("Count limit", 15)
// let i=10
// do {
//     console.log(i++)
// }
// while (i<=count) 

// const arr=[]
// for(let i=1; i<=50; i+=5) {
//     arr.push(i)
// }
// const newArr=[]
// for (item of arr) {
//     const marker=item%3
//     if(!marker) {
//         newArr.push(item)
//     }

// }
// console.log(newArr)

// const obj={
//     name:"Farid",
//     age: 54,
//     city: "Menzelinsk"
// }
// for (key in obj) {
//     console.log(key,obj[key])
// }


// const wowScream = function() {
//     alert("WOOOOOOOOOOOOOOOOOW")
//     return "sure"
// }

// const arrow = () => {
//     alert("arrow in the sky")
//     return "forget it"
// }
// console.log(scream())
// console.log(wowScream())
// console.log(arrow())

// function multiply(a,b) {
//     return a*b
// }
// console.log("3*6="+multiply(3,6))

const getRandomNumInRange = (min,max) => {
    const randomNum = (Math.random()*(max-min)+min).toFixed(0)
    return randomNum
}

const getTask = () => {
  
    const symbol=(Math.random()>0.5)?"+":"-"
    const task=`${getRandomNumInRange(0,100)} ${symbol} ${getRandomNumInRange(0,100)}`
    gameState.rightAnswer = eval(task)
    return task
}
const toggleGameState = () => {
    gameState.taskInProgress = !gameState.taskInProgress
}

const gameElements=document.getElementById("myGame").children
const title=gameElements[0]
const userTask=gameElements[1]
const userAnswer=gameElements[2]
const btnGame=gameElements[3]
const gameState = {
    taskInProgress: false,
    rightAnswer: null,
}
// btnGame.onclick=()=> {
//     if (!gameState.taskInProgress) {
//         title.innerText = "Игра началась!"
//         userAnswer.value = null
//         userTask.innerText = getTask() 
//         userAnswer.hidden = false
//         btnGame.innerText = "Проверить"
//         toggleGameState()

//     }
//     else {
//         const isRight = gameState.rightAnswer == userAnswer.value
//         userTask.innerText = userTask.innerText + "=" + gameState.rightAnswer
//         title.innerText = (isRight) ? "Вы победили!" : "Вы проиграли!"
//         btnGame.innerText = "Ещё?"
//         toggleGameState()
//     }
// }
const startGameFunc=()=> {
    if (!gameState.taskInProgress) {
        title.innerText = "Игра началась!"
        userAnswer.value = null
        userTask.innerText = getTask() 
        userAnswer.hidden = false
        btnGame.innerText = "Проверить"
        toggleGameState()

    }
    else {
        const isRight = gameState.rightAnswer == userAnswer.value
        userTask.innerText = userTask.innerText + "=" + gameState.rightAnswer
        title.innerText = (isRight) ? "Вы победили!" : "Вы проиграли!"
        btnGame.innerText = "Ещё?"
        toggleGameState()
    }
}
btnGame.addEventListener("click", startGameFunc)
userAnswer.addEventListener("keydown", (e)=> {
    if (e.key === "Enter") {
        startGameFunc()
    }
    else if (e.key === "Escape") {
        userAnswer.blur()
    }
})
// if (isPlus) {
//     gameElements[1].innerText=`${rV1}+${rV2}`
// }
// else {
//     gameElements[1].innerText=`${rV1}-${rV2}`

// }
// console.log(gameElements)
const choosedEl = document.querySelectorAll(".Panel > div")
const counter = document.querySelector(".choosedBlock span")
const choosedState = {
    counter:0,
    setCountValue(value) {
        this.counter += value
        counter.innerText = this.counter
    }
}
// const changeCount = (value) => {
//     choosedState.counterState += value
//     counter.innerText = choosedState.counterState
// }
const eventFunc = (e) => {
    if (e.target.className === "") {
        e.target.className = "choosedElement"
        choosedState.setCountValue(1)
    }
    else {
        e.target.className = ""
        choosedState.setCountValue(-1)
    }
}

for (let i=0; i<choosedEl.length; i++) {
    choosedEl[i].addEventListener("click", eventFunc)
}
// choosedEl[2].removeEventListener("click", eventFunc)

const timeIsOver=()=>{
    alert("Время вышло!")
}
// setTimeout(timeIsOver, 2000)

// const alarm = setInterval(()=>{
//     let sleepy = confirm("Спишь?")
//     if (sleepy) {
//         console.log("tick")
//     }
//     else {
//         clearInterval(alarm)
//     }
// }, 3000)
// clearInterval(alarm)

// console.log("1")
// setTimeout(()=>{
//     console.log("2")
// }, 0)
// console.log("3")

const post=document.querySelector(".postsPanel")
const showPosts=document.querySelector(".postsBlock button")
// const postTitle=document.querySelector(".postsPanel h5")
// const postBody=document.querySelector(".postsPanel span")
function getPosts () {
    fetch("https://jsonplaceholder.typicode.com/posts")
.then (res=>res.json())
.then(data=>{
    for (item of data) {
        addPost(item.title, item.body)
    }
    // addPost(data[5].title, data[5].body)
    // console.log(data)
})
.catch(err=>console.log(err.message))
}

function addPost(title,body){
    const postTitle=document.createElement("h5")
    const postBody=document.createElement("span")
    const postItem=document.createElement("p")
    postTitle.innerText=title
    postBody.innerText=body
    postItem.append(postTitle,postBody)
    post.append(postItem)
    
}

// function createPost(title,body,userID) {
//     fetch("https://jsonplaceholder.typicode.com/posts", {
//         method: 'POST',
//         body: JSON.stringify ({
//             // title: title,
//             // body: body,
//             // userID: userID,
//             title,
//             body,
//             userID,
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8'
//         }
//     })
// .then (res=> {
//     console.log(res)
//     return res.json()
// })
// .catch (err=>console.log(err.message))
// }

// createPost ("title", "body", 15)
showPosts.onclick = () => getPosts()


