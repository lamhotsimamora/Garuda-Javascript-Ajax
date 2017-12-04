# Garuda-Javascript-Ajax

Garuda Javascript Special for AJAX, with method ( POST,GET,& PUT )

### Getting Started
```
git clone https://github.com/lamhotsimamora/Garuda-Javascript-Ajax.git
```

### CDN
```
https://cdn.rawgit.com/lamhotsimamora/Garuda-Javascript-Ajax/master/GF.js
```

### HTML
```
<script type="text/javascript" src="https://cdn.rawgit.com/lamhotsimamora/Garuda-Javascript-Ajax/master/GF.js"></script>
```

### Demo Page
```
https://lamhotsimamora.github.io/Garuda-Javascript-Ajax/
```


### Code Load Document ( No Method )
```
 var url = 'https://jsonplaceholder.typicode.com/albums';
	  _loadDoc(url,function(r){
	                 // Check if status code is 404 
		        // (r==false)
	  		if (r==false)
	  		{
	  			return;
	  		}
	  		 _writeLog(r);
	  });
```

### Code Method POST
```
 var url = 'https://www.lamhotsimamora.com/FAKE-API/';
	_requestPOST(url,"id_user=1&username=lorem ipsum",function(r){
	            // Check if status code is 404 
		    // (r==false)
		   if (r==false)
		   {
		   	  return;
		   }
		    _writeLog(r);
	});
```

### Code Method GET
```
 var url = 'https://jsonplaceholder.typicode.com/posts/1/comments';
	_requestGET(url,function(r){
	            // Check if status code is 404 
		   // (r==false)
		   if (r==false)
		   {
		   	  return;
		   }
		    _writeLog(r);
	});
```

### Code Method PUT
```
 var url = 'https://reqres.in/api/users/2';
	_requestPUT(url,function(r){
	             // Check if status code is 404 
		    // (r==false)
		   if (r==false)
		   {
		   	  return;
		   }
		    _writeLog(r);
	});
```

------------------------

## BONUS Code
```
 // HTML
 <input type="text" id="my_username" placeholder="Username">
```
```
 // For get value of input text
 var my_username =  _getValById("my_username");
 
 // For get object of input text
 var my_obj      =  _getById("my_username");
 
 // For clear the input text
 _clear("my_username");
 
 // For write custom console log 
 _writeLog(my_username);
```



