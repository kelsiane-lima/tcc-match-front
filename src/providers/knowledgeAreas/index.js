import { useState } from "react";
import { createContext, useContext } from "react";
import { toast } from "react-toastify";

import api from "../../services/api";

const KnowledgeAreasContext = createContext();

export const KnowledgeAreaProvider = ({ children }) => {
  const [knowledgeAreas, setKnowledgeAreas] = useState([]);

  const getKnowledgeAreasByUserId = (id) => {
    api.get(`/knowledgeAreas/${id}`).then((response) => {
      setKnowledgeAreas(response.data);
      return knowledgeAreas;
    });
  };

  const createKnowledgeArea = (data) => {
    api
      .post("/knowledgeArea", data)
      .then((_) => {
        toast.success("Área de conhecimento criada com sucesso!");
      })
      .catch((error) => {
        toast.error("Erro ao criar área de conhecimento!");
      });
  };

  return (
    <KnowledgeAreasContext.Provider
      value={{ getKnowledgeAreasByUserId, createKnowledgeArea }}
    >
      {children}
    </KnowledgeAreasContext.Provider>
  );
};

export const useKnowledgeArea = () => useContext(KnowledgeAreasContext);
