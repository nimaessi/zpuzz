package com.memorygame;

import android.content.Context;
import android.content.SharedPreferences;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class SharePrefModule extends ReactContextBaseJavaModule {
    private SharedPreferences sharedPreferences;
    private static final String SHARE_PREF_NAME = "MemoryGame";
    private Context context;

    SharePrefModule(ReactApplicationContext context){
        super(context);
        this.context = context;
        this.sharedPreferences=context.getSharedPreferences(SHARE_PREF_NAME,context.MODE_PRIVATE);
    }
    @ReactMethod(isBlockingSynchronousMethod = true)
    public void setSound(boolean on){
        SharedPreferences.Editor editor = sharedPreferences.edit();
        editor.putBoolean("sound", on);
        editor.apply();
    }
    @ReactMethod(isBlockingSynchronousMethod = true)
    public boolean getSound(){
        return sharedPreferences.getBoolean("sound",true);
    }

    @NonNull
    @Override
    public String getName() {
        return "SharePrefModule";
    }
}
