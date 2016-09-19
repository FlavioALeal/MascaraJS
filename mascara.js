function mascara(m,t,e){
	var cursor = t.selectionStart;
	var texto = t.value;
	texto = texto.replace(/\D/g,'');
	var l = t.value.length;
	if(window.event) {                  
	    id = e.keyCode;
	} else if(e.which){                 
	    id = e.which;
	}
	cursorfixo=false;
	if(cursor < l)cursorfixo=true;
	var livre = false;
	if(id == 16 || id == 19 || (id >= 33 && id <= 40))livre = true;
 	ii=0;
 	mm=0;
 	if(!livre){
 		if(id!=8){
 		t.value="";
		 	for(i=0;i<l;i++){
		 		pos = i + ii;
		 		if(m.substr(mm,1) == "#"){									 			
		 			t.value += texto.substr(pos,1);
		 			if(m.substr(mm+1,1) != "#" && i<l){
		 				t.value += m.substr(mm+1,1);
		 				ii--;
		 				if(id!=8 && !cursorfixo)cursor++;
		 			}
		 		}else if(m.substr(i,1) != "#" && i == 0){
		 			t.value += m.substr(0,1) + texto.substr(0,1);
			 		if(id!=8 && !cursorfixo)cursor++;
			 		mm++;
		 		}else if(m.substr(i,1) != "#"){
		 			//t.value += texto.substr(pos,1);
			 		//if(id!=8 && !cursorfixo)cursor++;
		 		}
		 		mm++;
		 	}
	 	}
 	}

 	if(cursorfixo && !livre)cursor--;
 	t.setSelectionRange(cursor, cursor);
	}