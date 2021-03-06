$(function() {
  // -------------------------THE MET API---------------------------------
  var firstRegionSelected = false;
  var secondRegionSelected = false;
  var region1 = "";
  var region2 = "";
  //onclick for REGIONS-------------
  $(".location-button").on("click", function(event) {
    event.preventDefault();
    
    if (secondRegionSelected) {
      secondMarker.removeClass("colorMarker");
    }

    if (firstRegionSelected) {
      region2 = $(this)[0].id;
      $(this).addClass("colorMarker");
      secondRegionSelected = true;
      secondMarker = $(this);
    } else if (!firstRegionSelected) {
      region1 = $(this)[0].id;
      firstRegionSelected = true;
      $(this).addClass("colorMarker");
    }

    localStorage.setItem("region1", region1);
    localStorage.setItem("region2", region2);
  });

  //onclick GET ART------------
  $("#go-button").on("click", function() {
    if (region1 !== "" && region2 !== "") {
      window.location.href = "project.html";
      localStorage.removeItem("objectID1");
      localStorage.removeItem("objectID2");
    }
  });
});

//onclick REFRESH REGIONS--------
$("#refresh-regions").on("click", function() {
  region1 = "";
  region2 = "";
  localStorage.setItem("region1", region1);
  localStorage.setItem("region2", region2);

  $(".location-button").removeClass("colorMarker");

  location.reload();
});
