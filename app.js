$( () => {

  // this enables RELATIVE scrolling, based on USER's INITIAL screen size
    // TODO: if they CHANGE the screen size, it still uses INITIAL screen size..... ???
  var windowHeight = $(window).height(); // value in pixels
  var relativeScroll = windowHeight * .55

  // these will NEVER change, but will be USED
  var defaultButtonColor = "black"
  var defaultImage = "https://i.pinimg.com/originals/70/b2/b1/70b2b1ff0604107e41af80be2a72ba35.png"

  // these will be DYNAMIC - each button will SELECT different CONTENT/IMAGE
  var selectedContent = 'default';
  var selectedImage = defaultImage;

  $("#aboutButton").on({ // select ABOUT Button
    
    "mouseover" : function() { // on Mouse Over, do the following
      $(this).css("background-color","darkred") // set background for the Mouse Over'd button to GREEN
      $("#main-image").css("background-image",'url("https://i.pinimg.com/originals/6a/2f/67/6a2f67c1823fe82035f53db68fe27666.png")') // change bg img for main img
      $("#aboutContent").show()
    },
    "mouseout" : function() { // undo everything
      $(this).css("background-color",defaultButtonColor)
      $("#main-image").css("background-image",'url('+defaultImage+')')

      if (selectedContent === 'default') {
        $("#aboutContent").hide()
        $('#displayedContent').css('overflow-y','hidden')

      } else if (selectedContent === 'about') {

      } else if (selectedContent === 'projects') {

      } else if (selectedContent === 'resume') {

      } else {
        // do nothing
      }

    },
    "click" : function() { // IF user CLICKS, go to ACTUAL CONTENT
      $('#displayedContent').css('overflow-y','auto')
      $('#displayedContent').animate({scrollTop: $(window).scrollTop() + relativeScroll}, 1200)
      // $('#displayedContent').animate({scrollTop: $(window).scrollTop() + relativeScroll}, "slow")
      // $('#displayedContent').scrollTop($(window).scrollTop() + relativeScroll) // -- INSTANT

      // TODO: make selectedContent/selectedImage the SELECTED content/image
      
      // TODO: LEAVE information UP
      // $("#aboutContent").css("display","block")

      // $("p").html(function(n){
      //   return "This p element has index: " + n;
      // });
      // selectedContent = $('#aboutContent')
      // selectedImage = $
    }
      
  });

  $("#projectsButton").on({ // select PROJECT Button
    
    "mouseover" : function() { // on Mouse Over, do the following
      $(this).css("background-color","darkgreen") // set background for the Mouse Over'd button to GREEN
      $("#main-image").css("background-image",'url("https://images.emojiterra.com/google/android-pie/512px/1f914.png")') // change bg img for main img
      $("#projectsContent").show()
    },
    "mouseout" : function() { // undo everything
      $(this).css("background-color",defaultButtonColor)
      $("#main-image").css("background-image",'url('+defaultImage+')')
      $("#projectsContent").hide()
    },
    "click" : function() { // IF user CLICKS, go to ACTUAL CONTENT
      $('#displayedContent').css('overflow-y','auto')
      $('#displayedContent').animate({scrollTop: $(window).scrollTop() + relativeScroll}, 1200)
      // $('#displayedContent').animate({scrollTop: $(window).scrollTop() + relativeScroll}, "slow")
      // $('#displayedContent').scrollTop($(window).scrollTop() + relativeScroll) // -- INSTANT
    }
    
  });

  $("#resumeButton").on({ // select RESUME Button
    
    "mouseover" : function() { // on Mouse Over, do the following
      $(this).css("background-color","darkblue") // set background for the Mouse Over'd button to GREEN
      $("#main-image").css("background-image",'url("https://i.pinimg.com/originals/b4/e0/9a/b4e09ae68a2a2ae9fc3cee5349364e3a.jpg")') // change bg img for main img
      $("#resumeContent").show()
    },
    "mouseout" : function() { // undo everything
      $(this).css("background-color",defaultButtonColor)
      $("#main-image").css("background-image",'url('+defaultImage+')')
      $("#resumeContent").hide()
    },
    "click" : function() { // IF user CLICKS, go to ACTUAL CONTENT
      $('#displayedContent').css('overflow-y','auto')
      $('#displayedContent').animate({scrollTop: $(window).scrollTop() + relativeScroll}, 1200)
      // $('#displayedContent').animate({scrollTop: $(window).scrollTop() + relativeScroll}, "slow")
      // $('#displayedContent').scrollTop($(window).scrollTop() + relativeScroll) // -- INSTANT
    }
    
  });
  

  });