import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";

  function TimelineCronograma() {
    const dados = [
      {
        titulo: "Entrega Introdução",
        data: "2021-10-10",
        descricao: "ddsdsdsdsdsdsds",
        concluido: true,
      },
      {
        titulo: "Entrega Desenvolvimento",
        data: "2021-10-10",
        descricao: "adsdsdsdsdsdsdsdsdsdsdlo",
        concluido: true,
      },
      {
        titulo: "Apresentação de Artigo",
        data: "2021-10-10",
        descricao: "Você pode escolher um artigo de sua preferencia sobre seu tema e apresentar em sala de aula",
        concluido: false,
      },
      {
        titulo: "Entrega Desenvolvimento",
        data: "2021-10-10",
        descricao: "adsdsdsdsdsdsdsdsdsdsdlo",
        concluido: false,
      },
      {
        titulo: "Entrega Introdução",
        data: "2021-10-10",
        descricao: "ddsdsdsdsdsdsds",
        concluido: false,
      },
      {
        titulo: "Entrega Desenvolvimento",
        data: "2021-10-10",
        descricao: "adsdsdsdsdsdsdsdsdsdsdlo",
        concluido: false,
      },
    ];
    return (
      <VerticalTimeline>
        {dados.map((value, index) => {
          return (
            <>
            
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={
                !value.concluido
                  ? { background: "rgb(33, 150, 243)", color: "black" }
                  : { background: "#00a000", color: "black" }
              }
              contentArrowStyle={
                !value.concluido
                  ? { borderRight: "rgb(33, 150, 243)" }
                  : { borderRight: "#00a000" }
              }
              date={value.data}
              iconOnClick={() => alert("concluido = " + value.concluido)}
              iconStyle={
                !value.concluido
                  ? { background: "rgb(33, 150, 243)", color: "black" }
                  : { background: "#00a000", color:"black" }
              }
            >
              <h3 className="vertical-timeline-element-title">{value.titulo}</h3>
              <h4 className="vertical-timeline-element-subtitle">{value.data}</h4>
              <p>{value.descricao}</p>
            </VerticalTimelineElement>
           
            </>
          );
        })}
      </VerticalTimeline>
    );
  }
  
  export default TimelineCronograma;
  