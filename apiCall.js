function apiUrl(urlApi){
	$.ajaxSetup({
		headers: {},
        url: urlApi,//"https://unionmx.com.mx/api/Reclutamiento/Coordenadas",
        contentType: "application/json;",
        dataType: "json"
	});
};

