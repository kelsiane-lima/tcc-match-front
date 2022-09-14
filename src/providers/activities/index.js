import { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";

const ActivitiesContext = createContext();

export const ActivityProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    api.get("/activities").then((response) => {
      setActivities(response.data);
    });
  }, []);

  const createActivity = (data) => {
    api.post("/activity", data).then((_) => {
        toast.success("Atividade criada com sucesso!");
    }).catch((error) => {
        toast.error("Erro ao criar atividade!");
    }
    )
}

  return (
    <ActivitiesContext.Provider value={{ activities, createActivity }}>
      {children}
    </ActivitiesContext.Provider>
  );
}

export const useActivitie = () => useContext(ActivitiesContext);