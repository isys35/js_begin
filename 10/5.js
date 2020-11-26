function calculateMPG(miles, gallons) {
    document.getElementById("displayMiles").innerHTML = parseInt(miles);
    document.getElementById("displayGallons").innerHTML = parseInt(gallons);
    document.getElementById("displayMPG").innerHTML = miles/gallons;
}