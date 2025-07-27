// 🧩 Lista de prospectos simulada
const prospectos = [
  {
    nombre: "Carlos Méndez",
    empresa: "Soluciones MX",
    correo: "carlos@mx.com",
    telefono: "555-1234",
    tipo: "Nuevo",
    estado: "Pendiente"
  },
  {
    nombre: "Ana Torres",
    empresa: "Traducciones Globales",
    correo: "ana@tg.com",
    telefono: "555-5678",
    tipo: "Recurrente",
    estado: "Contactado"
  }
];

// 🧾 Mostrar prospectos en la tabla
function mostrarProspectos(lista) {
  const tabla = document.getElementById("tabla-prospectos");
  tabla.innerHTML = "";

  lista.forEach((p, index) => {
    tabla.innerHTML += `
      <tr>
        <td>${p.nombre}</td>
        <td>${p.empresa}</td>
        <td>${p.correo}</td>
        <td>${p.telefono}</td>
        <td>${p.tipo}</td>
        <td>${p.estado}</td>
        <td><button onclick="marcarSeguimiento(${index})">Marcar seguimiento</button></td>
      </tr>
    `;
  });
}

// 🎯 Filtrar prospectos por estado
function filtrarEstado(estadoSeleccionado) {
  const prospectosFiltrados = estadoSeleccionado === ""
    ? prospectos
    : prospectos.filter(p => p.estado === estadoSeleccionado);

  mostrarProspectos(prospectosFiltrados);
}

// 📤 Simular envío de campaña
function simularEnvio() {
  document.getElementById("estado-campaña").textContent = "Campaña enviada con éxito ✅";
}

// 📌 Marcar seguimiento
function marcarSeguimiento(index) {
  prospectos[index].estado = "Seguimiento";
  mostrarProspectos(prospectos);
}

// 🚀 Inicializar al cargar
mostrarProspectos(prospectos);