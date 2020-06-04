$( () => {
    
  var defaultButtonColor = "black"
  var defaultImage = "https://i.pinimg.com/originals/70/b2/b1/70b2b1ff0604107e41af80be2a72ba35.png"

  var selectedColor;
  var selectedImage;


  $("#aboutButton").on({ // select ABOUT Button
    
    "mouseover" : function() { // on Mouse Over, do the following
      var image = $("#main-image") // set local variable for main image
      $(this).css("background-color","darkred") // set background for the Mouse Over'd button to GREEN
      image.css("background-image",'url("https://i.pinimg.com/originals/6a/2f/67/6a2f67c1823fe82035f53db68fe27666.png")') // change bg img for main img
      $("#aboutContent").show()
    },
    "mouseout" : function() { // undo everything
      var image = $("#main-image")
      $(this).css("background-color",defaultButtonColor)
      image.css("background-image",'url('+defaultImage+')')
      $("#aboutContent").hide()
    },
    "click" : function() { // IF user CLICKS, go to ACTUAL CONTENT
      // $('#aboutTitle').animate({scrollTop: $("#aboutTitle").offset().top});
      // $('#displayedContent').animate({scrollTop: $('#aboutTitle')[0].scrollHeight}, "slow");
      // $('#displayedContent').scrollTop(400).offset().top
      $('#displayedContent').scrollTop($('#aboutContent')[0].scrollHeight);}

  });

  $("#projectsButton").on({ // select PROJECT Button
    
    "mouseover" : function() { // on Mouse Over, do the following
      var image = $("#main-image") // set local variable for main image
      $(this).css("background-color","darkgreen") // set background for the Mouse Over'd button to GREEN
      image.css("background-image",'url("https://images.emojiterra.com/google/android-pie/512px/1f914.png")') // change bg img for main img
      $("#projectsContent").show()
    },
    "mouseout" : function() { // undo everything
      var image = $("#main-image")
      $(this).css("background-color",defaultButtonColor)
      image.css("background-image",'url('+defaultImage+')')
      $("#projectsContent").hide()
    }
    
  });

  $("#resumeButton").on({ // select RESUME Button
    
    "mouseover" : function() { // on Mouse Over, do the following
      var image = $("#main-image") // set local variable for main image
      $(this).css("background-color","darkblue") // set background for the Mouse Over'd button to GREEN
      image.css("background-image",'url("https://i.pinimg.com/originals/b4/e0/9a/b4e09ae68a2a2ae9fc3cee5349364e3a.jpg")') // change bg img for main img
      $("#resumeContent").show()

    },
    "mouseout" : function() { // undo everything
      var image = $("#main-image")
      $(this).css("background-color",defaultButtonColor)
      image.css("background-image",'url('+defaultImage+')')
      $("#resumeContent").hide()

    }
    
  });
  

  });