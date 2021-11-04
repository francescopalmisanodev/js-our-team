const teamContainer=document.querySelector(".team-container");
const cardInfo=[
    {
        imgurl:"img/wayne-barnett-founder-ceo.jpg",
        name:"Wayne",
        surname:"Barnett",
        info:"Founder & CEO",
    },
    {
        imgurl:"img/angela-caroll-chief-editor.jpg",
        name:"Angela",
        surname:"Caroll",
        info:"Chief Editor",
    },
    {
        imgurl:"img/walter-gordon-office-manager.jpg",
        name:"Walter",
        surname:"Gordon",
        info:"Office Manager",
    },
    {
        imgurl:"img/angela-lopez-social-media-manager.jpg",
        name:"Angela",
        surname:"Lopez",
        info:"Social Media Manager",
    },
    {
        imgurl:"img/scott-estrada-developer.jpg",
        name:"Scott",
        surname:"Estrada",
        info:"Developer",
    },
    {
        imgurl:"img/barbara-ramos-graphic-designer.jpg",
        name:"barbara",
        surname:"Ramos",
        info:"Graphic Designer",
    },
];
for (let i = 0; i < cardInfo.length; i++) {
    teamContainer.innerHTML += 
    `<div class="team-card">
        <div class="card-image">
        <img
            src="${cardInfo[i].imgurl}"
            alt="${cardInfo[i].name} ${cardInfo[i].surname}"
        />
        </div>
        <div class="card-text">
        <h3>${cardInfo[i].name} ${cardInfo[i].surname}</h3>
        <p>${cardInfo[i].info}</p>
        </div>
     </div>`;

    
}
