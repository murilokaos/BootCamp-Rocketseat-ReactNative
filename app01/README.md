# Instructions for start from react-native

- Instalar node/watchman/yarn/react-native-cli
- Instalar as extensões para o editor de texto [VSCode FTW]

* GoTo Hell

# Iniciando um projeto react-native

```
react-native init <name-to-app>
```

# Primeiros passos

- Configurar o eslint + prettier

  - eslint force style and suggest corrections (airbnb)
    - react/jsx-filename-extension
    - import/preferer-export
    - settings:
    - { import/resolver }
    - parser babel-eslint
  - babel plugins
    - babel-root-import
      - jsconfig.json { CompilerOptions > baseUrl/paths }
  - editor config

- Instalar dependências

  - yarn add ...

- Configurar ferramentas de debug
  - Reactotron
  - Devtools

* Se tiver redux, configurar redux-saga e duck pattern

- Configurar style global do styled-components
