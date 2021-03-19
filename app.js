$( () => {
  
  // TODO: if they CHANGE the screen size, it still uses INITIAL screen size
  
  // this enables RELATIVE scrolling, based on USER's INITIAL screen size --- used for ORIGINAL Portfolio, not for the CURRENT NEW one
    // var windowHeight = $(window).height(); // value in pixels
    // var relativeScroll = windowHeight * .25

  var defaultButtonColor = "black"

  var defaultImage = 'url("img/test.png")'
  var tongueImage = 'url("img/red-test.png")'
  var thinkingImage = 'url("img/green-test.png")'
  var smartImage = 'url("img/blue-test.png")'

  // these will be DYNAMIC - each button will SELECT different CONTENT/IMAGE
  var selectedContent = 'default';

  var setButtonColors = () => {

    if (selectedContent === 'about') {
      $("#jobtitle-div").hide()
      $("#displayedContent").show()
      $("#projectsButton").css("background-color",defaultButtonColor)
      $("#resumeButton").css("background-color",defaultButtonColor)
      $("#aboutButton").css("box-shadow","black 5px 5px 0px 0px") // changes ABOUT SHADOW to BLACK
      $("#projectsButton").css("box-shadow","rgb(46 232 0) 5px 5px 0px 0px") // changes PROJECTS SHADOW to GREEN
      $("#resumeButton").css("box-shadow","blue 5px 5px 0px 0px") // changes RESUME SHADOW to BLUE
      
    } else if (selectedContent === 'projects') {
      $("#jobtitle-div").hide()
      $("#displayedContent").show()
      $("#aboutButton").css("background-color",defaultButtonColor)
      $("#resumeButton").css("background-color",defaultButtonColor)
      $("#aboutButton").css("box-shadow","red 5px 5px 0px 0px") // changes ABOUT SHADOW to RED
      $("#projectsButton").css("box-shadow","black 5px 5px 0px 0px") // changes PROJECTS SHADOW to BLACK
      $("#resumeButton").css("box-shadow","blue 5px 5px 0px 0px") // changes RESUME SHADOW to BLUE

    } else if (selectedContent === 'resume') {
      $("#jobtitle-div").hide()
      $("#displayedContent").show()
      $("#aboutButton").css("background-color",defaultButtonColor)
      $("#projectsButton").css("background-color",defaultButtonColor)
      $("#aboutButton").css("box-shadow","red 5px 5px 0px 0px") // changes ABOUT SHADOW BACK to RED
      $("#projectsButton").css("box-shadow","rgb(46 232 0) 5px 5px 0px 0px") // changes PROJECTS SHADOW to GREEN
      $("#resumeButton").css("box-shadow","black 5px 5px 0px 0px") // changes RESUME SHADOW to BLACK

    } else {
      $("#jobtitle-div").show()
      $("#displayedContent").hide()
      $("#aboutButton").css("background-color",defaultButtonColor)
      $("#projectsButton").css("background-color",defaultButtonColor)
      $("#resumeButton").css("background-color",defaultButtonColor)
      $("#aboutButton").css("box-shadow","red 5px 5px 0px 0px") // changes ABOUT SHADOW BACK to RED
      $("#projectsButton").css("box-shadow","rgb(46 232 0) 5px 5px 0px 0px") // changes PROJECTS SHADOW to GREEN
      $("#resumeButton").css("box-shadow","blue 5px 5px 0px 0px") // changes RESUME SHADOW to BLUE
    }

  }

  var toggleSelectedContent = (currentContent) => {
    if (selectedContent === currentContent) {
      $("#displayedContent").hide()
      $("#aboutContent").hide()
      $("#projectsContent").hide()
      $("#resumeContent").hide()
      $("#main-image").css("background-image",defaultImage)
      selectedContent = 'default'
    } else {
      selectedContent = currentContent
    }
    // console.log('selectedContent is now: '+selectedContent)
  }

    $("#aboutButton").on({ // select == RED == ABOUT Button
      
      // HOVER
      "mouseover" : function() { // on Mouse Over, do the following

        if (selectedContent === 'about') {
          // console.log('selectedContent is ABOUT')
          $(this).css("background-color","darkred") // set background for the Mouse Over'd button to RED
          $("#main-image").css("background-image",tongueImage) // change bg img for main img
          $("#aboutContent").show()
        } else if (selectedContent === 'default') {
          // console.log('selectedContent is DEFAULT')
          $(this).css("background-color","darkred") // set background for the Mouse Over'd button to RED
          $("#main-image").css("background-image",tongueImage) // change bg img for main img
          $(this).css("box-shadow","black 5px 5px 0px 0px") // changes SHADOW to BLACK
        } else {
          // console.log('selectedContent is NOT ABOUT')
        }
      },

       // EXIT hover
      "mouseout" : function() {
        if (selectedContent === 'default') {
          $(this).css("background-color",defaultButtonColor)
          $("#main-image").css("background-image",defaultImage)
          $(this).css("box-shadow","red 5px 5px 0px 0px") // changes SHADOW BACK to RED
          $("#aboutContent").hide()
        } else {
          // do nothing
        }
      },

      // IF user CLICKS, go to ACTUAL CONTENT
      "click" : function() {
        $("#projectsContent").hide()
        $("#resumeContent").hide()

        if (selectedContent === 'about') {
          $('#displayedContent').css('overflow-y','auto')
          $("#aboutContent").show()  
        } else {
          $('#displayedContent').css('overflow-y','auto')
          // $('#displayedContent').animate({scrollTop: $(window).scrollTop() + relativeScroll}, 1000)
          $("#aboutContent").show()
        }

        // just in case some other CONTENT is CLICKED BEFOREHAND
        $(this).css("background-color","darkred")             // set BACKGROUND for the Mouse Over'd button to RED
        $("#main-image").css("background-image",tongueImage) // 
        toggleSelectedContent('about');
        setButtonColors();

      }
        
    });

    $("#projectsButton").on({ // selects == GREEN == WORK Button
      
      // HOVER
      "mouseover" : function() { // on Mouse Over, do the following
        // console.log(selectedContent)
        
        if (selectedContent === 'projects') {
          // console.log('selectedContent is PROJECTS')
          $(this).css("background-color","darkgreen") // set background for the Mouse Over'd button to GREEN
          $("#main-image").css("background-image",thinkingImage) // change bg img for main img
          $("#projectsContent").show()
        } else if (selectedContent === 'default') {
          // console.log('selectedContent is DEFAULT')
          $(this).css("background-color","darkgreen") // set background for the Mouse Over'd button to GREEN
          $("#main-image").css("background-image",thinkingImage) // change bg img for main img
          $(this).css("box-shadow","black 5px 5px 0px 0px") // changes SHADOW BACK to BLACK

        } else {
          // console.log('selectedContent is NOT projects')
        }  
      },

      // EXIT hover
      "mouseout" : function() { 
        
        if (selectedContent === 'default') {
          $(this).css("background-color",defaultButtonColor)
          $("#main-image").css("background-image",defaultImage)
          $(this).css("box-shadow","rgb(46 232 0) 5px 5px 0px 0px") // changes SHADOW BACK to GREEN
          $("#projectsContent").hide()
        } else {
          // do nothing
        }

      },

      // IF user CLICKS, go to ACTUAL CONTENT
      "click" : function() { 
        $("#aboutContent").hide()    
        $("#resumeContent").hide()
        
        if (selectedContent === 'projects') {
          $('#displayedContent').css('overflow-y','auto')
          $("#projectsContent").show()
        } else {
          $('#displayedContent').css('overflow-y','auto')
          // $('#displayedContent').animate({scrollTop: $(window).scrollTop() + relativeScroll}, 1000)
          $("#projectsContent").show()
        }

        $(this).css("background-color","darkgreen") // set BACKGROUND for the Mouse Over'd button to GREEN
        $("#main-image").css("background-image",thinkingImage) // 
        
        toggleSelectedContent('projects');
        setButtonColors();

      }
      
    });

    // select RESUME Button
    $("#resumeButton").on({ 

      // HOVER
      "mouseover" : function() { // on Mouse Over, do the following
        
        if (selectedContent === 'resume') {
          // console.log('selectedContent is RESUME')
          $(this).css("background-color","darkblue") // set background for the Mouse Over'd button to BLUE
          $("#main-image").css("background-image",smartImage) // change bg img for main img
          $("#resumeContent").show()
        } else if (selectedContent === 'default') {
          // console.log('selectedContent is DEFAULT')
          $(this).css("background-color","darkblue") // set background for the Mouse Over'd button to BLUE
          $("#main-image").css("background-image",smartImage) // change bg img for main img
          $(this).css("box-shadow","black 5px 5px 0px 0px") // changes SHADOW BACK to BLACK

        } else {
          // console.log('selectedContent is NOT resume')
        }

      },

      // EXIT hover
      "mouseout" : function() { 
        
        if (selectedContent === 'default') {
          $(this).css("background-color",defaultButtonColor)
          $("#main-image").css("background-image",defaultImage)
          $(this).css("box-shadow","blue 5px 5px 0px 0px") // changes SHADOW BACK to BLUE
          $("#resumeContent").hide()
        } else {
          // do nothing
        }

      },

      // IF user CLICKS, go to ACTUAL CONTENT
      "click" : function() { 
                
        $("#aboutContent").hide()    
        $("#projectsContent").hide()

        if (selectedContent === 'resume') {
          $('#displayedContent').css('overflow-y','auto')
          $("#resumeContent").show()
        } else {
          $('#displayedContent').css('overflow-y','auto')
          // $('#displayedContent').animate({scrollTop: $(window).scrollTop() + relativeScroll}, 1000)
          $("#resumeContent").show()
        }

        $(this).css("background-color","darkblue") // set BACKGROUND for the Mouse Over'd button to BLUE
        $("#main-image").css("background-image",smartImage) // 

  
        toggleSelectedContent('resume');
        setButtonColors();

      }
      
    });

    $(".closeButton").on({"click":function() {
      $("#jobtitle-div").show()
      $("#displayedContent").hide()
      $("#aboutContent").hide()
      $("#projectsContent").hide()
      $("#resumeContent").hide()
      selectedContent = 'default'

      $("#main-image").css("background-image",defaultImage)
      setButtonColors();
    }})
  
    $(".outside-column").on({"click":function() {
      $("#jobtitle-div").show()
      $("#displayedContent").hide()
      $("#aboutContent").hide()
      $("#projectsContent").hide()
      $("#resumeContent").hide()
      selectedContent = 'default'

      $("#main-image").css("background-image",defaultImage)
      setButtonColors();
    }})

  });