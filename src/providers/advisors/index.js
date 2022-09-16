import { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import { toast } from "react-toastify";

import api from "../../services/api";

const AdvisorsContext = createContext();

export const AdvisorProvider = ({ children }) => {

    const [advisors, setAdvisors] = useState([]);
    
    useEffect(() => {
        api.get("/advisors").then((response) => {
        setAdvisors(response.data);
        });
    }, []);
    
    const createAdvisor = (data) => {
        api.post("/advisor", data).then((_) => {
            toast.success("Orientador criado com sucesso!");
        }).catch((error) => {
            toast.error("Erro ao criar orientador!");
        }
        )
    }
    
    return (
        <AdvisorsContext.Provider value={{ advisors, createAdvisor }}>
        {children}
        </AdvisorsContext.Provider>
    );
    }

export const useAdvisor = () => useContext(AdvisorsContext);
