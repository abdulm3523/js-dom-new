// ======== LEARNING DOM

// ==== CLONE ELEMENT
let sContainer = document.querySelector('.services .container')
let card = document.querySelector('.card')
let container = document.querySelector('.container')
let tableContainer = document.querySelector('.table .container')
let newCard2 = card.cloneNode(true)
let newCard3 = card.cloneNode(true)
sContainer.appendChild(newCard2)
sContainer.appendChild(newCard3)


//===== create element with function

// let newCard01 = createNewElement('div','card','')
// let img = createNewElement('img','','')
// // img.setAttribute('src','')
// let cardBody = createNewElement('div','card-body','',)
// let title = createNewElement('h2','card-title','Popular NFT 02')
// let p = createNewElement('p','card-title','Popular NFT 02')
// let btn = createNewElement('a','btn btn-primary','Popular NFT 02')
// let cardBodyEl = appentElement(cardBody,[title,p,btn])

// console.log(cardBodyEl)
// // let result = cardBodyEl.appendChild(cardBody,[title,p,btn])
// let test = newCard01.appendChild(cardBodyEl)
// container.appendChild(newCard01)

// function createNewElement(elementName,elementClass,elementContent){
//     let createE = document.createElement(elementName)
//     createE.className = elementClass || ''
//     createE.innerHTML = elementContent || ''

//     return createE
// }

// function appentElement(perentElement, childElement){
//     childElement.forEach((childs)=>{
//         perentElement.appendChild(childs)
//     })
//    return perentElement
// }

// DYNAMIC TABLE TRAVERSING
let table = document.createElement('table')
let tbody = document.createElement('tbody')

// function genTable(){
    
// }
for(let i = 0;i<2;i++){
    let row = document.createElement('tr')

    for(let j = 0; j<2;j++){
        let td = document.createElement('td')
        let tbText = document.createTextNode(`The text is ${i} and ${j}`)
        td.appendChild(tbText)
        row.appendChild(td)
    }
    tbody.appendChild(row)
    table.appendChild(tbody)
    // tbody.setAttribute('border','1px solid #000')
    tableContainer.appendChild(table)
}

// Add & delete list item once click on the buttom
let list = document.getElementById('list')
let items = document.querySelector('#list li')
let addbtn = document.getElementById('add-items')
let dltBtn = document.getElementById('delete')

addbtn.addEventListener('click', function(e){
    let newList = items.cloneNode(true)
    newList.innerHTML= 'New List Items'
    list.appendChild(newList)
})

// remove items
dltBtn.addEventListener('click', function(e){
    let list = document.getElementById('list')
    list.removeChild(list.lastChild)
})

// Graph x-area & y-area

let gBox = document.querySelector('.g_box')

gBox.addEventListener('mousemove',function(e){
    // console.log(e)
    let xarea = document.getElementById('x-area')
    let yarea = document.getElementById('y-area')
    xarea.innerHTML = `${e.clientX}`
    yarea.innerHTML = `${e.clientY}`
})

// SHOW INPUT TEXT IN DIFFERENT ELEMENT
let inputBox = document.getElementById('textBox')
inputBox.addEventListener('keypress',function(event){
    // console.log(event)
    // The condintinon checking keyboard key if client press enter then it will take action
    if(event.key === 'Enter'){
        document.getElementById('textShow').innerHTML = `Your text is <strong> ${event.target.value} <strong>`
        event.target.value = ''
    }
})


// DOBBLE CLICK TO ENAVLE TEXT TO EDITABLE
let listItem = document.getElementById('listToInput')

listItem.addEventListener('dblclick',function(event){
    // console.log(event)
    let innerText = event.target.innerText
    event.target.innerHTML = ''
    let createInputBox = creaetInput(innerText) ;
    event.target.appendChild(createInputBox)
    createInputBox.addEventListener('keypress', function(changeEvent){
        if(changeEvent.key==='Enter'){
            event.target.innerHTML = changeEvent.target.value
            
        }
    })
})

function creaetInput(value){
    let inputFiled = document.createElement('input')
    inputFiled.type='text';
    inputFiled.className = 'form-control';
    inputFiled.value = value

    return inputFiled
}

// SKILLS one click to enable edit & then key press to save
let skillItemt = document.getElementById('skillToInput')

