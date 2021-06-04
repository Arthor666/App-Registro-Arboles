package com.example.arbolillov3;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class MainActivity extends AppCompatActivity {
    EditText editTextName,editTextPassword;
    RequestQueue queue ;
    TextView resultTextView;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        editTextName = (EditText) findViewById(R.id.editTextName);
        editTextPassword = (EditText) findViewById(R.id.editTextPassword);
        queue = Volley.newRequestQueue(this );
        resultTextView = (TextView) findViewById(R.id.resultTextView);
    }

    public void login(View view){
        String name = editTextName.getText().toString();
        String password = editTextPassword.getText().toString();
        String url = "http://192.168.0.15:3000/usuario?email="+name+"&password="+password;
        if(!password.isEmpty() && !name.isEmpty()){
            StringRequest stringRequest = new StringRequest(Request.Method.GET, url,
                    new Response.Listener<String>() {
                        @Override
                        public void onResponse(String response) {// Display the first 500 characters of the response string.
                            if(!response.isEmpty()){
                                Intent menu = new Intent(getBaseContext(),NavActivity.class);
                                startActivity(menu);
                            }else{
                                Toast.makeText(getBaseContext(),"Usuario o contraseña incorrectos",Toast.LENGTH_SHORT).show();
                            }
                        }
                    }, new Response.ErrorListener() {
                @Override
                public void onErrorResponse(VolleyError error) {
                    resultTextView.setText("No hay conexión");
                }
            });
            queue.add(stringRequest);

        }else{
            Toast.makeText(this,"Ingresa todos los datos",Toast.LENGTH_SHORT).show();
        }

    }
}