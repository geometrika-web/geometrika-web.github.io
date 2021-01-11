$(document).ready(function() {
    var counter = 0;
  
   
    // Start the changing images
    setInterval(function() {
      if(counter == 4) { 
        counter = 0; 
      }
      
  
      changeImage(counter);
      counter++;
    }, 3000);
  
    // Set the percentage off
    loading();
  });
  
  function changeImage(counter) {
    var images = [
      '<i class="drone"></i>',
      '<i class="map-pin"></i>',
      '<i class="total-station"></i>',
    ];
  
    $(".loader .images").html(""+ images[counter] +"");
  }
  
  function loading(){
    var num = 0;
    
    for(i=0; i<=100; i++) {
      setTimeout(function() { 
        $('.loader span').html(num+'%');
        
        if(num == 100) {
            $('.loader').fadeOut(500, function () {
            });
            $('.loader-background').fadeOut(3000, function () {
            });
            $('.body').load(' .masthead', function() {
              /// can add another function here
              $('body').removeClass('loading');
         });
        }
        num++;
      },i*70);
    };
  }
  
  