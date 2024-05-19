package br.com.salesforce.resource;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import br.com.salesforce.beans.Formulario;
import br.com.salesforce.dao.FormularioDao;

@Path("/formulario")
public class FormularioResource {
    
    private FormularioDao formularioDao = new FormularioDao();
    
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public Response inserir(Formulario formulario) {
        try {
            formularioDao.inserir(formulario);
            return Response.status(Response.Status.CREATED).entity("Formulário inserido com sucesso!").build();
        } catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity("Erro ao inserir o formulário: " + e.getMessage()).build();
        }
    }
    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response listar() {
        try {
            return Response.status(Response.Status.OK).entity(formularioDao.listar()).build();
        } catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity("Erro ao buscar os formulários: " + e.getMessage()).build();
        }
    }
}
