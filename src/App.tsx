import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { client } from "./lib/apollo";
import { Router } from "./Router";

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ApolloProvider>
    </>
  );
}

export default App;

// CMS = Content Management System

// Traz tanto o painel de ADMIN tanto quanto a parte visual de front-end (temas)
// Headless CMS: Painel de ADMIN (dados fornecidos através de uma API REST ou GraphQL)

// React que consome essa API do CMS

// query / mutation
// query = buscar dados
// mutation  = criar, atualizar, deletar dados
