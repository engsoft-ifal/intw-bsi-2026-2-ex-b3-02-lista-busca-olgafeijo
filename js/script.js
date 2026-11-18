// Dados prontos — não precisa mudar.
const cursos = [
  { nome: "HTML", area: "Estrutura" },
  { nome: "CSS", area: "Estilo" },
  { nome: "JavaScript", area: "Comportamento" },
];

const lista = document.querySelector("#lista");
const busca = document.querySelector("#busca");

function render(filtro = "") {
  
  const cursosFiltrados = cursos.filter(curso => 
    curso.nome.toLowerCase().includes(filtro.toLowerCase())
  );

  if (cursosFiltrados.length === 0) {
    lista.innerHTML = "<li>Nada encontrado</li>";
  } else {

    lista.innerHTML = cursosFiltrados.map(curso => 
      `<li>${curso.nome}</li>`
    ).join("");
  }
}


render(); // Carrega os 3 cursos inicialmente

busca.addEventListener("input", (evento) => {
  render(evento.target.value); 
});
