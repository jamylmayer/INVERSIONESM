using IM_BACKEND._03_Repositorio;
using IM_BACKEND._05_Model;
using IM_BACKEND.DBInversionesMontiel;

namespace IM_BACKEND._02_Logica
{
    public class EgresoLogica
    {
        EgresoRepositorio repo = new EgresoRepositorio();
        ProductoLogica ProNeg = new ProductoLogica();


        public List<VistaEgreso> getAllDetallado()
        {
            return repo.getAllDetallado();
        }


        public List<Egreso> getAll()
        {
            return repo.getAll();
        }
                
        public Egreso getById(int salida_id)
        {            
            return repo.getById(salida_id);
        }

        public RespuestaGeneral RegistrarEgreso(Egreso request)
        {
            RespuestaGeneral res = new RespuestaGeneral();
            Producto prd = ProNeg.getById(request.ProductoId);
            if (
                prd.Stock < request.Cantidad
                )
            {
                res.CodigoRespuesta = "Warning";
                res.Mensaje = $"Solo se cuenta con {prd.Stock.ToString("0.00")}  ";

                return res;
            }
            prd.Stock = (decimal)(prd.Stock - request.Cantidad);

            ProNeg.update(prd);

            create(request);
            res.CodigoRespuesta = "OK";
            res.Mensaje = "Registrado correctamente";

            return res;
        }
        public Egreso create(Egreso request)
        {                   

            request = repo.create(request);

            return request;

        }

        public Egreso update(Egreso request)
        {
            return repo.update(request);
        }


        public int delete(int salida_id)
        {

            return repo.delete(salida_id);
        }
        public FilterResponse<VistaEgreso> ListarPorFiltro(FilterRequest request)
        {
            FilterResponse<VistaEgreso> res = repo.ListarPorFiltro(request);
            return res;
        }
    }

}
