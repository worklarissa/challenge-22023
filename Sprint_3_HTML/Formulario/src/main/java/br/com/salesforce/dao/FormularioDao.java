package br.com.salesforce.dao;

import java.util.ArrayList;
import java.util.List;

import br.com.salesforce.beans.Formulario;

public class FormularioDao {

    private static List<Formulario> formularios;

    public FormularioDao() {
        if (formularios == null) {
            formularios = new ArrayList<>();
        }
    }

    public void inserir(Formulario formulario) {
        formularios.add(formulario);
    }

    public List<Formulario> listar() {
        return formularios;
    }
}
