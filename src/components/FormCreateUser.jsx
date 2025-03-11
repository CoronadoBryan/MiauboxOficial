"use client";

import { useState } from "react";

export default function FormCreateUser() {
  const [formData, setFormData] = useState({
    telefono: "",
    medio: "",
    observacion: "",
    status: "ACTIVE",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Error al crear usuario");
      }

      // Limpiar el formulario después de enviar
      setFormData({
        telefono: "",
        medio: "",
        observacion: "",
        status: "ACTIVE",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="row gy-4">
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title mb-0">Crear Nuevo Usuario</h5>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="row gy-3">
                <div className="col-12">
                  <label className="form-label">Teléfono</label>
                  <input
                    type="text"
                    name="telefono"
                    className="form-control"
                    placeholder="Ingrese número de teléfono"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-12">
                  <label className="form-label">Medio</label>
                  <select
                    name="medio"
                    className="form-select"
                    value={formData.medio}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Seleccione medio</option>
                    <option value="whatsapp">WhatsApp</option>
                    <option value="telegram">Telegram</option>
                    <option value="facebook">Facebook</option>
                  </select>
                </div>
                <div className="col-12">
                  <label className="form-label">Observacion</label>
                  <input
                    type="text"
                    name="observacion"
                    className="form-control"
                    value={formData.observacion}
                    onChange={handleChange}
                    placeholder="Ingrese el medio"
                    required
                  />
                </div>

                <div className="col-12">
                  <label className="form-label">Estado</label>
                  <select
                    name="status"
                    className="form-select"
                    value={formData.status}
                    onChange={handleChange}
                    required
                  >
                    <option value="ACTIVE">Activo</option>
                    <option value="INACTIVE">Inactivo</option>
                  </select>
                </div>

                <div className="col-12">
                  <button type="submit" className="btn btn-primary-600">
                    Crear Usuario
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
