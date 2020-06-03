$( () => {
    
  $("#aboutButton").on({ // select ABOUT Button
    
    "mouseover" : function() { // on Mouse Over, do the following
      var image = $("#main-image") // set local variable for main image
      $(this).css("background-color","darkred") // set background for the Mouse Over'd button to GREEN
      image.css("background-image",'url("https://i.pinimg.com/originals/6a/2f/67/6a2f67c1823fe82035f53db68fe27666.png")') // change bg img for main img
    },
    "mouseout" : function() { // undo everything
      var image = $("#main-image")
      $(this).css("background-color","black")
      image.css("background-image",'url("https://i.pinimg.com/originals/70/b2/b1/70b2b1ff0604107e41af80be2a72ba35.png")')
    }

  });

  $("#projectsButton").on({ // select PROJECT Button
    
    "mouseover" : function() { // on Mouse Over, do the following
      var image = $("#main-image") // set local variable for main image
      $(this).css("background-color","darkgreen") // set background for the Mouse Over'd button to GREEN
      image.css("background-image",'url("https://images.emojiterra.com/google/android-pie/512px/1f914.png")') // change bg img for main img
    },
    "mouseout" : function() { // undo everything
      var image = $("#main-image")
      $(this).css("background-color","black")
      image.css("background-image",'url("https://i.pinimg.com/originals/70/b2/b1/70b2b1ff0604107e41af80be2a72ba35.png")')
    }
    
  });

  $("#resumeButton").on({ // select RESUME Button
    
    "mouseover" : function() { // on Mouse Over, do the following
      var image = $("#main-image") // set local variable for main image
      $(this).css("background-color","darkblue") // set background for the Mouse Over'd button to GREEN
      image.css("background-image",'url("https://i.pinimg.com/originals/b4/e0/9a/b4e09ae68a2a2ae9fc3cee5349364e3a.jpg")') // change bg img for main img
    },
    "mouseout" : function() { // undo everything
      var image = $("#main-image")
      $(this).css("background-color","black")
      image.css("background-image",'url("https://i.pinimg.com/originals/70/b2/b1/70b2b1ff0604107e41af80be2a72ba35.png")')
    }
    
  });
  

  });