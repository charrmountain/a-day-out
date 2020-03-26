

// var region = ["America", "Europe", "Africa", "Asia"]

// $("location-button").on("click", function() {
//     var region = $(this).attr("id");
//     var queryURL = ""

//     $.ajax({
//       url: queryURL,
//       method: "GET"
//     }).then(function(response) {
//          console.log(response);

//     })
// })

var region1 = ["america", "europe", "africa", "asia"]
var region2 = ["america", "europe", "africa", "asia"]
$("button").on("click", function() {
    var region1 = $(this).attr("location-button");
    var queryURL = "" +
      region1 + "";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
         console.log(response);
    })
})
$("button").on("click", function() {
  var region2 = $(this).attr("location-button");
  var queryURL = "" +
    region2 + "";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
       console.log(response);
  })
})

// Questions and Project sets
var projectObj = {0: {questions: ["first question", "second question"],
                      project: ["first directive", "second directive"]},
                  1: {questions: ["What's different about these two objects?", "What's similar?", "What do you think the objects were used for? (i.e. decoration, devotion, etc)", "In what context do you think the object was originally displayed?"],
                      project: ["Think about how one of the objects above was used. What is something in your life that you use in the same way?", "Using a medium of your choice: draw, sculpt, or paint an item in your life that fills that function."]},
                  2: {questions: ["first question here", "second question here", "third question here"],
                      project: ["first directive here", "second directive here", "third directive here"]}
                }
var questionDiv = $("#questions-div");
var projectDiv = $("#project-div");

// This function clears the question and project divs and replaces them 
// with a randomly fetched set from the above project object
function renderProject(){
    questionDiv.empty();
    projectDiv.empty();

    var projectObjIndex = Math.floor(Math.random() * 3);
    console.log(projectObjIndex);
    var currentSet = projectObj[projectObjIndex];
    console.log(currentSet)
    for (i in currentSet.questions){
        var newQ = $("<p>").text(projectObj[projectObjIndex].questions[i]);
        questionDiv.append(newQ);
    };
    for (i in currentSet.project){
        var newP = $("<p>").text(projectObj[projectObjIndex].project[i]);
        projectDiv.append(newP);
    };

}

$("#project-refresh").on("click", function(){
    renderProject();
})