import http from 'http';

const server = http.createServer((req:http.IncomingMessage,res:http.ServerResponse) =>{

  //Home route
  if(req.url === "/"){
    res.writeHead(200,{
      "Content Type":"text/html"
    })
    res.write("<h1>Home</h1>")
    res.end()
    return
  }

  //About route
  if(req.url === "/about"){
    res.writeHead(200,{
      "Content Type":"text/html"
    })
    res.write("<h1>About</h1>")
    res.end()
    return
  }

  //my-account route
  if(req.url === "/my-account"){
    res.writeHead(403,{
      "Content Type": 'text/plain' 
    })
    res.write("You have no access to this page")
    res.end()
    return
    
  }else{
    res.writeHead(404,{
      "Content Type": 'text/plain' 
    })
    res.write("Page not found")
    res.end()
    return 
  }
})