/**
 * grunt-init-go-main
 * https://github.com/gedex/grunt-init-go-main
 *
 * Copyright (c) 2014 Akeda Bagus <admin@gedex.web.id>
 * Licensed under the MIT License.
 */

'use strict';

// Basic template description.
exports.description = 'Create a Go main program.';

// Template-specific notes to be displayed before question prompts.
exports.notes = '';

// Template-specific notes to be displayed after the question prompts.
exports.after = '';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {
	init.process( {}, [
		// Prompt for these values.
		{
			name: 'bin',
			message: 'Binary name (no whitespace)',
			default: 'hello-world'
		},
		init.prompt('main_file', 'main'),
		init.prompt('description', 'My awesome Go program that prints "Hello World!"'),
		init.prompt('licenses', 'MIT'),
		init.prompt('repository', 'https://github.com/gedex/hello-world'),
		init.prompt('author_name'),
		init.prompt('author_email'),
	], function(err, props) {
		// Files to copy (and process).
		var files = init.filesToCopy(props);

		// Add properly-named license files.
		init.addLicenseFiles(files, props.licenses);

		// Actually copy (and process) files.
		init.copyAndProcess(files, props);
		
		// All done!
		done();
	});	
};
