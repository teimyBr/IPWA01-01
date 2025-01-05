function getParam(key = null){
    let currentURL = window.location.search;
    let url = new URLSearchParams(currentURL);

    if(key){
        return url.get(key);
    }
}


function displayConfirmationData() {
    if(getParam("clothing_type")){
        document.getElementById("sel_clothingType_success").value = getParam("clothing_type");
    }
    if(getParam("crysis_area")){
        document.getElementById("sel_crysisArea_success").value = getParam("crysis_area");
    }
    if(getParam("distribution_type") === "Abholung"){
        document.getElementById("rb_pickup_success").checked = true;
        document.getElementById("pickupAdressFieldsetSuccess").classList.remove("d-none");
        document.getElementById("in_postcode_success").value = getParam("postcode");
        document.getElementById("in_city_success").value = getParam("city");
        document.getElementById("in_street_success").value = getParam("street");
    }else if(getParam("distribution_type") === "Übergabe an der Geschäftsstelle"){
        document.getElementById("rb_dropoff_success").checked = true;
        document.getElementById("dropoffAdressFieldset").classList.remove("d-none");
        document.getElementById("in_dropoff_postcode_success").value = "80809";
        document.getElementById("in_dropoff_city_success").value = "München";
        document.getElementById("in_dropoff_street_success").value = "Hohenzollernstraße 53";
    } 

    document.getElementById('in_timestamp_success').value = new Date().toLocaleString('de-DE');
}

window.onload = displayConfirmationData;
