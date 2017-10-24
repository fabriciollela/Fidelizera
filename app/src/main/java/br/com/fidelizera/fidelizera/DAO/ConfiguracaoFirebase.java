package br.com.fidelizera.fidelizera.DAO;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;

/**
 * Created by fabri on 22/10/2017.
 */

public class ConfiguracaoFirebase {
    private static DatabaseReference referenciaFirebase;
    private static FirebaseAuth autenticacao;

    public static DatabaseReference getReferenciaFirebase () {
        if (referenciaFirebase == null){
            referenciaFirebase = FirebaseDatabase.getInstance().getReference();
        }
        return referenciaFirebase;
    }
    public static FirebaseAuth getFirebaseAutenticacao(){
        if (autenticacao == null){
            autenticacao= FirebaseAuth.getInstance();
        }
        return autenticacao;
    }
}
