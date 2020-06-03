$( () => {
    
  $("#aboutButton").on({ // select Project Button
    
    "mouseover" : function() { // on Mouse Over, do the following
      var image = $("#main-image") // set local variable for main image
      $(this).css("background-color","darkred") // set background for the Mouse Over'd button to GREEN
      image.css("background-image",'url("https://images.twinkl.co.uk/tr/image/upload/illustation/Sad-Face-1.png")') // change bg img for main img
    },
    "mouseout" : function() { // undo everything
      var image = $("#main-image")
      $(this).css("background-color","black")
      image.css("background-image",'url("https://images-na.ssl-images-amazon.com/images/I/51zLZbEVSTL._AC_SY355_.jpg")')
    }

  });

  $("#projectsButton").on({ // select Project Button
    
    "mouseover" : function() { // on Mouse Over, do the following
      var image = $("#main-image") // set local variable for main image
      $(this).css("background-color","darkgreen") // set background for the Mouse Over'd button to GREEN
      image.css("background-image",'url("https://images.twinkl.co.uk/tr/image/upload/illustation/Sad-Face-1.png")') // change bg img for main img
    },
    "mouseout" : function() { // undo everything
      var image = $("#main-image")
      $(this).css("background-color","black")
      image.css("background-image",'url("https://images-na.ssl-images-amazon.com/images/I/51zLZbEVSTL._AC_SY355_.jpg")')
    }
    
  });

  $("#resumeButton").on({ // select Project Button
    
    "mouseover" : function() { // on Mouse Over, do the following
      var image = $("#main-image") // set local variable for main image
      $(this).css("background-color","darkblue") // set background for the Mouse Over'd button to GREEN
      image.css("background-image",'url("https://images.twinkl.co.uk/tr/image/upload/illustation/Sad-Face-1.png")') // change bg img for main img
    },
    "mouseout" : function() { // undo everything
      var image = $("#main-image")
      $(this).css("background-color","black")
      image.css("background-image",'url("https://images-na.ssl-images-amazon.com/images/I/51zLZbEVSTL._AC_SY355_.jpg")')
    }
    
  });
  

  });