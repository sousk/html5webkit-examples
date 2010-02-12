///------  PARTS OF LIBRARIES

Color = { };
Color.HEX_STRING = function(o) { 

	var z = o.toString(16), n = z.length; 

	while(n < 6) { z = '0' + z; n++; }

	return z; 

}; 

Color.RGB_HSV = function(o) { //- RGB from 0 to 255

	var _R = o.R / 255, _G = o.G / 255, _B = o.B / 255, H, S, V; 
	
	var min = Math.min(_R, _G, _B), max = Math.max(_R, _G, _B), D = max - min; 
	
	V = max; 
	
	if(D == 0) { H = 0; S = 0; } // No chroma

	else { // Chromatic data

	S = D / max; 

		var DR = ( ((max - _R) / 6) + (D / 2) ) / D; 
		var DG = ( ((max - _G) / 6) + (D / 2) ) / D; 
		var DB = ( ((max - _B) / 6) + (D / 2) ) / D; 

		if(_R == max) H = DB - DG; 
		else if(_G == max) H = (1 / 3) + DR - DB; 
		else if(_B == max) H = (2 / 3) + DG - DR; 

		if(H < 0) H += 1; 
		if(H > 1) H -= 1; 

	}
	
	return { H: H * 360, S: S * 100, V: V * 100 }; 

}; 

Color.HSV_RGB = function(o) { 

	var H = o.H / 360, S = o.S / 100, V = o.V / 100, R, G, B; 
	
	if(S == 0) { R = G = B = Math.round(V * 255); }

	else { if(H >= 1) H = 0; 

		H = 6 * H; 
		D = H - Math.floor(H); 
		A = Math.round(255 * V * (1 - S)); 
		B = Math.round(255 * V * (1 - (S * D))); 
		C = Math.round(255 * V * (1 - (S * (1 - D)))); 
		V = Math.round(255 * V); 

		switch(Math.floor(H)) { 

			case 0: R = V; G = C; B = A; break; 
			case 1: R = B; G = V; B = A; break; 
			case 2: R = A; G = V; B = C; break; 
			case 3: R = A; G = B; B = V; break; 
			case 4: R = C; G = A; B = V; break; 
			case 5: R = V; G = A; B = B; break; 

		}
	}

	return { R: R, G: G, B: B }; 

}; 

