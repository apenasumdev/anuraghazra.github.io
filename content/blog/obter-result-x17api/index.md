---
title: COMO OBTER RESULTADO X17 APIS
date: 2022-09-04 14:16:26
author: souzx17
tags: ['javascript']
---

## Obter resultados

```javascript
fetch('https://x17apis.herokuapp.com/api/category/api-escolheida?apikey=SUA_APIKEY)
        .then(response => response.json())
        .then(quote => console.log(quote))
```  

## Exemplo real

```javascript
fetch('https://x17apis.herokuapp.com/api/random/cosplay?apikey=API-BETA-TEST)
        .then(response => response.json())
        .then(quote => console.log(quote))
```

## Imporante

- Limite free de request é apenas 25 no momento.
- Apikey "API-BETA-TEST" não existe, é apenas um exemplo
- Apenas o desenvolver pode te fornecer uma apikey premium com 1000 request por dia.
