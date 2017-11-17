run_console = true;
function loadData(){
	  loading();
	  var url = 'https://jsonplaceholder.typicode.com/albums';
	  _loadDoc(url,function(r){
	  		if (r==false)
	  		{
	  			return;
	  		}
	  		 _writeLog(r);
	  		_printTo("display_result",r);
	  		_printTo("url","URL :  "+url);
	  });
}

function loadPost(){
	loading();
	var url = 'https://www.lamhotsimamora.com/FAKE-API/';
	_requestPOST(url,"id_user=1&username=lorem ipsum",function(r){
		_writeLog(r);
		   if (r==false)
		   {
		   	  return;
		   }
		    _writeLog(r);
		   _printTo("display_result",r);
		   _printTo("url","URL :  "+url);
	});
}

function loadGet(){
	loading();
	var url = 'https://jsonplaceholder.typicode.com/posts/1/comments';
	_requestGET(url,function(r){
		   if (r==false)
		   {
		   	  return;
		   }
		    _writeLog(r);
		   _printTo("display_result",r);
		   _printTo("url","URL :  "+url);
	});
}

function loadPut(){
	loading();
	var url = 'https://reqres.in/api/users/2';
	_requestPUT(url,function(r){
			if (r==false)
		   {
		   	  return;
		   }
		   _printTo("display_result",r);
		   _printTo("url","URL :  "+url);
	});
}

