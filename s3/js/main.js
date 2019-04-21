var purposesDb = firebase.database();
var purposesReference = purposesDb.ref('purposesCollection/')
var usersReference = purposesDb.ref('usersCollections/');
var purposesContent;

//#############################################################################
//## Funciones Generales del Proyecto
//###########################################################################

/**
 * Event Handler, que se dispara caundo detecta un cambio en algun valor de la 
 * base de datos y actualiza las paginas "projectCatalog.html" y index.html
 */
purposesReference.on('value', function (snapshot) {
    console.log(snapshot.val());
    purposesContent = snapshot.val();
    getPurposes();  // en "projectCatalog.html"
    getProfiles();  // en "index.html"
});


//#############################################################################
//## Funciones para el formulario "submitForm.html"
//###########################################################################

/**
 * Event Handler, para el formulario "submitForm.html"
 */
$("#submit-button").on("click", function () {
    getFormData()
})


/**
 * Esta funcion obtiene el contenido de los elementos "input" del formulario "submitForm.html"
 */
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

//#############################################################################
//## Funciones para la pagina "projectCatalog.html"
//###########################################################################

/**
 * Event Handler, para la pagina "projectCatalog.html"
 */
$("#get-purposes").on("click", function () {
    getPurposes();
})

/**
 * Esta funcion lee las propuestas en la base de datos y las despliega en pantalla
 */
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


//#############################################################################
//## Funciones para la pagina "index.html"
//###########################################################################

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
