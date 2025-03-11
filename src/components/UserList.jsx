import { get } from "jquery";
import { getUsers } from "@/app/usuarios/user.api";
import Link from "next/link";

export default async function  DashBoardLayerTwo () {

  const { users } = await getUsers();

  

  return (
    <section className="row gy-4">
          <div>
            <div className="col-xxl-9 col-xl-12">
              <div className="card h-100">
                <div className="card-body p-24">
                  {/* Header */}
                  <div className="d-flex flex-wrap align-items-center gap-1 justify-content-between mb-16">
                    <ul
                      className="nav border-gradient-tab nav-pills mb-0"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link d-flex align-items-center active"
                          id="pills-to-do-list-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-to-do-list"
                          type="button"
                          role="tab"
                          aria-controls="pills-to-do-list"
                          aria-selected="true"
                        >
                          usuarios
                          <span className="text-sm fw-semibold py-6 px-12 bg-neutral-500 rounded-pill text-white line-height-1 ms-12 notification-alert">
                            {users.length}
                          </span>
                        </button>
                      </li>
                    </ul>
                    <button
                      type="button"
                      className="btn btn-primary-600 radius-8 px-20 py-11"
                    >
                      <Link href="/UserCreate">Crear usuario</Link>
                    </button>
                  </div>

                  {/* Table */}
                  <div className="table-responsive scroll-sm">
                    <table className="table bordered-table sm-table mb-0">
                      <thead>
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">Teléfono</th>
                          <th scope="col">Medio</th>
                          <th scope="col" className="text-center">
                            Estado
                          </th>
                          <th scope="col" className="text-center">
                            Acciones
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {users.map((user) => (
                          <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.telefono}</td>
                            <td>{user.medio}</td>
                            <td className="text-center">
                              <span
                                className={`bg-${
                                  user.status === "ACTIVE" ? "success" : "danger"
                                }-focus text-${
                                  user.status === "ACTIVE" ? "success" : "danger"
                                }-main px-24 py-4 rounded-pill fw-medium text-sm`}
                              >
                                {user.status}
                              </span>
                            </td>
                            <td className="text-center">
                              {/* Add your action buttons here */}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </section>
  );
};

