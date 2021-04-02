function solveMe(inputObj){     //inputObj- method, uri, version, message
    //create a method for testing each property of the input obj
    //check if all of the properties are available, if not throw na Error
    //create boolean isValid; @the end if isValid, just return the input obj; if not - throw an error

    let {method} = inputObj;
    let {uri} = inputObj;
    let {version} = inputObj;
    let {message} = inputObj;

    let isValidInput = true;

   try{
       if((method || uri || version || message) === undefined){
           isValidInput = false;
           throw new Error('missing');
           console.log('errorish');

       }
   } catch (error){

   }

}
solveMe({

        uri: 'svn.public.catalog',
        version: 'HTTP/1.1',
        message: ''
    }
);
