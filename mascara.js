function mascara(m,t,e){
	var cursor = t.selectionStart;
	var texto = t.value;
	texto = texto.replace(/\D/g,'');
	var l = texto.length;
	var lm = m.length;
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
 		/*
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
		 		}else if(m.substr(mm,1) != "#"){
		 			if(mm==0){t.value += m.substr(mm,1) + texto.substr(i,1)};
		 			if(mm>0){t.value += texto.substr(pos+1,1);ii++}
			 		if(id!=8 && !cursorfixo)cursor++;
			 		mm++;
		 		}
		 		mm++;
		 	}
		 	console.log("Pos="+pos+", L="+l+", MM="+mm);
	 	}
	 	*/
	 	if(id!=8){
		 	t.value="";
		 	j=0;
		 	for(i=0;i<lm;i++){
		 		if(m.substr(i,1)=="#"){
		 			t.value+=texto.substr(j,1);
		 			j++;
		 		}else if(m.substr(i,1)!="#"){
		 			t.value+=m.substr(i,1);
		 		}
		 		if(id!=8 && !cursorfixo)cursor++;
		 		if((j)==l+1)break;
		 	}
	 	}
 	}
 	if(cursorfixo && !livre)cursor--;
 	t.setSelectionRange(cursor, cursor);
}