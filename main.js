function init() {
  getData();
}
init();

function getData(){

  $.ajax({
    url: "api.php",
    success : function(data){
      console.log(data);
      for (var key in data) {
        console.log(data[key]["name"] + " "
                   + data[key]["lastname"] + " "
                   + data[key]["scores"]
                   );
        var target = $("h1").append(data[key]["name"] + " "
                   + data[key]["lastname"] + " "
                   + data[key]["scores"] + "<br>"
                   );
      }
    },
    error : function(err){
      console.error(err);
    }


  });
}
