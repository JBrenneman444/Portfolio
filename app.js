$( () => {

  // this enables RELATIVE scrolling, based on USER's INITIAL screen size
    // TODO: if they CHANGE the screen size, it still uses INITIAL screen size..... ???
  var windowHeight = $(window).height(); // value in pixels
  var relativeScroll = windowHeight * .55

  var defaultButtonColor = "black"

  // var defaultImage = 'url("https://i.pinimg.com/originals/70/b2/b1/70b2b1ff0604107e41af80be2a72ba35.png")' // sunglasses
  // var tongueImage = 'url("https://i.pinimg.com/originals/6a/2f/67/6a2f67c1823fe82035f53db68fe27666.png")'
  // var thinkingImage = 'url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fres.cloudinary.com%2Fteepublic%2Fimage%2Fprivate%2Fs--pgo79wDS--%2Ft_Preview%2Fb_rgb%3Affffff%2Cc_limit%2Cf_jpg%2Ch_630%2Cq_90%2Cw_630%2Fv1541641509%2Fproduction%2Fdesigns%2F3463685_0.jpg&f=1&nofb=1")'
  // var smartImage = 'url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F1061%2F1924%2Fproducts%2FNerd_Emoji_Icon_4ab932f8-9ec9-4180-8420-c74b84546f57_grande.png%3Fv%3D1513249392&f=1&nofb=1")'

  var defaultImage = 'url("https://i.postimg.cc/fytqkv8Z/test.png")'
  var tongueImage = 'url("https://i.postimg.cc/xThrnXTL/red-test.png")'
  var thinkingImage = 'url("https://i.postimg.cc/fTJ4GcZw/green-test.png")'
  var smartImage = 'url("https://i.postimg.cc/Y2XKDX5n/blue-test.png")'

  // these will be DYNAMIC - each button will SELECT different CONTENT/IMAGE
  var selectedContent = 'default';

  var setButtonColors = () => {

    if (selectedContent === 'about') {
      $("#projectsButton").css("background-color",defaultButtonColor)
      $("#resumeButton").css("background-color",defaultButtonColor)
    } else if (selectedContent === 'projects') {
      $("#aboutButton").css("background-color",defaultButtonColor)
      $("#resumeButton").css("background-color",defaultButtonColor)
    } else if (selectedContent === 'resume') {
      $("#aboutButton").css("background-color",defaultButtonColor)
      $("#projectsButton").css("background-color",defaultButtonColor)
    } else {
      $("#aboutButton").css("background-color",defaultButtonColor)
      $("#projectsButton").css("background-color",defaultButtonColor)
      $("#resumeButton").css("background-color",defaultButtonColor)
    }

  }

  var toggleSelectedContent = (currentContent) => {
    if (selectedContent === currentContent) {
      $("#aboutContent").hide()
      $("#projectsContent").hide()
      $("#resumeContent").hide()
      $("#main-image").css("background-image",defaultImage)
      selectedContent = 'default'
    } else {
      selectedContent = currentContent
    }
    console.log('selectedContent is now: '+selectedContent)
  }

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
          console.log('selectedContent is NOT ABOUT')
        }

      },
      "mouseout" : function() { // EXIT hover

        if (selectedContent === 'default') {
          $(this).css("background-color",defaultButtonColor)
          $("#main-image").css("background-image",defaultImage)
          $("#aboutContent").hide()
        } else {
          // do nothing
        }

      },
      "click" : function() { // IF user CLICKS, go to ACTUAL CONTENT
        $("#projectsContent").hide()
        $("#resumeContent").hide()

        if (selectedContent === 'about') {
          $('#displayedContent').css('overflow-y','auto')
          $("#aboutContent").show()  
        } else {
          $('#displayedContent').css('overflow-y','auto')
          $('#displayedContent').animate({scrollTop: $(window).scrollTop() + relativeScroll}, 1000)
          $("#aboutContent").show()
        }

        // just in case some other CONTENT is CLICKED BEFOREHAND
        $(this).css("background-color","darkred")
        $("#main-image").css("background-image",tongueImage) // 

        toggleSelectedContent('about');
        setButtonColors();

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
          console.log('selectedContent is NOT projects')
        }
        
      },
      "mouseout" : function() { // EXIT hover
        
        if (selectedContent === 'default') {
          $(this).css("background-color",defaultButtonColor)
          $("#main-image").css("background-image",defaultImage)
          $("#projectsContent").hide()
        } else {
          // do nothing
        }

      },
      "click" : function() { // IF user CLICKS, go to ACTUAL CONTENT
        $("#aboutContent").hide()    
        $("#resumeContent").hide()
        
        if (selectedContent === 'projects') {
          $('#displayedContent').css('overflow-y','auto')
          $("#projectsContent").show()
        } else {
          $('#displayedContent').css('overflow-y','auto')
          $('#displayedContent').animate({scrollTop: $(window).scrollTop() + relativeScroll}, 1000)
          $("#projectsContent").show()
        }

        $(this).css("background-color","darkgreen") // set background for the Mouse Over'd button to GREEN
        $("#main-image").css("background-image",thinkingImage) // 
        
        toggleSelectedContent('projects');
        setButtonColors();

      }
      
    });

    $("#resumeButton").on({ // select RESUME Button

      // HOVER
      "mouseover" : function() { // on Mouse Over, do the following
        
        if (selectedContent === 'resume') {
          console.log('selectedContent is RESUME')
          $(this).css("background-color","darkblue") // set background for the Mouse Over'd button to GREEN
          $("#main-image").css("background-image",smartImage) // change bg img for main img
          $("#resumeContent").show()
        } else if (selectedContent === 'default') {
          console.log('selectedContent is DEFAULT')
          $(this).css("background-color","darkblue") // set background for the Mouse Over'd button to GREEN
          $("#main-image").css("background-image",smartImage) // change bg img for main img

        } else {
          console.log('selectedContent is NOT resume')
        }

      },
      "mouseout" : function() { // EXIT hover
        
        if (selectedContent === 'default') {
          $(this).css("background-color",defaultButtonColor)
          $("#main-image").css("background-image",defaultImage)
          $("#resumeContent").hide()
        } else {
          // do nothing
        }

      },
      "click" : function() { // IF user CLICKS, go to ACTUAL CONTENT
                
        $("#aboutContent").hide()    
        $("#projectsContent").hide()

        if (selectedContent === 'resume') {
          $('#displayedContent').css('overflow-y','auto')
          $("#resumeContent").show()
        } else {
          $('#displayedContent').css('overflow-y','auto')
          $('#displayedContent').animate({scrollTop: $(window).scrollTop() + relativeScroll}, 1000)
          $("#resumeContent").show()
        }

        $(this).css("background-color","darkblue") // set background for the Mouse Over'd button to GREEN
        $("#main-image").css("background-image",smartImage) // 

  
        toggleSelectedContent('resume');
        setButtonColors();

      }
      
    });

    $(".closeButton").on({"click":function() {
      $("#aboutContent").hide()
      $("#projectsContent").hide()
      $("#resumeContent").hide()
      selectedContent = 'default'

      $("#main-image").css("background-image",defaultImage)
      setButtonColors();
    }})
  
    $(".outside-column").on({"click":function() {
      $("#aboutContent").hide()
      $("#projectsContent").hide()
      $("#resumeContent").hide()
      selectedContent = 'default'

      $("#main-image").css("background-image",defaultImage)
      setButtonColors();
    }})

  });