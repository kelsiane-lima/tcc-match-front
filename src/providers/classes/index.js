import { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import { toast } from "react-toastify";

import api from "../../services/api";

const ClassesContext = createContext();

export const ClassProvider = ({ children }) => {
    const [classes, setClasses] = useState([]);
    
    useEffect(() => {
        api.get("/classes").then((response) => {
        setClasses(response.data);
        });
    }, []);
    
    const createClass = (data) => {
        api.post("/class", data).then((_) => {
            toast.success("Turma criada com sucesso!");
        }).catch((error) => {
            toast.error("Erro ao criar turma!");
        }
        )
    }
    
    return (
        <ClassesContext.Provider value={{ classes, createClass }}>
        {children}
        </ClassesContext.Provider>
    );
    }

export const useClass = () => useContext(ClassesContext);
