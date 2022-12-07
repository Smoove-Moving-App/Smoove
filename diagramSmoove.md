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



```mermaid
graph TD
signUpJSX --> serverJS --> app.post(/signup) --> usercontroller.signup --> usercontroller.signUpLogin
```

```mermaid
graph 
email,pw--> frontend
frontend -->email,pw --> DB --> email/pw,\nexists?--> email/pw,\nyes-->email/pw\nCorrect?-->yes-->DB
email/pw,\nexists? --> email/pw,\nno --> email/pw\nblank?--> yes
email/pw\nblank?--> no --> create\nrecord --> DB
```


UC.login
UC.signup
UC.signuplogin
UC.loginExistscheck

```mermaid
graph 
UC.signup --> UC.loginExistscheck --> yes--> UC.login--> FE 
UC.loginExistscheck --> no -->UC.signup-->UC.signuplogin-->FE
UC.login-->UC.signuplogin
