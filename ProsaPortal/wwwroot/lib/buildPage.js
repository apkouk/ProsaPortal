var contentSections = [".intro", ".techSkills", ".personalSkills", ".experience", ".education", ".services", ".misc", ".contact", ".footer"];

window.onclick = function (event) {
    if (event.target.id.indexOf("Container") > 0 || event.target.id == 'intro') {
        $(".experienceInfo").fadeOut();
    }
}

function buildPage() {

  /*  loadOptionsMenu();*/
    canUseWebP();
    initSections();
    //intro();
    //techSkills();
    //personal();
    //experience();
    //education();
    //services();
    //misc();
    //contact();
    addHandlers();

    // console.log("Page built!");
}




//var textContent;
//function loadTextContent(lang) {
//    if (lang == undefined)
//        lang = "en";

//    textContent = "";
//    switch (lang) {
//        case "en":
//            textContent = textContent_EN;
//            break;
//        case "es":
//            textContent = textContent_ES;
//            break;
//        case "ca":
//            textContent = textContent_CA;
//            break;
//    }
//}

var extensionImage = "";
function canUseWebP() {
    var elem = document.createElement('canvas');
    if (!!(elem.getContext && elem.getContext('2d'))) {
        extensionImage = ".webp";
    }
    else {
        extensionImage = ".png";
    }
    $("#contactForm").css("background-image", "url(src/images/worldMap" + extensionImage + ")");
    $(".introImage").css("background-image", "url('src/images/codecode1024b" + extensionImage);
}

function addHandlers() {
    resizingElement();

    $("#lang-en").removeClass("lang-selected");
    $("#lang-ca").removeClass("lang-selected");
    $("#lang-es").removeClass("lang-selected");

    $("#lang-en").click(function () {
      /*  loadTextContent("en");*/
        buildPage();
        $("#lang-en").addClass("lang-selected");
    });

    $("#lang-ca").click(function () {
       /* loadTextContent("ca");*/
        buildPage();
        $("#lang-ca").addClass("lang-selected");
    });

    $("#sendemail").click(function () {
       
        $.ajax({
            type: 'POST',
            url: "https://prod-05.francecentral.logic.azure.com:443/workflows/5ea0964804a04638af81aa505ea68bd4/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=D1lXGLofMAl_rUPyogmMbYXYGx933EId-0tzIAcwd8Q",
            data: JSON.stringify({
                "telf": "1111111",
                "text": "hohohohohoohoh",
                "name": "paocoooror"
            }),
            dataType: "json",
            contentType: 'application/json',
            success: function (data) {
                // Success message
                $('#success').html("<div class='alert alert-success'>");
                $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                    .append("</button>");
                $('#success > .alert-success')
                    .append("<strong>Your message has been sent. </strong>");
                $('#success > .alert-success')
                    .append('</div>');
                //clear all fields
                $('#contactForm').trigger("reset");
            },
            failure: function () {
                console.log(data);
            }
        });
    });




}


function initSections() {
    //intro
    $(".intro").css("padding-top", "55");
    //set width content
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    $.each(contentSections, function (i, section) {
        if (windowWidth > 768) {
            var widthVal = ($(window).width() / 4) * 3;
            $(section).css("width", widthVal);
            $('.experienceInfo').css("width", widthVal);
        } else {
            $(section).css("width", "100%");
            $('.experienceInfo').css("width", "100%");
        }
    });

    //intro image
    $('.introImage').css("width", windowWidth);
    $('.introImage').css("height", windowHeight);
    $('.introStart').css("margin-top", windowHeight / 2);

    //experiences
    $('#experienceInfoContainer').css("margin-left", $(".intro").offset().left);
}



function education() {
    var educationSection = $(".education");
    educationSection.empty();
    educationSection.append("<h2>" + textContent.education.optionMenu + "</h2>");
    $.each(textContent.education.collection, function (i, item) {

        var education = $("<div>", { class: "educationChunk" });
        var imageExp = $("<img>", { src: "src/images/" + item.image + extensionImage, class: "educationimg", alt: item.image });
        education.append(imageExp);
        education.append("<p>" + item.center + ", " + item.date + "</p>");
        education.append("<b><a target=\"_blank\" rel=\"noopener noreferrer\" href='" + item.url + "' >" + item.title + "</a></b></br>");

        if (item.desc !== "") {
            education.append("<a target=\"_blank\" rel=\"noopener noreferrer\" href='" + item.descUrl + "' >" + item.desc + "</a></br>");
        }

        educationSection.append(education);
    });
}

function services() {
    var servicesSection = $(".services");
    var serviceItem = $(".service");
    serviceItem.empty();
    $.each(textContent.services.serviceItems, function (i, service) {
        var serviceItemContainer = $("<div>", {
            class: "col-sm-6 col-md-4 col-lg-3 service-item"
        });
        var serviceImageDiv = $("<div>", {
            class: "service-image"
        });
        var serviceImage = $("<img>", {
            src: "src/images/" + service.image + extensionImage,
            class: "serviceImg",
            alt: service.image
        });

        serviceImageDiv.empty();
        serviceImageDiv.append(serviceImage);
        serviceItemContainer.empty();
        serviceItemContainer.append(serviceImageDiv);

        serviceItemContainer.append("<h4 style=><b>" + service.title + "</b></h4>");
        serviceItemContainer.append("<p>" + service.desc + "</p>");
        serviceItem.append(serviceItemContainer);
    });
    servicesSection.append(serviceItem);

}

function misc() {
    var miscSection = $(".misc");
    miscSection.empty();
    miscSection.append("<h2>" + textContent.misc.optionMenu + "</h2><hr>");
    $.each(textContent.misc.books, function (i, book) {
        miscSection.append("<ul><li><p><cite>" + book.title + "</cite></br> " + book.author + "</p></li></ul>");
    });
    miscSection.append("</br>")
    miscSection.append("<h2>" + textContent.misc.optionMenu2 + "</h2><hr>");
    $.each(textContent.misc.conferences, function (i, conference) {
        miscSection.append("<h3>" + conference.name + "</h3>");
        if (conference.date !== "-")
            miscSection.append("<h4>Date: " + conference.date + "</h4>");
        miscSection.append("<h4>" + conference.desc + "</h4>");
        miscSection.append("<a href='" + conference.URL + "'>" + conference.URL + "</a><hr>");
    });
}

function contact() {
    var contactSection = $(".contact");
    contactSection.empty();
    var contactItem = $("<div>", {
        class: "contactItem"
    });
    var contactImage = $("<img>", {
        src: "src/images/prosaWeb.png",
        class: "img-circle",
        alt: "prosaWeb"
    });
    contactItem.append(contactImage);
    contactItem.append("<h3>Francisco Rosa</h3>");
    contactItem.append("<p>Barcelona +34 634 538 340</p>");

    contactSection.prepend(contactItem);

}

function resizingElement() {
    $(window).resize(function () {
        initSections();
    });
}


var textContent = {}

