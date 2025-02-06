const teams = [
    {
        name: "Sharukh Sadiq",
        image: "Sharukh Sadiq.png",
        position: ['Founder', 'UX/UI Designer', 'SEO Marketing'],
        external_links: [
            {
                name: "fab fa-instagram",
                link: "https://instagram.com/sharukhsadiq"
            },
            {
                name: "far fa-at",
                link: "mailto:sharukhsadiq@gmail.com"
            },
        ],
        professional: true
    },
    {
        name: "Humera Banu",
        image: "Humera Banu.png",
        position: ['Senior Web Developer'],
        external_links: [{
            name: "fab fa-instagram",
            link: "https://instagram.com/humeramalick"
        }],
        professional: true
    },
    {
        name: "Ashif Sadiq",
        image: "Ashif Sadiq.png",
        position: ['Web / App Developer'],
        external_links: [
            {
                name: "fab fa-instagram",
                link: "https://instagram.com/ashifsadiq"
            },
            {
                name: "far fa-at",
                link: "mailto:contact@ashifsadiq.in"
            },
            {
                name: "fas fa-globe",
                link: "https://ashifsadiq.in"
            },
        ],
        professional: true
    },
]

document.getElementById("teams").innerHTML = teams.map((team, index) => {
    let externalLinks = '<ul class="social-link">';
    team.external_links.map((link, linkIndex) => externalLinks += `<li><a href="${link.link}"><i class="${link.name}"></i></a></li>`)
    externalLinks += '</ul>';
    return `
    <div class="col-lg-3 col-md-6 col-sm-12">
        <div class="team-item mb-55 wow fadeInUp" data-wow-delay=".${(index * 5) + 5}s">
            <div class="img-holder">
                <img src="assets/images/team/${team.image}" alt="">
            </div>
            <div class="text text-center">
                ${externalLinks}
                <h4><a href="team-details.html">${team.name}</a></h4>
                <p class="position">${team.position.join(", ")}</p>
            </div>
        </div>
    </div>
    `
});
let professionals = '';
teams.map((item, index) => {
    let externalLinks = '<ul class="social-link">';
    item.external_links.map((link, linkIndex) => externalLinks += `<li><a href="${link.link}"><i class="${link.name}"></i></a></li>`)
    externalLinks += '</ul>';
    if (item.professional)
        professionals += `
        <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="team-item mb-40 wow fadeInUp" data-wow-delay=".15s">
                <div class="img-holder">
                    <img src="assets/images/team/${item.image}" alt="">
                    <div class="team-hover">
                        <div class="hover-content">
                            <h3 class="title"><a href="team-details.html">${item.name}</a></h3>
                            <p class="position">${item.position.join(", ")}</p>
                        </div>
                        <div class="hover-content-two">
                            <h3 class="title"><a href="team-details.html">Douglas J. Bleau</a></h3>
                            <p class="position">UX/UI Designer</p>
                            <ul class="social-link">
                                ${externalLinks}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
})
document.getElementById("professionals").innerHTML = professionals;