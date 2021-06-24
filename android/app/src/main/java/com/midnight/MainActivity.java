package com.midnight;

import android.os.Bundle;
import android.view.WindowManager;

import expo.modules.splashscreen.singletons.SplashScreen;
import expo.modules.splashscreen.SplashScreenImageResizeMode;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactRootView;

public class MainActivity extends ReactActivity {

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
//    getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN, WindowManager.LayoutParams.FLAG_FULLSCREEN);
    SplashScreen.show(this, SplashScreenImageResizeMode.NATIVE, ReactRootView.class, true);
  }

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "Midnight";
  }
}
