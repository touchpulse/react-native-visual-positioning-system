#import "VisualPositioningSystem.h"

@implementation VisualPositioningSystem

RCT_EXPORT_MODULE()

- (void)printMsg:(NSString *)message {
    NSLog(@"%@", message);
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeVisualPositioningSystemSpecJSI>(params);
}

@end
