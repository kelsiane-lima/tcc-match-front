import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useActivitie } from "../../providers/activities"
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

const CreateActivity = () => {
    const { createActivity } = useActivitie();
    
    const navigate = useNavigate();

    const schema = yup.object().shape({
        title: yup.string().required("Campo obrigatório"),
        name: yup.string().required("Campo obrigatório!"),
        deadline: yup.date(),
        description: yup.string(),
      });
      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({ resolver: yupResolver(schema) });
    
      const onSubmitFunction = (data) => {
        data.classId  = 3;
        console.log(data);
        createActivity(data, navigate);
      };
return (
    <div>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
            <input
            type="text"
            placeholder="Nome"
            {...register("name")}
            />
            <p>{errors.name?.message}</p>
            <input
            type="text"
            placeholder="title"
            {...register("title")}
            />
            <p>{errors.title?.message}</p>
            <input
            type="Date"
            placeholder="Data de Entrega"
            {...register("deadline")}
            />
            <p>{errors.deadline?.message}</p>
            <input
            type="text"
            placeholder="Descrição"
            {...register("description")}
            />
            <p>{errors.description?.message}</p>
            <button type="submit">Criar atividade</button>
        </form>
    </div>
)

    }

    export default CreateActivity;