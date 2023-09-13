// ---1---
// let arrayString = [`maya`, `omer`, `matan`, `noa`, `jacov`];
// arrayString.sort();
// console.log(arrayString);

// ---2---
// let arrayNumbers1 = [`22`, `74`, `18`, `93`, `40`];
// console.log(arrayNumbers1);
// arrayNumbers1.sort((a,b) => a-b);
// console.log(arrayNumbers1);

// ---3---
// let arrayNumbers2 = [`22`, `74`, `18`, `93`, `40`];
// arrayNumbers2.sort((a,b) => b-a);
// console.log(arrayNumbers2);

// ---4---
// myBtn.addEventListener(`click`,getNamesFromUser);
let arrayNames = [];

function getNamesFromUser (){

    for(var i = 0; i < 3; i++ ){
        if(studentName.value !== ``){
            arrayNames.push(studentName.value);
            studentName.value = ``;
        } else {
        break
    }
    }
    if(arrayNames.length <= 3){
        arrayNames.sort();
        console.log(arrayNames);
        splitarray(arrayNames);
    } else {
        myBtn.removeEventListener(`click`, getNamesFromUser);
    }
}

// ---5---
function getRandomNumbers (){
    let arrayAges = [];

    for (var i = 0 ; i < 10; i++){
        let randomNum = Math.floor(Math.random() * 101);
        arrayAges.push(randomNum)
    }
    arrayAges.sort((a,b) => b-a);
    console.log(arrayAges);
}

// getRandomNumbers();

// ---6---
function splitarray (array){
        let arrayJoin = array.join(`-`);
        console.log(arrayJoin);
}

splitarray(arrayNames);

// ---7---
let companyArray = [`appel`, `google`, `amazon`, `microsoft`, `tesla`, `samsung`, `wicks`, `invida`, `bit`, `nokia`];
function printCompanies (){
    for(var i = 0; i < companyArray.length; i++){
        unorderList.innerHTML += `
        <li> ${companyArray[i]} </li>
        `
}
}

// printCompanies();

let photosArray = [
    `https://storage.hidabroot.org/articles_new/103605_tumb_750Xauto.jpg`,
    `https://meyda.education.gov.il/files/pop/5243/%D7%91%D7%A2%D7%9C%D7%99-%D7%97%D7%99%D7%99%D7%9D-1140.jpg`,
    `https://storage.hidabroot.org/OLD_MEDIA/ScreenHunter_06%20Jun.%2017%2009.52.jpg`,
    `https://www.pets2fly.com/wp-content/uploads/2020/06/Pet-Transport-3.png`,
    `https://www.masa.co.il/wp-content/uploads/2009/05/malayan-tiger.jpg`,
    `https://meyda.education.gov.il/files/pop/14514/yez0000.jpg`,
    `https://www.ianimals.co.il/wp-content/uploads/thumbs/puppy-1903313_640-38fmrkllxntiu2j2krmeww.jpg`,
    `https://img.playbuzz.com/image/upload/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_2.5/v1506453018/gwbqv88ibogh5v0ihyiu.jpg`,
    `https://storage.hidabroot.org/articles_new/121512_tumb_750Xauto.jpg`,
    `https://storage.hidabroot.org/OLD_MEDIA/ScreenHunter_06%20Jun.%2017%2009.52.jpg`,
    `https://www.pets2fly.com/wp-content/uploads/2020/06/Pet-Transport-3.png`,
    `https://www.masa.co.il/wp-content/uploads/2009/05/malayan-tiger.jpg`
]

function printPhotosArray (){
    for( var i = 0; i < photosArray.length; i++){
        container.innerHTML +=`
        <img src="${photosArray[i]}"/>`
    }
}

// printPhotosArray();

let cityArray =[`ashdod`, `rehovot`, `holon`, `ramla`, `lod`, `natanya`, `rishon`, `herzelia`, `batyam`, `ashkelon`]

const objectsArray = [];

function getObjectsArray (){

    for (var i = 0; i < 10; i++){
       let temp = {compName:`${companyArray[i]}`, city:`${cityArray[i]}`, image:`${photosArray[i]}`}
       objectsArray.push(temp);
    }

    for (var i = 0; i <objectsArray.length; i++){
        container1.innerHTML += `
        <div>
            <h1>${objectsArray[i].compName}</h1>
            <p>${objectsArray[i].city}</p>
            <img class="myPhoto" src="${objectsArray[i].image}" alt="comaName">
        </div>`
    }
}

getObjectsArray();

