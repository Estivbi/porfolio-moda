// Contacto.jsx
import React from "react";

const Contacto = () => (
  <section className="bg-moda-sky rounded-xl p-6 shadow">
    <h2 className="text-2xl font-semibold mb-2">Contacto</h2>
    <form className="flex flex-col gap-3">
      <input type="text" placeholder="Nombre" className="rounded border border-moda-gray p-2 focus:outline-none focus:ring-2 focus:ring-moda-rose" />
      <input type="email" placeholder="Email" className="rounded border border-moda-gray p-2 focus:outline-none focus:ring-2 focus:ring-moda-rose" />
      <textarea placeholder="Mensaje" className="rounded border border-moda-gray p-2 focus:outline-none focus:ring-2 focus:ring-moda-rose" />
      <button type="submit" className="bg-moda-rose text-moda-dark font-semibold py-2 px-4 rounded hover:bg-moda-peach transition">Enviar</button>
    </form>
  </section>
);

export default Contacto;
