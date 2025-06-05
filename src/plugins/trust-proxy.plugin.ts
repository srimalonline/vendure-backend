import { VendurePlugin, PluginCommonModule } from '@vendure/core';
import { INestApplication } from '@nestjs/common';

@VendurePlugin({
  imports: [PluginCommonModule],
})
export class TrustProxyPlugin {
  static async onVendureBootstrap(app: INestApplication): Promise<void> {
    const expressApp = app.getHttpAdapter().getInstance();
    expressApp.set('trust proxy', true);
    console.log('[TrustProxyPlugin] Express trust proxy enabled');
  }
}
