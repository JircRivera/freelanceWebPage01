var purposesDb = firebase.database();
var purposesReference = purposesDb.ref('purposesCollection/')
var usersReference = purposesDb.ref('usersCollections/');
var purposesContent;

var someElement = $("#some-id");

//$("#")
//$(".")
//$("tagname")
//$(".some-class:eq()")
//$("#some-id .some-class")
//$("#some-id.some-class")
//$("#some-id:hover")
//someElement.hide();

//$(selector).val() /*extraer un valor*/
//$(selector).val(some value) /*asignar un valor*/

function getFormData() {
    var projectObject = {};
    var projectName = $("#project-name").val(); /*getter*/
    var projectDescription = $("#project-description").val();
    var customerMail = $("#customer-mail").val();
    var customerPhone = $("#customer-phone").val();
    var customerName = $("#customer-name").val();

    projectObject.projectName = projectName;
    projectObject.projectDescription = projectDescription;
    projectObject.customerMail = customerMail;
    projectObject.customerPhone = customerPhone;
    projectObject.customerName = customerName;
    console.log(projectObject);
    $("input").val("");
    $("textarea").text("");
    purposesReference.push(projectObject)
}

$("#submit-button").on("click", function () {
    getFormData()
})

$("#get-purposes").on("click", function () {
    getPurposes();
})


var projectArray = [];

var projectPurposeHtml = `<div class="col-lg-3">
								<div class="card my-2">
									<div class="card-body">
										<h5 class="card-title">Desarrollo de sitio web</h5>
										<h6 class="card-subtitle mb-2 text-muted">Israel Salinas Martínez</h6>
										<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias distinctio debitis officia, impedit, quas libero architecto vel in quis illum beatae. Maxime laborum exercitationem, sapiente.</p>
										<p>israel@kodemia.mx</p>
										<p>5543788096</p>
										<p>Habilidades requeridas: <span class="badge badge-pill badge-primary">HTML</span><span class="badge badge-pill badge-primary">CSS</span><span class="badge badge-pill badge-primary">JS</span></p>
										<!--a href="#" class="card-link">Card link</a>
										<a href="#" class="card-link">Another link</a-->
									</div>
								</div>
							</div>`


function getPurposes() {
    console.log(purposesContent)
    $("#purposes-wrapper").empty();
    $.each(purposesContent, function (key, value) {
        console.log(value);
        var projectName = value.projectName;
        var projectDescription = value.projectDescription;
        var customerName = value.customerName;
        var customerPhone = value.customerPhone;
        var customerMail = value.customerMail;

        var projectPurposeHtml = `<div class="col-lg-3">
                                <div class="card my-2">
                                    <div class="card-body">
                                        <h5 class="card-title">${projectName}</h5>
                                        <h6 class="card-subtitle mb-2 text-muted">${customerName}</h6>
                                        <p class="card-text">${projectDescription}</p>
                                        <p>${customerMail}</p>
                                        <p>${customerPhone}</p>
                                    </div>
                                </div>
                            </div>`

        $("#purposes-wrapper").append(projectPurposeHtml);
    })
}


purposesReference.on('value', function (snapshot) {
    console.log(snapshot.val());
    purposesContent = snapshot.val();
    getPurposes();
    getProfiles();
});

/*var newPurposal = {
    projectName: "New name",
    projectDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, dolores consequuntur voluptatem, cupiditate, dicta est consequatur quis ipsa quasi fuga obcaecati soluta corrupti assumenda unde odio recusandae facere molestiae?",
    customerMail: "new@kodemia.mx",
    customerPhone: "5545789645",
    customerName: "new"
}*/


/**
 * Esta función inserta un perfil de freelancer en index.html, por cada proposal en la base de datos
 */
