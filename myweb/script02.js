		
		
		
		
		
		
		function f_calls_visible() {
			document.getElementById("id_calls_div").style.display="block";
			document.getElementById("id_calls_li").style.backgroundColor="#000000";
		}

		function f_calls_invisible() {
			document.getElementById("id_calls_div").style.display="none";
			document.getElementById("id_calls_li").style.backgroundColor="#ffffff";
		}
		
		function f_program_visible() {
			document.getElementById("id_program_div").style.display="block";
			document.getElementById("id_program_li").style.backgroundColor="#000000";
		}

		function f_program_invisible() {
			document.getElementById("id_program_div").style.display="none";
			document.getElementById("id_program_li").style.backgroundColor="#ffffff";
		}
		
		
		
		
		
		
		function func_ADPRL_onclick() {
			if(document.getElementById("id_ADPRL_a").style.display == "block"){
				document.getElementById("id_ADPRL_a").style.display="none";
			}
			else{
				document.getElementById("id_ADPRL_a").style.display="block";
			}
		}
		function func_CIBCI_onclick() {
			if(document.getElementById("id_CIBCI_a").style.display == "block"){
				document.getElementById("id_CIBCI_a").style.display="none";
			}
			else{
				document.getElementById("id_CIBCI_a").style.display="block";
			}
		}
		function func_symposia_onclick(x) {
			if(x.nextElementSibling.style.display == "block"){
				x.nextElementSibling.style.display="none";
				x.style.backgroundColor="#000000";
			}
			else{
				x.nextElementSibling.style.display="block";
				x.style.backgroundColor="#0000ff";
				
			}
		}
		function func_symposia_onmouseover(x) {
			if(x.nextElementSibling.style.display == "block"){
				x.style.backgroundColor="#000000";
				
			}
			else{
				x.style.backgroundColor="#000000";
				x.style.marginLeft="-18px";
			}
		}
		function func_symposia_onmouseout(x) {
			if(x.nextElementSibling.style.display == "block"){
				x.style.backgroundColor="#0000ff";
			}
			else{
				x.style.backgroundColor="#ffffff";
				x.style.marginLeft="-6px";
			}
		}