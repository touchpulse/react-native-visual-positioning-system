package com.visualpositioningsystem;

import android.content.Intent;
import androidx.annotation.NonNull;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactMethod;

public class VisualPositioningSystemModule extends NativeVisualPositioningSystemSpec {

  public static String NAME = "VisualPositioningSystem";

  VisualPositioningSystemModule(ReactApplicationContext context) {
    super(context);
  }

  @Override
  @NonNull
  public void start(Promise promise) {
    // Initialization logic can be added here if needed
    promise.resolve(null);
    // Emit an initial value change event
    emitOnValueChanged(0);
  }

  @Override
  @NonNull
  public String getName() {
    return NAME;
  }

  @ReactMethod
  public void startVps() {
    ReactApplicationContext context = getReactApplicationContext();
    Intent intent = new Intent(context, GeospatialActivity.class);
    intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
    context.startActivity(intent);
  }

  @Override
  public void add(double a, double b, Promise promise) {
    promise.resolve(a + b + 2);
    emitOnValueChanged(a + b + 1);
  }
}
