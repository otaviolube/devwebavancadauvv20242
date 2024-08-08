## Lista de comandos usados no projeto

- npm init -y
- npm i typescript
- npx tsc --init
- npm i ts-node
- npx tsc

# Código do tsconfig.json

```
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./build",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```

## Scripts que estão sendo utilizados no package.json

- "build": "npx tsc"
- "dev": "npx ts-node ./src/server.ts"

## Configurando um servidor web

- npm install express
- npm i --save-dev @types/express

## Projeto para usar múltiplas versões do NodeJS na mesma máquina

- https://github.com/nvm-sh/nvm?tab=readme-ov-file#install--update-script

