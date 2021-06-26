#import <Foundation/Foundation.h>
//#import <EXUpdates/EXUpdatesAppController.h>
#import <React/RCTBridgeDelegate.h>
#import <UIKit/UIKit.h>

//@interface AppDelegate : UIResponder <UIApplicationDelegate, RCTBridgeDelegate>
#import <UMCore/UMAppDelegateWrapper.h>

//@interface AppDelegate : UMAppDelegateWrapper <UIApplicationDelegate, RCTBridgeDelegate>
//@property (nonatomic, strong) UIWindow *window;
//@interface AppDelegate : UMAppDelegateWrapper <RCTBridgeDelegate, EXUpdatesAppControllerDelegate>
@interface AppDelegate : UMAppDelegateWrapper <RCTBridgeDelegate>
@end
