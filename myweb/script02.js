		
		
		
		
		
		
		function f_calls_visible(x) {
			document.getElementById("id_calls_div").style.display="block";
			document.getElementById("id_calls_div").style.marginLeft = "calc(103.4%)";
			document.getElementById("id_calls_li").style.backgroundColor="#000000";
			document.getElementById("id_calls_li").style.color="#ffffff";
			document.getElementById("id_calls_li").style.marginLeft="8px";
			document.getElementById("id_calls_li").style.paddingLeft="18px";
			document.getElementById("id_calls_li").style.width="calc(100% - 10px)";
			
		}

		function f_calls_invisible(x) {
			document.getElementById("id_calls_div").style.display="none";
			document.getElementById("id_calls_li").style.backgroundColor="#ffffff";
			document.getElementById("id_calls_li").style.color="#00008b";
			document.getElementById("id_calls_li").style.marginLeft="-6px";
			document.getElementById("id_calls_li").style.paddingLeft="18px";
		}
		
		function f_program_visible(x) {
			document.getElementById("id_program_div").style.display="block";
			document.getElementById("id_program_div").style.marginLeft = "calc(103.4%)";
			document.getElementById("id_program_li").style.backgroundColor="#000000";
			document.getElementById("id_program_li").style.color="#ffffff";
			document.getElementById("id_program_li").style.marginLeft="8px";
			document.getElementById("id_program_li").style.paddingLeft="18px";
			document.getElementById("id_program_li").style.width="calc(100% - 10px)";
		}

		function f_program_invisible(x) {
			document.getElementById("id_program_div").style.display="none";
			document.getElementById("id_program_li").style.backgroundColor="#ffffff";
			document.getElementById("id_program_li").style.color="#00008b";
			document.getElementById("id_program_li").style.marginLeft="-6px";
			document.getElementById("id_program_li").style.paddingLeft="18px";
		}
		
		
		
		function func_menu_onmouseover(x) {
			x.style.backgroundColor="#000000";
			x.style.marginLeft="8px";
			x.style.paddingLeft="18px";
			x.style.color="#ffffff";
			x.style.width="calc(100% - 10px)";
		}
		function func_menu_onmouseout(x) {
			x.style.backgroundColor="#ffffff";
			x.style.marginLeft="-6px";
			x.style.paddingLeft="18px";
			x.style.color="#00008b";
		}
		
		function func_select_onmouseover(x) {
			x.style.backgroundColor="#0000ff";
			x.style.marginLeft="6px";
			x.style.paddingLeft="18px";
			x.style.color="#ffffff";
			x.style.width="calc(100% - 10px)";
		}
		function func_select_onmouseout(x) {
			x.style.backgroundColor="#cccccc";
			x.style.marginLeft="-6px";
			x.style.paddingLeft="18px";
			x.style.color="#00008b";
		}
		
		
		
		

		function func_symposia_onclick(x) {
			if(x.nextElementSibling.style.display == "block"){
				x.nextElementSibling.style.display="none";
				x.style.backgroundColor="#000000";
				x.style.color="#ffffff";
				document.getElementById("middle_center_block").style.height = document.getElementById("middle_center_block").clientHeight - 130 + 'px';
			}
			else{
				x.nextElementSibling.style.display="block";
				x.style.backgroundColor="#0000ff";
				x.style.color="#ffffff";
				document.getElementById("middle_center_block").style.height = document.getElementById("middle_center_block").clientHeight + 130 + 'px';
			}
		}
		function func_symposia_onmouseover(x) {
			if(x.nextElementSibling.style.display == "block"){
				x.style.backgroundColor="#000000";
				x.style.color="#ffffff";
			}
			else{
				x.style.backgroundColor="#000000";
				x.style.marginLeft="-18px";
				x.style.color="#ffffff";
			}
		}
		function func_symposia_onmouseout(x) {
			if(x.nextElementSibling.style.display == "block"){
				x.style.backgroundColor="#0000ff";
				x.style.color="#ffffff";
			}
			else{
				x.style.backgroundColor="#ffffff";
				x.style.marginLeft="-6px";
				x.style.color="#00008b";
			}
		}