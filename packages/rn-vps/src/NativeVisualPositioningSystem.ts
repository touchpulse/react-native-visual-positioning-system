import { TurboModule, TurboModuleRegistry } from "react-native";
import type { EventEmitter } from "react-native/Libraries/Types/CodegenTypes";

export interface Spec extends TurboModule {
  add(a: number, b: number): Promise<number>;
  start(): Promise<null>;
  readonly onValueChanged: EventEmitter<number>;
}

export default TurboModuleRegistry.getEnforcing<Spec>(
  "VisualPositioningSystem"
);
