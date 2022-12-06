``` mermaid 
graph TD
client --> server 
server --> API
API --> server 
server --> models
models--> server
server --> client 
client --> server --> database
```

set up a server
listen on a port 

