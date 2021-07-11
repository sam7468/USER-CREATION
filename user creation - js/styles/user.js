


function showlist(){

    //for gender
    var radio_value
    if (document.getElementById("radio1").checked){
        radio_value = document.getElementById("radio1").value
    } else if (document.getElementById("radio2").checked){
        radio_value = document.getElementById("radio2").value
    }

    //for skills
    var skills_value = []
    if (document.getElementById("python").checked){
        skills_value.push(document.getElementById("python").value)
    }if (document.getElementById("java").checked){
        skills_value.push(document.getElementById("java").value)
    }if (document.getElementById("javascript").checked){    
        skills_value.push(document.getElementById("javascript").value)
    }
    
    // creating our list after getting all the input data 
    let temp =[document.querySelector("#name").value,
    radio_value,
    document.querySelector("#email").value,
    document.querySelector("#website").value,
    skills_value
]
    //for ul list
    let details_ul = document.createElement("ul") 



    for (let i=0; i<temp.length; i= i+1){ 
     let listitem = document.createElement("li")
     listitem.innerText = temp[i]
     details_ul.append(listitem)
    }

    

    //for image
    let image = document.createElement("img")
    image.setAttribute("src",document.querySelector("#image").value)
    


    let final_details = document.createElement("div")
    final_details.setAttribute("class","user-details")
    final_details.append(details_ul,image)


    document.getElementById("display").append(final_details)  
    //display banner part is over
    
    
    

}

function make_a(){

    //modify our lis text to anchor tag
    let list_mod = document.querySelector("ul li:nth-child(4)")

        //create our a tag
    let a_tag = document.createElement("a")
    a_tag.setAttribute("href",document.querySelector("ul li:nth-child(4)").innerText)
    a_tag.innerText = document.querySelector("ul li:nth-child(4)").innerText

    list_mod.innerHTML = ""
    list_mod.append(a_tag)
}

