let formNodes = document.querySelector("form").childNodes


function onMasterFormSubmit(){
    
    let msg = ""

    for(x in formNodes){
        if(formNodes[x].tagName=="INPUT" || formNodes[x].tagName=="SELECT"){
            if(formNodes[x].type =="radio"){
                if(formNodes[x].checked){
                    msg+=formNodes[x].name+" : "+formNodes[x].value+"%0a"

                }
            }
            else if(formNodes[x].type =="checkbox"){
                if(formNodes[x].checked){
                    msg+=formNodes[x].name+" : "+"yes"+"%0a"
                }else{
                    msg+=formNodes[x].name+" : "+"no"+"%0a"
                }
            }else{
            msg+=formNodes[x].name+" : "+formNodes[x].value+"%0a"
            } 
        }
        if(formNodes[x].tagName=="DIV"){
            let insideForm = formNodes[x].childNodes

            for(x in insideForm){
                if(insideForm[x].tagName=="INPUT" || insideForm[x].tagName=="SELECT"){
                    if(insideForm[x].type =="radio"){
                        if(insideForm[x].checked){
                            msg+=insideForm[x].name+" : "+insideForm[x].value+"%0a"

                        }
                    }
                    else if(insideForm[x].type =="checkbox"){
                        if(insideForm[x].checked){
                            msg+=insideForm[x].name+" : "+"yes"+"%0a"
                        }else{
                            msg+=insideForm[x].name+" : "+"no"+"%0a"
                        }
                    }else{
                    msg+=insideForm[x].name+" : "+insideForm[x].value+"%0a"
                    } 
                }
            }

        }
    }   

    msg = msg.split(" ")
    msg = msg.join("%20")
   


    window.open("https://wa.me/919068194171?text="+msg, '_blank');

}