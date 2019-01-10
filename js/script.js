
$(document).ready(function (){
   $('#blanks form').submit(function(event){
     var marks=0;
       var blanks=["answers1","answers2","answers3","answers4","answers5"]
        blanks.forEach(function(blank) {
           var userInput = $("input:radio[name=" + blank + "]:checked" ).val();
               if(userInput=="A"){
                   marks= marks+8;
                   };
                   
            
                  
                   });                    
                   alert("total: "+ marks + "/40" );                
                   event.preventDefault();
            });
            });

