package br.com.fidelizera.fidelizera;

import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.RadioButton;
import android.widget.Toast;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.auth.AuthResult;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthActionCodeException;
import com.google.firebase.auth.FirebaseAuthInvalidCredentialsException;
import com.google.firebase.auth.FirebaseAuthUserCollisionException;
import com.google.firebase.auth.FirebaseUser;

import br.com.fidelizera.fidelizera.DAO.ConfiguracaoFirebase;
import br.com.fidelizera.fidelizera.Entidades.Usuarios;
import br.com.fidelizera.fidelizera.Helper.Base64Custom;
import br.com.fidelizera.fidelizera.Helper.Preferencias;

public class CadastroActivity extends AppCompatActivity {
    private EditText edtCadEmail;
    private EditText edtCadNome;
    private EditText edtCadSobrenome;
    private EditText edtCadSenha;
    private EditText edtCadConfirmaSenha;
    private EditText edtCadAniversario;
    private RadioButton rbMasculino;
    private RadioButton rbFeminino;
    private Button btnGravar;

    private Usuarios usuarios;
    private FirebaseAuth autenticacao;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_cadastro);
        edtCadEmail = (EditText) findViewById(R.id.edtCadEmail);
        edtCadNome = (EditText) findViewById(R.id.edtCadNome);
        edtCadSobrenome = (EditText) findViewById(R.id.edtCadSobrenome);
        edtCadSenha = (EditText) findViewById(R.id.edtCadSenha);
        edtCadConfirmaSenha = (EditText) findViewById(R.id.edtCadConfirmaSenha);
        edtCadAniversario = (EditText) findViewById(R.id.edtCadAniversario);
        rbMasculino = (RadioButton) findViewById(R.id.rbMasculino);
        rbFeminino = (RadioButton) findViewById(R.id.rbFeminino);
        btnGravar = (Button) findViewById(R.id.btnGravar);

        btnGravar.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (edtCadSenha.getText().toString().equals(edtCadConfirmaSenha.getText().toString())) {
                    usuarios = new Usuarios();
                    usuarios.setEmail(edtCadEmail.getText().toString());
                    usuarios.setNome(edtCadNome.getText().toString());
                    usuarios.setSobrenome(edtCadSobrenome.getText().toString());
                    usuarios.setSenha(edtCadSenha.getText().toString());
                    usuarios.setAniversario(edtCadAniversario.getText().toString());

                    if (rbFeminino.isChecked()) {
                        usuarios.setSexo("Feminino");
                    } else {
                        Toast.makeText(CadastroActivity.this, "As senhas não são correspondentes", Toast.LENGTH_LONG).show();
                    }
                    cadastrarUsuario();

                }
            }
        });
    }

    private void cadastrarUsuario() {
        autenticacao = ConfiguracaoFirebase.getFirebaseAutenticacao();
        autenticacao.createUserWithEmailAndPassword(
                usuarios.getEmail(),
                usuarios.getSenha()
        ).addOnCompleteListener(CadastroActivity.this, new OnCompleteListener<AuthResult>() {
            @Override
            public void onComplete(@NonNull Task<AuthResult> task) {
                if (task.isSuccessful()) {
                    Toast.makeText(CadastroActivity.this, "Usuário Cadastrado com sucesso", Toast.LENGTH_LONG).show();

                    String identificadorUsuario = Base64Custom.codificarBase64(usuarios.getEmail());
                    FirebaseUser usuarioFirebase = task.getResult().getUser();
                    usuarios.setId(identificadorUsuario);
                    usuarios.Salvar();

                    Preferencias preferencias = new Preferencias(CadastroActivity.this);
                    preferencias.salvarUsuariosPreferencias(identificadorUsuario, usuarios.getNome());

                    abrirLoginUsuario();
                } else {
                    String erroExcecao = "";
                    try {
                        throw task.getException();
                    } catch (FirebaseAuthActionCodeException e) {
                        erroExcecao = "Digite uma senha mais forte, com no mínimo 8 caracteres com letras e números";
                    } catch (FirebaseAuthInvalidCredentialsException e) {
                        erroExcecao = "O e-mail digitado é inválido, digite um novo e-mail";
                    } catch (FirebaseAuthUserCollisionException e) {
                        erroExcecao = "Este e-mail já está cadastrado no sistema";
                    } catch (Exception e) {
                        erroExcecao = "Erro ao afetuar o cadastro";
                        e.printStackTrace();
                    }
                    Toast.makeText(CadastroActivity.this, "Erro: " + erroExcecao, Toast.LENGTH_LONG).show();

                }
            }
        });
    }

    public void abrirLoginUsuario() {
        Intent intent = new Intent(CadastroActivity.this, LoginActivity.class);
        startActivity(intent);
        finish();
    }
}