function getProfiles() {
    console.log(purposesContent)
    $("#profiles-wrapper").empty();
    $.each(purposesContent, function (key, value) {
        console.log(value);
        var projectName = value.projectName;
        var projectDescription = value.projectDescription;
        var customerName = value.customerName;
        var customerPhone = value.customerPhone;
        var customerMail = value.customerMail;

        var projectProfilesHtml = `<div class="col-12 col-lg-4">
        <div class="card border-0">
            <img src="img/profile-pic.jpg" class="card-img-top rounded-circle w-50 mx-auto mt-3 mt-lg-4"
                alt="...">
            <div class="card-body">
        var customerName = value.customerName;
                <h2 class="text-info text-center">${customerName}</h2>
                <p class="card-text font-weight-bold font-italic text-center">${projectName}</p>
            </div>
            <div class="data-wrapper mb-3 w-100">
                <h4 class="data-title bg-info p-2 text-uppercase">contacto</h4>
                <p class="text-uppercase font-weight-bold mt-3">${customerPhone} <br> ${customerMail}
                    <br>www.kodemia.mx</p>
            </div>
            <div class="data-wrapper mb-3 w-100">
                <h4 class="data-title bg-info p-2 text-uppercase">social media</h4>
                <p class="text-uppercase font-weight-bold mt-3">facebook /razieliquibalam<br> twitter
                    @razieliquibalam <br>instagram @razieliquibalam</p>
            </div>
        </div>
    </div>
    <div class="col-12 col-lg-8 bg-info ">
        <div class="data-wrapper mb-3 mx-auto mt-3 mt-lg-4">
            <h4 class="data-title bg-info p-2 text-uppercase bg-white ">perfil</h4>
            <p class="text-uppercase font-weight-bold mt-3 text-justify">Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Possimus, facere? Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Ipsa est, fuga illo porro dolore amet?</p>
        </div>
        <div class="data-wrapper mb-3 mx-auto">
            <h4 class="data-title bg-info p-2 text-uppercase bg-white ">Experiencia</h4>
            <div class="description-wrapper">
                <p class="lead font-weight-bold font-italic mb-0">Lorem ipsum dolor sit amet.</p>
                <p class="text-uppercase small">Lorem ipsum dolor sit amet. | Month Day Year</p>
                <ul>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque id laudantium
                        velit reprehenderit rerum, magnam iusto assumenda illum commodi eligendi.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque id laudantium
                        velit reprehenderit rerum, magnam iusto assumenda illum commodi eligendi.</li>
                </ul>
            </div>
            <div class="description-wrapper">
                <p class="lead font-weight-bold font-italic mb-0">Lorem ipsum dolor sit amet.</p>
                <p class="text-uppercase small">Lorem ipsum dolor sit amet. | Month Day Year</p>
                <ul>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque id laudantium
                        velit reprehenderit rerum, magnam iusto assumenda illum commodi eligendi.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque id laudantium
                        velit reprehenderit rerum, magnam iusto assumenda illum commodi eligendi.</li>
                </ul>
            </div>
        </div>
        <div class="data-wrapper mb-3 mx-auto">
            <h4 class="data-title bg-info p-2 text-uppercase bg-white ">Educación</h4>
            <div class="description-wrapper">
                <p class="lead font-weight-bold font-italic mb-0">Lorem ipsum dolor sit amet.</p>
                <p class="text-uppercase small">Lorem ipsum dolor sit amet. | Month Day Year</p>
            </div>
            <div class="description-wrapper">
                <p class="lead font-weight-bold font-italic mb-0">Lorem ipsum dolor sit amet.</p>
                <p class="text-uppercase small">Lorem ipsum dolor sit amet. | Month Day Year</p>
            </div>
        </div>
        <div class="data-wrapper mb-3 mx-auto">
            <h4 class="data-title bg-info p-2 text-uppercase bg-white ">Habilidades</h4>
            <div class="row">
                <div class="col-12 col-lg-6">
                    <ul class="mb-0">
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                    </ul>
                </div>
                <div class="col-12 col-lg-6">
                    <ul class="mb-0">
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="data-wrapper mb-3 mx-auto">
            <h4 class="data-title bg-info p-2 text-uppercase bg-white ">Reconocimientos</h4>
            <div class="description-wrapper">
                <p class="lead font-weight-bold font-italic mb-0">Lorem ipsum dolor sit amet.</p>
                <p class="text-uppercase small">Lorem ipsum dolor sit amet. <br>Month Day Year</p>
            </div>
            <div class="description-wrapper">
                <p class="lead font-weight-bold font-italic mb-0">Lorem ipsum dolor sit amet.</p>
                <p class="text-uppercase small">Lorem ipsum dolor sit amet. <br>Month Day Year</p>
            </div>
        </div>
    </div>
    <div class="w-100">&nbsp;</div>`

        $("#profiles-wrapper").append(projectProfilesHtml);
    })
}
