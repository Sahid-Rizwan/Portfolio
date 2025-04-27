var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents= document.getElementsByClassName("tab-contents");

    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab")
    }
    //hamburger sidemneu
    var sideMenu= document.getElementById("sidemenu");
    var menuIcon= document.getElementById("menu-icon");
    function openmenu(){
        sideMenu.style.right = "0";
        menuIcon.style.display = "none";
        
    }
    function closemenu(){
        sideMenu.style.right = "-220px";
        if (window.innerWidth <= 650) 
        {
            menuIcon.style.display = "block";
        } 
        else 
        {
            menuIcon.style.display = "none";
        }
    }
    //hiding menu-icon while switching window
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
        menuIcon.style.display = "none";
        } else {
        menuIcon.style.display = "block";
        }
    });
// -------- to main ---------
// const form = document.getElementById('form');
// const result = document.getElementById('result');

// form.addEventListener('submit', function(e) {
//     e.preventDefault();
//     const formData = new FormData(form);
//     const object = Object.fromEntries(formData);
//     const json = JSON.stringify(object);
//     result.innerHTML = "Please wait..."

//     fetch('https://api.web3forms.com/submit', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json'
//             },
//             body: json
//         })
//         .then(async (response) => {
//             let json = await response.json();
//             if (response.status == 200) {
//                 result.innerHTML = "Form submitted successfully";
//             } else {
//                 console.log(response);
//                 result.innerHTML = json.message;
//             }
//         })
//         .catch(error => {
//             console.log(error);
//             result.innerHTML = "Something went wrong!";
//         })
//         .then(function() {
//             form.reset();
//             setTimeout(() => {
//                 result.style.display = "none";
//             }, 3000);
//         });
// });