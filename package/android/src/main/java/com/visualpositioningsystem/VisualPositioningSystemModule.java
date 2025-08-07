package com.visualpositioningsystem;

import androidx.annotation.NonNull;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;

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

  @Override
  public void add(double a, double b, Promise promise) {
    promise.resolve(a + b + 2);
    emitOnValueChanged(a + b + 1);
  }
}
