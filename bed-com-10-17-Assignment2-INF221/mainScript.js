
alert("You are Welcomed to my page ,\nfill both forms accordingly please ! \n click ok to continue!!");
let projectForm = document.getElementById("PROJECTfORM");
projectForm.addEventListener("submit", function(event){

    event.preventDefault();
    let proName = projectForm.name.value;
    let date = new Date(projectForm.dateOfCompletion.value);
    let proDetails = projectForm.projectDetails.value;

   if (proName == ''|| date == '' || proDetails =='') {
        alert("Please kindly fill the Project form, ACCORDINGLY !!");
    }

    let projectList = document.getElementById("project_list");    
    let fullProjectDetails = ["project name: "+proName,   "\ndescription : " + proDetails,   " \ndate : " + date];
    localStorage.setItem("1", fullProjectDetails); 

    let pro = document.createElement("a");
    pro.setAttribute("class", "name");
    pro.setAttribute("href" , "projects.html");
    
    
    var projecth = document.createTextNode(proName);
    projectList.appendChild(pro);
    pro.appendChild(projecth);
    projectForm.reset();
}
);


var workForm = document.getElementById("workForm");

workForm.onsubmit = function(o){
    o.preventDefault();
    var address = workForm.address.value;
    var work = workForm.name.value;
    
    if (address == ''|| work =='') {
        alert("Please kindly fill the Ex-Work form, ACCORDINGLY !!");
    }
    let addWorkExperience = ["WORK TYPE: " + work, "\nWORK DETAILS : " + address];
    localStorage.setItem("2", addWorkExperience);
    var v = document.getElementById("workExperience");
    
    
    var workList = document.createElement("a"); 
    workList.setAttribute("class", "name");
    workList.setAttribute("href", "projects.html");
    
    v.appendChild(workList);
    var content = document.createTextNode(work);
    workList.appendChild(content);
    workForm.reset();
}

