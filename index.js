


const sites = [
    {
        "address": "https://apple.com",
        "logo": "https://www.logodesignlove.com/images/classic/apple-logo-rob-janoff-01.jpg"
    },
    {
        "address": "https://google.com",
        "logo": "https://cdn.vox-cdn.com/thumbor/8tLchaDMIEDNzUD3mYQ7v1ZQL84=/0x0:2012x1341/920x613/filters:focal(0x0:2012x1341):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg"
    },
    {
        "address": "https://microsoft.com",
        "logo": "https://cdn.vox-cdn.com/thumbor/drG69iSTSbsYDNcckVzB3x97pDA=/7x0:633x417/920x613/filters:focal(7x0:633x417):format(webp)/cdn.vox-cdn.com/assets/1311169/mslogo.jpg"
    },

];





const container = document.getElementById("container");

container.style.backgroundColor = "blue" ;  
container.style.display = "flex"; 
container.style.flexDirection = "column" ;
container.style.justifyContent= "space-around";
container.style.height = "600px" ;
container.style.alignItems = "center";

const anchor1 = document.createElement("a") ;

container.appendChild(anchor1)  ;

anchor1.setAttribute("href","https://apple.com")  ;

const logo1 = document.createElement("img") ;

logo1.setAttribute("src","https://www.logodesignlove.com/images/classic/apple-logo-rob-janoff-01.jpg");
logo1.style.width = "100px" ;
logo1.style.height = "100px";
anchor1.appendChild(logo1)  ;

//second anchor tag 

const anchor2 = document.createElement("a");
container.appendChild(anchor2);
anchor2.setAttribute("href", "https://google.com");
const logo2 = document.createElement("img"); 
logo2.setAttribute("src","https://cdn.vox-cdn.com/thumbor/8tLchaDMIEDNzUD3mYQ7v1ZQL84=/0x0:2012x1341/920x613/filters:focal(0x0:2012x1341):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg");
logo2.style.width = "100px"; 
logo2.style.height = "100px";
anchor2.appendChild(logo2);



const anchor3 = document.createElement("a"); 
container.appendChild(anchor3)
anchor3.setAttribute("href", "https://microsoft.com")  
const logo3 = document.createElement("img") 
logo3.style.width = "100px" 
logo3.style.height = "100px"
logo3.setAttribute("src","https://cdn.vox-cdn.com/thumbor/drG69iSTSbsYDNcckVzB3x97pDA=/7x0:633x417/920x613/filters:focal(7x0:633x417):format(webp)/cdn.vox-cdn.com/assets/1311169/mslogo.jpg")
anchor3.appendChild(logo3);