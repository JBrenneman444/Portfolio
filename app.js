$( () => {

  // this enables RELATIVE scrolling, based on USER's INITIAL screen size
    // TODO: if they CHANGE the screen size, it still uses INITIAL screen size..... ???
  var windowHeight = $(window).height(); // value in pixels
  var relativeScroll = windowHeight * .55

  // these will NEVER change, but will be USED
  var defaultButtonColor = "black"
  var defaultImage = 'url("https://i.pinimg.com/originals/70/b2/b1/70b2b1ff0604107e41af80be2a72ba35.png")'
  var tongueImage = 'url("https://i.pinimg.com/originals/6a/2f/67/6a2f67c1823fe82035f53db68fe27666.png")'
  var thinkingImage = 'url("https://images.emojiterra.com/google/android-pie/512px/1f914.png")'
  var shockedImage = 'url("https://i.pinimg.com/originals/b4/e0/9a/b4e09ae68a2a2ae9fc3cee5349364e3a.jpg")'

  // these will be DYNAMIC - each button will SELECT different CONTENT/IMAGE
  var selectedContent = 'default';
  var selectedImage = defaultImage;
  // var toggleContent = 'OFF' DONT THINK I NEED THIS ACTUALLY....

    $("#aboutButton").on({ // select ABOUT Button
      
      // HOVER
      "mouseover" : function() { // on Mouse Over, do the following

        if (selectedContent === 'about') {
          console.log('selectedContent is ABOUT')
          $(this).css("background-color","darkred") // set background for the Mouse Over'd button to GREEN
          $("#main-image").css("background-image",tongueImage) // change bg img for main img
          $("#aboutContent").show()
        } else if (selectedContent === 'default') {
          console.log('selectedContent is DEFAULT')
          $(this).css("background-color","darkred") // set background for the Mouse Over'd button to GREEN
          $("#main-image").css("background-image",tongueImage) // change bg img for main img

        } else {
          console.log('selectedContent is NOT ABOUT or DEFAULT')
        }

      },
      "mouseout" : function() { // EXIT hover

        if (selectedContent === 'about') {
          // do nothing
        } else {
          $(this).css("background-color",defaultButtonColor)
          $("#main-image").css("background-image",defaultImage)
          $("#aboutContent").hide()
        }

      },
      "click" : function() { // IF user CLICKS, go to ACTUAL CONTENT
        $("#projectsContent").hide()
        $("#resumeContent").hide()
        

        $('#displayedContent').css('overflow-y','auto')
        $('#displayedContent').animate({scrollTop: $(window).scrollTop() + relativeScroll}, 1200)
        $("#aboutContent").show()

        // $('#displayedContent').animate({scrollTop: $(window).scrollTop() + relativeScroll}, "slow")
        // $('#displayedContent').scrollTop($(window).scrollTop() + relativeScroll) // -- INSTANT

      // TODO: make selectedContent/selectedImage the SELECTED content/image
        
        if (selectedContent === 'about') {
          selectedContent = 'default'
        } else {
          selectedContent = 'about'
        }
      
      }
        
    });

    $("#projectsButton").on({ // select PROJECT Button
      
      // HOVER
      "mouseover" : function() { // on Mouse Over, do the following
        console.log(selectedContent)
        
        if (selectedContent === 'projects') {
          console.log('selectedContent is PROJECTS')
          $(this).css("background-color","darkgreen") // set background for the Mouse Over'd button to GREEN
          $("#main-image").css("background-image",thinkingImage) // change bg img for main img
          $("#projectsContent").show()
        } else if (selectedContent === 'default') {
          console.log('selectedContent is DEFAULT')
          $(this).css("background-color","darkgreen") // set background for the Mouse Over'd button to GREEN
          $("#main-image").css("background-image",thinkingImage) // change bg img for main img

        } else {
          console.log('selectedContent is NOT projects or DEFAULT')
        }
        
      },
      "mouseout" : function() { // EXIT hover
        $(this).css("background-color",defaultButtonColor)
        $("#main-image").css("background-image",defaultImage)

        if (selectedContent === 'projects') {
          // do nothing
        } else {
          $("#projectsContent").hide()
        }

      },
      "click" : function() { // IF user CLICKS, go to ACTUAL CONTENT
        $("#aboutContent").hide()    
        $("#resumeContent").hide()
        
        $('#displayedContent').css('overflow-y','auto')
        $('#displayedContent').animate({scrollTop: $(window).scrollTop() + relativeScroll}, 1200)
        $("#projectsContent").show()

        // $('#displayedContent').animate({scrollTop: $(window).scrollTop() + relativeScroll}, "slow")
        // $('#displayedContent').scrollTop($(window).scrollTop() + relativeScroll) // -- INSTANT

      // TODO: make selectedContent/selectedImage the SELECTED content/image
        
        if (selectedContent === 'projects') {
          selectedContent = 'default'
        } else {
          selectedContent = 'projects'
        }
      
      }
      
    });

    $("#resumeButton").on({ // select RESUME Button
      
      // HOVER
      "mouseover" : function() { // on Mouse Over, do the following

        if (selectedContent === 'resume') {
          console.log('selectedContent is RESUME')
          $(this).css("background-color","darkblue") // set background for the Mouse Over'd button to GREEN
          $("#main-image").css("background-image",shockedImage) // change bg img for main img
          $("#resumeContent").show()
        } else if (selectedContent === 'default') {
          console.log('selectedContent is DEFAULT')
          $(this).css("background-color","darkblue") // set background for the Mouse Over'd button to GREEN
          $("#main-image").css("background-image",shockedImage) // change bg img for main img

        } else {
          console.log('selectedContent is NOT resume or DEFAULT')
        }

      },
      "mouseout" : function() { // EXIT hover
        $(this).css("background-color",defaultButtonColor)
        $("#main-image").css("background-image",defaultImage)
        
        if (selectedContent === 'resume') {
          // do nothing
        } else {
          $("#resumeContent").hide()
        }
      },
      "click" : function() { // IF user CLICKS, go to ACTUAL CONTENT
        $("#aboutContent").hide()    
        $("#projectsContent").hide()
        
        $('#displayedContent').css('overflow-y','auto')
        $('#displayedContent').animate({scrollTop: $(window).scrollTop() + relativeScroll}, 1200)
        $("#resumeContent").show()

        // $('#displayedContent').animate({scrollTop: $(window).scrollTop() + relativeScroll}, "slow")
        // $('#displayedContent').scrollTop($(window).scrollTop() + relativeScroll) // -- INSTANT

      // TODO: make selectedContent/selectedImage the SELECTED content/image
        
        if (selectedContent === 'resume') {
          selectedContent = 'default'
        } else {
          selectedContent = 'resume'
        }
      
      }
      
    });

    $(".closeButton").on({"click":function() {
      $("#aboutContent").hide()
      $("#projectsContent").hide()
      $("#resumeContent").hide()
      selectedContent = 'default'

      $("#aboutButton").css("background-color",defaultButtonColor)
      $("#projectsButton").css("background-color",defaultButtonColor)
      $("#resumeButton").css("background-color",defaultButtonColor)
    }})
  
  });