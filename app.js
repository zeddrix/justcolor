
import { respond } from './kit.js';
import root from './generated/root.svelte';
import { set_paths, assets, base } from './runtime/paths.js';
import { set_prerendering } from './runtime/env.js';
import * as user_hooks from "./hooks.js";

const template = ({ head, body }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<meta\n\t\t\tname=\"description\"\n\t\t\tcontent=\"What's your favorite color? Or do you have many favorite colors? With JustColor, you can enjoy all the various colors you can think of, including your favorite color(s), by simply painting your webpage with the color buttons you create! So try it out! JustColor, and enjoy!\"\n\t\t/>\n\t\t<link rel=\"icon\" href=\"/favicon.png\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\n\t\t<!-- SMUI Styles -->\n\t\t<link rel=\"stylesheet\" href=\"/smui.css\" />\n\t\t<!-- Material Icons -->\n\t\t<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" />\n\t\t<!-- Roboto -->\n\t\t<link\n\t\t\trel=\"stylesheet\"\n\t\t\thref=\"https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700\"\n\t\t/>\n\t\t<!-- Roboto Mono -->\n\t\t<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Roboto+Mono\" />\n\n\t\t" + head + "\n\t</head>\n\t<body>\n\t\t<div id=\"svelte\">" + body + "</div>\n\t</body>\n</html>\n";

let read = null;

set_paths({"base":"","assets":""});

// this looks redundant, but the indirection allows us to access
// named imports without triggering Rollup's missing import detection
const get_hooks = hooks => ({
	getSession: hooks.getSession || (() => ({})),
	handle: hooks.handle || (({ request, resolve }) => resolve(request)),
	handleError: hooks.handleError || (({ error }) => console.error(error.stack)),
	externalFetch: hooks.externalFetch || fetch
});

let default_protocol = 'https';

// allow paths to be globally overridden
// in svelte-kit preview and in prerendering
export function override(settings) {
	default_protocol = settings.protocol || default_protocol;
	set_paths(settings.paths);
	set_prerendering(settings.prerendering);
	read = settings.read;
}

export class App {
	constructor(manifest) {
		const hooks = get_hooks(user_hooks);

		this.options = {
			amp: false,
			dev: false,
			floc: false,
			get_stack: error => String(error), // for security
			handle_error: (error, request) => {
				hooks.handleError({ error, request });
				error.stack = this.options.get_stack(error);
			},
			hooks,
			hydrate: true,
			manifest,
			paths: { base, assets },
			prefix: assets + '/_app/',
			prerender: true,
			read,
			root,
			service_worker: null,
			router: true,
			ssr: true,
			target: "#svelte",
			template,
			trailing_slash: "never"
		};
	}

	render(request, {
		prerender
	} = {}) {
		// TODO remove this for 1.0
		if (Object.keys(request).sort().join() !== 'headers,method,rawBody,url') {
			throw new Error('Adapters should call app.render({ url, method, headers, rawBody })');
		}

		const host = request.headers["host"];
		const protocol = default_protocol;

		return respond({ ...request, url: new URL(request.url, protocol + '://' + host) }, this.options, { prerender });
	}
}
