using IM_BACKEND._05_Model;
using IM_BACKEND.DBInversionesMontiel;

namespace IM_BACKEND._03_Repositorio
{
    public class UsuarioRepositorio
    {
        _DbContextInversionesMontiel db = new _DbContextInversionesMontiel();

        public List<Usuario> getAll()
        {
            //select * from Usuario
            return db.Usuarios.ToList();
        }


        //select * from Usuario wherd id = id
        public Usuario getById(int id)
        {
            //select * from Usuario
            return db.Usuarios.Find(id);
        }


        //insert into Usuario
        //select * from Usuario wherd id = id
        public Usuario create(Usuario request)
        {
            //request.id = 0 // 4
            db.Usuarios.Add(request);
            db.SaveChanges();
            return request;
        }

        //update into Usuario
        //select * from Usuario wherd id = id
        public Usuario update(Usuario request)
        {
            //request.id = 0 // 4
            db.Usuarios.Update(request);
            db.SaveChanges();
            return request;
        }


        public int delete(int id)
        {

            //select * from Usuario wherd id = id
            Usuario Usuario = db.Usuarios.Find(id);
            //request.id = 0 // 4
            db.Usuarios.Remove(Usuario);
            return db.SaveChanges();
        }

        public Usuario ObtenerUsuarioPorUsername(string username)
        {

            Usuario user = db.Usuarios.Where(x => 
                x.Username.ToLower() == username.ToLower()
            ).FirstOrDefault();

            return user;
        }

        public FilterResponse<Usuario> ListarPorFiltro(FilterRequest request)
        {

            FilterResponse<Usuario> res = new FilterResponse<Usuario>();
            var query = db.Usuarios.Where(x => x.UsuarioId == x.UsuarioId);
            request.Filtros.ForEach(x =>
            {
                if (!string.IsNullOrEmpty(x.Valor))
                {
                    switch (x.Nombre)
                    {
                        case "Username":
                            query = query.Where(y => y.Username.ToLower().Contains(x.Valor.ToLower()));
                            break;
                        case "Nombre":
                            query = query.Where(y => y.Nombre.Contains(x.Valor));
                            break;
                    }
                }
            });
            res.TotalRegistro = query.Count();
            res.Lista =
                query
                .Skip((request.NumeroPagina - 1) * request.Cantidad)
                .Take(request.Cantidad)
                .ToList();

            return res;
        }




    }
}
