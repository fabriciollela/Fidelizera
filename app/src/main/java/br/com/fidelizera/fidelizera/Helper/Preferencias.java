package br.com.fidelizera.fidelizera.Helper;

import android.content.Context;
import android.content.SharedPreferences;

/**
 * Created by fabri on 22/10/2017.
 */

public class Preferencias {
    private Context context;
    private SharedPreferences preferences;
    private String NOME_ARQUIVO = "projetoFirebase.preferencias";
    private int MODE = 0;
    private SharedPreferences.Editor editor;

    private final String CHAVE_IDENTIFICADOR = "identificarUsuarioLogado";
    private final String CHAVE_NOME = "nomeUsuarioLogado";

    public Preferencias(Context context) {
        this.context = context;
        preferences = context.getSharedPreferences(NOME_ARQUIVO, MODE);

        editor = preferences.edit();
    }

    public void salvarUsuariosPreferencias(String identificadorUsuario, String nomeUsuario) {
        editor.putString(CHAVE_IDENTIFICADOR, identificadorUsuario);
        editor.putString(CHAVE_NOME, nomeUsuario);
        editor.commit();
    }

    public String getIdentificador() {
        return preferences.getString(CHAVE_IDENTIFICADOR, null);

    }

    public String getNome() {
        return preferences.getString(CHAVE_NOME, null);

    }
}
