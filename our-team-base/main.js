const teamContainer=document.querySelector(".team-container");
const addBtn=document.getElementById("addMemberButton");
const newMemberImg=document.getElementById("image");
const newMemberName=document.getElementById("name");
const newMemberInfo=document.getElementById("role");


const cardInfo=[
    {
        imgurl:"img/wayne-barnett-founder-ceo.jpg",
        name:"Wayne Barnett",  
        info:"Founder & CEO",
    },
    {
        imgurl:"img/angela-caroll-chief-editor.jpg",
        name:"Angela Caroll",
        info:"Chief Editor",
    },
    {
        imgurl:"img/walter-gordon-office-manager.jpg",
        name:"Walter Gordon",
        info:"Office Manager",
    },
    {
        imgurl:"img/angela-lopez-social-media-manager.jpg",
        name:"Angela Lopez",
        info:"Social Media Manager",
    },
    {
        imgurl:"img/scott-estrada-developer.jpg",
        name:"Scott Estrada",
        info:"Developer",
    },
    {
        imgurl:"img/barbara-ramos-graphic-designer.jpg",
        name:"Barbara Ramos",
        info:"Graphic Designer",
    },
];
for (let i = 0; i < cardInfo.length; i++) {
    teamContainer.innerHTML += 
    `<div class="team-card">
        <div class="card-image">
        <img
            src="${cardInfo[i].imgurl}"
            alt="${cardInfo[i].name}"
        />
        </div>
        <div class="card-text">
        <h3>${cardInfo[i].name}</h3>
        <p>${cardInfo[i].info}</p>
        </div>
     </div>`;  
}

addBtn.addEventListener("click", ()=>{
    const newTeamCard={
        imgurl:newMemberImg.value,
        name:newMemberName.value,
        info:newMemberInfo.value,
    }
    cardInfo.push(newTeamCard);
    teamContainer.innerHTML += 
        `<div class="team-card">
            <div class="card-image">
            <img
                src="${cardInfo[cardInfo.length-1].imgurl}"
                alt="${cardInfo[cardInfo.length-1].name}"
            />
            </div>
            <div class="card-text">
            <h3>${cardInfo[cardInfo.length-1].name}</h3>
            <p>${cardInfo[cardInfo.length-1].info}</p>
            </div>
         </div>`;  
})
