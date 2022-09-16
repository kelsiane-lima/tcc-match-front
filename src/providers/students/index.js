import { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import { toast } from "react-toastify";

import api from "../../services/api";

const StudentsContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState({});

  useEffect(() => {
    api.get("/students").then((response) => {
      setStudents(response.data);
    });
  }, []);

  const createStudent = (data) => {
    api
      .post("/student", data)
      .then((_) => {
        toast.success("Aluno criado com sucesso!");
      })
      .catch((error) => {
        toast.error("Erro ao criar aluno!");
      });
  };
  const getStudent = (id) => {
    api
      .get(`/student/${id}`)
      .then((response) => {
        setStudent(response.data);
        return student;
      })
      .catch((error) => {
        toast.error("Erro ao buscar aluno!");
      });
  };

  return (
    <StudentsContext.Provider
      value={{ students, createStudent, getStudent }}
    >
      {children}
    </StudentsContext.Provider>
  );
};
export const useStudent = () => useContext(StudentsContext);