skillItemt.addEventListener('click', function(event){
    let currentText = event.target.innerText
    event.target.innerHTML = ''
    let editSkill = createFiled(currentText)
    event.target.appendChild(editSkill)
    editSkill.addEventListener('keypress',function(changeValue){
        if(changeValue.key==='Enter'){
            event.target.innerHTML = changeValue.target.value
        }
    })

})

function createFiled(value){
    let inputF = document.createElement('input')
    inputF.type = 'text'
    inputF.className = 'form-control'
    inputF.value = value
    return inputF
}

// CHECKBOX Event Hendal
let checkBoxList = document.getElementsByName('item');
let slillOutput = document.getElementById('result')
let listArr = [...checkBoxList];
let checkedList = []
listArr.forEach(skill => {
    skill.addEventListener('change',function(event){
        // console.log(event.target.checked)
        if(event.target.checked){
            checkedList.push(event.target.nextElementSibling.innerText)
            // console.log(checkedList)
            resultF(checkedList, slillOutput)
        }else{
            let unchecked = checkedList.indexOf(event.target.nextElementSibling.innerText)
            checkedList.splice(unchecked,1)
            resultF(checkedList, slillOutput)
            // console.log(checkedList)
        }
    })
});

function resultF(skils , parant){
    resultOutput = '';
    skils.forEach((skilItem,index)=>{
        resultOutput += `${`(${index + 1})`} ${skilItem} <br>`
    })
    parant.innerHTML = resultOutput
    return parant
}

// form controll

let form = document.getElementById('form')
let formOutput = document.getElementById('form_result')

form.addEventListener('submit',function(event){
    event.preventDefault();
    // console.log(this.elements)
    let formData = {};
    [...this.elements].forEach(el =>{
       
        if(el.type !== 'submit'){
            formData[el.name] = el.value
        }
        
        
    })
    formOutput.innerHTML = `Name:- ${formData.name}<br> Email:- ${formData.email} <br> Company:- ${formData.company} <br> Country:- ${formData.country}`
    this.reset()
})

// Form Validation
let formV = document.getElementById('formValidation')
formV.addEventListener('submit',function(submit){
    submit.preventDefault()
    let nameFiled = document.getElementById('nameF').value
    let emailFiled = document.getElementById('emailF').value
    let passFiled = document.getElementById('passF').value

    let nameFiledT = document.getElementById('nameF').nextElementSibling
    let emailFiledT = document.getElementById('emailF').nextElementSibling
    let passFiledT = document.getElementById('passF').nextElementSibling

    let isValid = true;
    if(nameFiled == '' || /\d/.test(nameFiled)){
        nameFiledT.innerHTML = 'Please filup the filed'
        isValid = false;
        
    }
    if(emailFiled == '' || !emailFiled.includes("@")){
        emailFiledT.innerHTML = 'Please provide valid email'
        isValid = false;
    }
    if(passFiled == '' || passFiled.length < 8){
        passFiledT.innerHTML = 'Password must be more then 8 included, small caps,number & capital cap'
        isValid = false;
    }
    // this.reset()
});

// Display post data via ajax

let postList= document.getElementById('postList')
let loadBtn = document.getElementById('loadMore')
const postUrl = 'https://jsonplaceholder.typicode.com/posts';
loadBtn.addEventListener('click', function(){
    fetch(postUrl)
        .then(response =>response.json())
        .then(posts =>{
            // console.log(posts)
            posts.forEach(item=>{
                let postItem = postCreate(item)
                postList.appendChild(postItem)
                // console.log(item)
            })
        })
        .catch(e=>{
            console.log(e.message)
        })
})

function postCreate(item){
    let box =document.createElement('div') ;
    let id = document.createElement('h2')
    let body = document.createElement('div')
    let title = document.createElement('h3')
    let dec = document.createElement('p')
    box.className = 'card m-2 p-0'
    body.className = 'card-body'
    title.className = 'card-title'
    dec.className = 'card-text'

    id.innerHTML = item.id
    title.innerHTML = item.title
    dec.innerHTML = item.body
    childItem(body,[title,dec])
    box.appendChild(id)
    box.appendChild(body)
    return box
}
    function childItem(parent,child){
        child.forEach(childs => parent.appendChild(childs))
    }

