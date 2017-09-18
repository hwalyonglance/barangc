import { bootstrapServiceWorker } from '@angular/service-worker/worker';
import { StaticContentCache } from '@angular/service-worker/plugins/static';
bootstrapServiceWorker({
	manifestUrl: "/ngsw-manifest.json",
	plugins: [
		StaticContentCache()
		// , ....
	]
})
